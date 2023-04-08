import Link from "next/link"
const Header = () => {
    return (
        <>
            <header className="flex justify-between font-semibold bg-slate-500 py-2 text-white">
                <Link href="/"> Book API</Link>
                <Link href="/register">register</Link>
            </header>
        </>
    )
}
export default Header