export default function Navbar(){
    return(
        <nav className="flex items-center justify-between">
            <a
            href="#"
            className="text-2xl font-bold"
            >
                ORUMA<span className="text-[#F58220]">.</span>
            </a>

            <a
                href="#services"
                className="hidden text-xl font-bold md:block"
            >
                Our Services
            </a>

            <a
                href="https://wa.me/917356859098"
                className="rounded-full bg-[#F58220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#db6c12]"
            >
                Contact Us
            </a>
        </nav>
    )
}