import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { IAuthRequest } from "@/services/api-redux-types/auth.types";
import { useLoginUserMutation } from "@/services/api/auth";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { authValidationSchema } from "./validation";
import image from "@/assets/images/bg.jpg"

export const AuthPage = () => {
    const [authData, setAuthData] = useState<IAuthRequest>();
    const [loginUser, { isLoading }] = useLoginUserMutation()
    const [inputErrorMessage, setInputErrorMessage] = useState<string>()
    const [isInputError, setIsInputError] = useState<boolean>(false);
    const navigate = useNavigate();


    const handleInputChange = ({ key, value }: any) => {
        setAuthData((prev: any) => ({
            ...prev,
            [key]: value
        }))
    }

    const authButtonHandler = async () => {

        let validationResult = authValidationSchema.safeParse(authData)
        if (!validationResult.success) {

            if (validationResult.error.errors.length > 0) {
                setIsInputError(true);
                setInputErrorMessage(validationResult.error.errors[0].message)
            }
        } else {
            let { data } = await loginUser(authData as IAuthRequest)

            if (data?.success == true) {
                navigate("/admin/dashboard")
            }

            if (data?.success == false) {
                toast.error(data.message)

            }

        }


    }

    let image_address = image
    return (
        <div className="h-full text-center">
            <Toaster />
            <div className="grid grid-cols-3 p-4 h-full">
                <div className="col-span-2 bg-lime-700 rounded-2xl" style={{backgroundImage: `url(${image})`, backgroundSize:"cover"}}>
                    a
                </div>

                <div className="flex col-span-1 items-center h-full">
                    <div className="p-10 w-full flex justify-center">
                        <div className="w-[19rem] flex items-center flex-col justify-center">
                            <p className="font-semibold text-xl w-[15rem] mb-2 ">Sign in to <span>Invntry</span></p>
                            <p className="mb-5 text-xs ">Welcome to Invntry, please provide your credentials given to you by the admin.</p>

                            <div className="w-full">
                                <div className="mb-2">
                                    <Input isError={isInputError} placeholder="Enter email address" name="username" onChangeHandler={handleInputChange} style_type="auth_style" />
                                </div>
                                <div className="mb-2">
                                    <Input isError={isInputError} name="password" placeholder="Password" onChangeHandler={handleInputChange} type="password" style_type="auth_style" />
                                </div>

                                {isInputError && <p className="text-xs pb-1 text-red-500">{inputErrorMessage}</p>}

                                <p className="underline font-semibold text-xs mb-4">Forgot password?</p>

                                <div className="mb-3">
                                    <Button content="Log In" style_type="auth" handler={authButtonHandler} is_loading={isLoading} loading_text="Logging In..." />
                                </div>
                            </div>

                            {/* <div className="border rounded p-1 flex items-center justify-center">
                                <p className="text-xs">Username: admin Password:12345678</p>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}