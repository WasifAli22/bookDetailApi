import { API_BASE_URL } from "@/app/utils"
const getBookDetail = async (id: number) => {
    const res = await fetch(`${API_BASE_URL}/books/${id}`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error("Something went wrong")
    }
    return res.json()
}

const BookDetail = async ({ params, }: {
    params: { id: number }
}) => {
    const BookDetail = await getBookDetail(params.id)
    return (
        <div className="">
            <h2 className="font-bold text-3xl my-3">{BookDetail?.name}</h2>
            <p>author: {BookDetail.author}</p>
        </div>
    )
}
export default BookDetail