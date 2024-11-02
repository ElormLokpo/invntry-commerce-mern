import { PiCodesandboxLogoLight } from "react-icons/pi";
import { ProductTable } from "../products/components/table";
import { useGetAllProductsQuery } from "@/services/api/product";

const StatCard = ({number, title}:{number:string, title:string}) => {
    return (
        <div className="p-4 ">
            <div className="border-r border-gray-200">
                <p className="text-[0.6rem] mb-1 text-gray-600">{title}</p>
                <p className="font-semibold text-xl mb-5">{number}</p>
            </div>
            <div className="flex text-[0.5rem] items-center gap-2">
                <div>
                    <p className=" bg-emerald-100 rounded-full text-emerald-600 font-semibold px-2 py-[0.1rem]">-12%</p>
                </div>
                <div>
                    <p className="text-gray-500"> (+14.5%)</p>
                </div>
            </div>
        </div>
    )
}

const OrderCard = () => {
    return (
        <div className="border rounded p-2">
            <div className="border-b flex justify-between py-1">
                <div className="flex gap-2 items-center">
                    <p className="text-[0.7rem] text-gray-500">#ORD1304523</p>
                    <p className="text-[0.4rem] bg-gray-100 rounded p-1">NEW</p>
                </div>
                <div>
                    <p className="text-[0.5rem] text-gray-500">12 Jan 2025</p>
                </div>
            </div>

            <div className="py-5 flex justify-between items-center">
                <div className="flex gap-1 items-center text-sm">
                    <PiCodesandboxLogoLight />
                    <p className="text-gray-500">Items</p>
                </div>

                <div>
                    <p className="text-[0.6rem] text-lime-600 font-semibold">GHS 4555</p>
                </div>
            </div>

        </div>
    )
}

const ProgressBar = () => {
    let rnd = Math.ceil(10 + Math.random() * 75)

    return (

        <div className="w-full bg-gray-200 rounded flex items-center gap-3 h-3">
            <div className="bg-blue-600 h-3 rounded" style={{ width: `${rnd}%` }}></div>
            <p className="text-[0.6rem] text-gray-500">{rnd} %</p>
        </div>


    )
}

const ProgressComponent = ({ product_name}:{product_name:string}) => {
    return (
        <div className=" items-center mb-6">
            <p className="text-[0.7rem]">{product_name} </p>
            <ProgressBar/>
        </div>

    )
}

export const HomePage = () => {
    const {data} = useGetAllProductsQuery(undefined)

    console.log(data);
    return (
        <div className="h-full p-10">
            <div className="mb-3">
                <p className="font-semibold">QuickCart Performance Overview</p>
            </div>

            <div className="shadow-lg mb-5 shadow-gray-100 grid grid-cols-5">
                {[
                    {title:"Ecommerce Revenue", number:"GHS 45,550"},
                    {title:"Monthly Revenue", number:"GHS 7,236"},
                    {title:"Weekly Revenue", number:"GHS 5,143"},
                    {title:"Daily Revenue", number:"GHS 345"},
                    {title:"Total Orders", number:" 10,567"},




                ].map((item, index) => <StatCard number={item.number} title={item.title} key={index} />)}

            </div>

            <div className="mb-7 shadow-lg p-4 rounded">
                <p className="text-gray-500 mb-4 text-xs font-semibold mb-2">Revenue Rate</p>

                <div>

                    {Array.isArray(data?.data) ? data?.data.map((i,index)=><ProgressComponent key={index} product_name={i.product_name} />) : null}
                   


                </div>
            </div>

            <div className="mb-2">
                <p className="text-gray-500 text-xs font-semibold mb-2">Latest Orders</p>

                <div className="grid grid-cols-5 gap-2">
                    {[1, 1, 1, 1, 1].map((i, index) => <OrderCard key={index} />)}
                </div>
            </div>

            <div>
                <ProductTable />
            </div>
        </div>
    )
}