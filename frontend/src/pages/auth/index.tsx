import { Input } from "@/components/input";
import image from "@/assets/auth.jpg";
import { Button } from "@/components/button";

export const AuthPage = () => {
    let image_address = image
    return (
        <div className="h-full grid grid-cols-3">
            <div className="flex items-center  col-span-1">
                <div className="p-10 w-full flex justify-center">
                    <div className="w-[20rem]">
                        <p className="font-bold text-xl w-[15rem] mb-3">Log In</p>

                        <div className="mb-2">
                            <Input label="Username" />
                        </div>
                        <div className="mb-2">
                            <Input label="Password" type="password"/>
                        </div>

                        <p className="underline text-xs mb-4">Forgot password?</p>

                        <div>
                            <Button content="Log In"/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-red-400 col-span-2" style={{ backgroundImage: `url(${image_address})`, backgroundSize: "cover" }}>
                <div className="wrapper h-full flex items-end">
                    <div className="text-white px-5 py-20">
                        <p className="">Admin</p>
                        <p className="text-4xl font-semibold mb-2">QuickCart</p>
                        <p className="w-[30rem] leading-8">Your online shop for fast, convenient, and hassle-free shopping.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}