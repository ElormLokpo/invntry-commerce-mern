import { Input } from "@/components/input";
import image from "@/assets/auth.jpg";
import { Button } from "@/components/button";
import { useState } from "react";
import { IAuthRequest } from "@/services/api-redux-types/auth";
import { useLoginUserMutation } from "@/services/api/auth";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { authValidationSchema } from "./validation";


export const AuthPage = () => {
    const [authData, setAuthData] = useState<IAuthRequest>();
    const [loginUser, { isLoading }] = useLoginUserMutation()
    const navigate = useNavigate();
   

    const handleInputChange = ({ key, value }: any) => {
        setAuthData((prev: any) => ({
            ...prev,
            [key]: value
        }))
    }

    const authButtonHandler = async () => {

        let validationResult = authValidationSchema.safeParse(authData)

        // let { data } = await loginUser(authData as IAuthRequest)

        // console.log(data);
        // if (data?.success==true){
        //     navigate("/admin/dashboard")
        // }

        // if (data?.success == false) {
        //     toast.error(data.message)
        // }

    }

    let image_address = image
    return (
        <>
            <Toaster />
            <div className="h-full grid grid-cols-3">
                <div className="flex items-center  col-span-1">
                    <div className="p-10 w-full flex justify-center">
                        <div className="w-[19rem]">
                            <p className="font-bold text-xl w-[15rem] mb-3">Log In</p>

                            <div className="mb-2">
                                <Input isError={true} label="Username" name="username" onChangeHandler={handleInputChange} style_type="auth_style" />
                            </div>
                            <div className="mb-2">
                                <Input label="Password" name="password" onChangeHandler={handleInputChange} type="password" style_type="auth_style" />
                            </div>

                            <p className="underline text-xs mb-4">Forgot password?</p>

                            <div className="mb-3">
                                <Button content="Log In" style_type="auth" handler={authButtonHandler} is_loading={isLoading} loading_text="Logging In..." />
                            </div>

                            <div className="border rounded p-1 flex items-center justify-center">
                                <p className="text-xs">Username: admin Password:12345678</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-2" style={{ backgroundImage: `url(${image_address})`, backgroundSize: "cover" }}>
                    <div className="wrapper h-full flex items-end">
                        <div className="text-white px-5 py-20">
                            <p className="">Admin</p>
                            <p className="text-4xl font-semibold mb-2">QuickCart</p>
                            <p className="w-[30rem] leading-8">Your online shop for fast, convenient, and hassle-free shopping.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}