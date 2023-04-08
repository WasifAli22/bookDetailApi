import BookDetailView from "@/app/views/bookDetail"
const BookDetail = (props: any) => {
    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            < BookDetailView {...props} />
        </>
    )
}
export default BookDetail