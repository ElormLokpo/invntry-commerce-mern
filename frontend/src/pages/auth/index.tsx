import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { IAuthRequest } from "@/services/api-redux-types/auth.types";
import { useLoginUserMutation } from "@/services/api/auth";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { authValidationSchema } from "../../schemas";
import image from "@/assets/images/bg.jpg"
import { ThemeSwitcher } from "@/components/theme-switcher";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"

export const AuthPage = () => {
    const [authData, setAuthData] = useState<IAuthRequest>();
    const [loginUser, { isLoading }] = useLoginUserMutation()
    const [isError, setIsError] = useState<boolean>();
    const [errorMessage, setErrorMessage] = useState<string>()
    const navigate = useNavigate();

    const {register, formState:{errors}, handleSubmit} = useForm({
        resolver: zodResolver(authValidationSchema)
    })


    const handleInputChange = ({ key, value }: any) => {
        setAuthData((prev: any) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleFormSubmit = async (authData:any) => {
        

            let { data } = await loginUser(authData as IAuthRequest)

            if (data?.success == true) {
                toast.success('Login successful')
                navigate("/admin/dashboard")
            }

            if (data?.success == false) {
                toast.error(data.message)
                setIsError(true);
                setErrorMessage(data.message);

            }



    }

    let image_address = image
    return (
        <div className="h-full text-center dark:bg-black dark:text-white">
            <Toaster />
            <div className="grid grid-cols-3 p-4 h-full">
                <div className="col-span-2 bg-lime-700 rounded-2xl" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
                    a
                </div>

                <div className="flex col-span-1 items-center h-full">
                    <div className="p-10 w-full flex justify-center">
                        <div className="w-[19rem] flex items-center flex-col justify-center">
                            <div className="mb-3">
                                <ThemeSwitcher />
                            </div>

                            <p className="font-semibold text-xl w-[15rem] mb-2 ">Sign in to <span>Invntry</span></p>
                            <p className="mb-5 text-xs ">Welcome to Invntry, please provide your credentials given to you by the admin.</p>

                            <form className="w-full" onSubmit={handleSubmit(handleFormSubmit)}>
                                <div className="mb-2">
                                    <Input register={register} errors={errors} placeholder="Enter email address" name="username" style_type="auth_style" />
                                </div>
                                <div className="mb-2">
                                    <Input register={register} errors={errors} name="password" placeholder="Password" type="password" style_type="auth_style" />
                                </div>

                                {isError && <p className="text-xs pb-1 text-red-500">{errorMessage}</p>}

                                <p className="underline font-semibold text-xs mb-4">Forgot password ?</p>

                                <div className="mb-3">
                                    <Button isSubmit={true} content="Log In" style_type="auth" handler={()=>{}} is_loading={isLoading} loading_text="Logging In..." />
                                </div>
                            </form>

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