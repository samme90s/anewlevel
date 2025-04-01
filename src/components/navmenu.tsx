import { FC } from "react"
import { cn } from "../lib/utils"

interface NavMenuProps {
    isMenuOpen: boolean
    toggleMenu: () => void
    className?: string
}

export const NavMenu: FC<NavMenuProps> = ({ isMenuOpen, toggleMenu, className }) => {
    return (
        <button
            type="button"
            className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                "focus:outline-none focus:ring-2 focus:ring-inset",
                className,
            )}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
        >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
        </button>
    )
}
