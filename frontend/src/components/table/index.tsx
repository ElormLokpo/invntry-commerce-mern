import { IProps } from "./types"

export const Table = ({ headers, content }: IProps) => {


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
                    {content}
                </tbody>
            </table>

        </div>
    )
}