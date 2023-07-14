import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

function Navbar() {
    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-white">
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <NavbarLeft />
                        <NavbarRight />
                    </div>
                </div>
            </nav>
            <div className="h-3 bg-gradient-to-b from-white to-transparent" />
        </div>
    )
}

export default Navbar;
