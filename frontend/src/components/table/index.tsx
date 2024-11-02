import { IProps } from "./types"

export const Table = ({ headers, content, isLoading }: IProps) => {


    return (
        <div className="text-xs rounded-ld">
            <table className="w-full shadow-lg">
                <thead>
                    <tr className="bg-gray-100">
                        {
                            headers.map((i, index) => <td className="py-2 px-2 font-semibold" key={index}>{i}</td>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <tr>
                        <td className="py-3 px-2">Loading...</td>
                    </tr>:content}
                </tbody>
            </table>

        </div>
    )
}