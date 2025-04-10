import { FC, useState } from "react"
// Import child components used within the NavBar.
import { NavMenu } from "./navmenu"
import { NavLinks } from "./navlinks"
import { Logo } from "./logo"

// Defines the structure for a single navigation link object.
// Note: Consider reusing a shared type if also defined elsewhere.
interface NavLink {
    name: string
    href: string
}

// Defines the props accepted by the NavBar component.
interface NavBarProps {
    // An array of NavLink objects defining the navigation items. Required.
    navLinks: NavLink[]
    // Optional CSS class names for custom styling of the main nav element.
    className?: string
}

// The NavBar component renders the main site navigation bar.
// It includes the logo, navigation links, and handles responsive layout
// switching between desktop view and a mobile hamburger menu.
export const NavBar: FC<NavBarProps> = ({ navLinks, className }) => {
    // State to control the visibility of the mobile menu panel.
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Function to toggle the mobile menu open/closed state.
    const toggleMenu = () => setIsMenuOpen((prev) => !prev)

    return (
        // Main HTML nav element. Applies optional custom classes.
        <nav className={className}>
            {/* Container div for max width and horizontal padding. */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Flex container to layout navbar items horizontally. */}
                <div className="flex justify-between h-16">
                    {/* Left group containing logo and navigation elements. */}
                    <div className="flex">
                        {/* Container for the mobile menu button (hamburger icon). */}
                        {/* Visible only on smaller screens (below md breakpoint). */}
                        <div className="ml-2 mr-2 flex items-center md:hidden">
                            {/* NavMenu component renders the hamburger button. */}
                            {/* Controls mobile menu visibility via isMenuOpen state and toggleMenu function. */}
                            <NavMenu
                                isMenuOpen={isMenuOpen}
                                toggleMenu={toggleMenu}
                                className="bg-neutral-900 hover:bg-neutral-800 hover:text-white"
                            />
                        </div>

                        {/* Renders the site logo component. */}
                        <Logo src="/images/logo.png" />

                        {/* Container for the desktop navigation links. */}
                        {/* Hidden on smaller screens, visible from md breakpoint upwards. */}
                        <div className="hidden md:ml-6 md:flex md:space-x-4">
                            {/* NavLinks component renders the list of links for desktop view. */}
                            <NavLinks links={navLinks} className="hover:text-gray-400" />
                        </div>
                    </div>
                    {/* Right group could be added here if needed, e.g., for action buttons */}
                </div>
            </div>

            {/* Mobile menu panel. */}
            {/* Conditionally rendered based on the isMenuOpen state. */}
            {/* Hidden on medium screens and above (md:hidden). */}
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    {/* Inner container for padding and spacing of mobile links. */}
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* NavLinks component renders the list of links, styled for mobile (block). */}
                        <NavLinks links={navLinks} className="block hover:text-gray-400" />
                    </div>
                </div>
            )}
        </nav>
    )
}
