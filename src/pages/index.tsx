const items = [
    "vancouver",
    "seattle",
    "portland",
    "seattle",
    "san francisco",
    "los angeles",
    "sad diego"
]

export default function Home() {
    return (
        <div className={"min-h-screen flex justify-center items-center py-32"}>
            <div className={"grid auto-cols-fr gap-1 bg-yellow-400 p-5 rounded-3xl shadow-lg shadow-zinc-400"}>
                <div className={"pt-96"}>
                    <span className={"font-medium text-2xl"}>Select Destination</span>
                </div>
                <div className={"flex flex-col border-t-2 border-black pt-5"}>
                    <ul className={"space-y-10"}>
                        {items.map((item, index) =>
                            <li key={index} className={"font-semibold capitalize flex items-center space-x-3 cursor-pointer group"}>
                                <div
                                    className={"w-12 h-12 bg-black rounded-full flex justify-center items-center font-medium text-yellow-400 text-2xl transition-colors duration-300 group-hover:bg-white"}>
                                    {item.slice(0, 1)}
                                </div>
                                <span className={"text-7xl transition-colors duration-300 group-hover:text-white"}>
                                    {item}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
