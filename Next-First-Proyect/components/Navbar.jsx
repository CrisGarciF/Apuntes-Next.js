import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-5 font-bold text-black">
            <Link href="/">
                Users
            </Link>

            <ul>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
