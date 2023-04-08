import { API_BASE_URL } from "@/app/utils"
import Link from "next/link"
import { log } from "console"
const getBookList = async () => {
    const res = await fetch(`${API_BASE_URL}/books`)
    if (!res.ok) {
        throw new Error("Something went wrong")
    }
    return res.json()
}
const Home = async () => {
    const books = await getBookList()
    console.log(books)
    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {books?.map((item: any) => (
                    <Link key={item.id} href={`/bookDetail/${item.id}`}>
                        <div className="rounded-md shadow-md bg-gray-900 text-gray-100 my-14" >
                            <img src="https://source.unsplash.com/random/300x300/?2" alt="d" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
                                    <p className="dark:text-gray-100">Type: {item.type}</p>
                                    <p className="dark:text-gray-100">available {item.available ? 'true' : 'false'}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default Home