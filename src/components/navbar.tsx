import { FC, useState } from "react"
import { cn } from "../lib/utils"
import { NavMenu } from "./navmenu"
import { NavLinks } from "./navlinks"
import { Logo } from "./logo"

interface NavLink {
    name: string
    href: string
}

interface NavBarProps {
    navLinks: NavLink[]
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ navLinks, className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen((prev) => !prev)

    return (
        <nav className={cn("bg-black/80", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Mobile menu button (only visible on smaller screens) */}
                        <div className="ml-2 mr-2 flex items-center md:hidden">
                            <NavMenu
                                isMenuOpen={isMenuOpen}
                                toggleMenu={toggleMenu}
                                className="bg-neutral-900 hover:bg-neutral-800 hover:text-white"
                            />
                        </div>

                        {/* Logo */}
                        <Logo src="logo.png" />

                        {/* Desktop menu items (hidden on smaller screens) */}
                        <div className="hidden md:ml-6 md:flex md:space-x-4">
                            <NavLinks links={navLinks} className="text-white hover:bg-neutral-900" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, shown only if isMenuOpen is true */}
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLinks links={navLinks} className="block text-white hover:bg-neutral-900" />
                    </div>
                </div>
            )}
        </nav>
    )
}
