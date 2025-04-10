import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the NavMenu component.
interface NavMenuProps {
    // Boolean indicating if the mobile menu is currently open. Required.
    isMenuOpen: boolean
    // Function to call when the button is clicked to toggle the menu state. Required.
    toggleMenu: () => void
    // Optional CSS class names for custom styling of the button.
    className?: string
}

// The NavMenu component renders the hamburger/close button used to
// toggle the mobile navigation menu visibility.
export const NavMenu: FC<NavMenuProps> = ({ isMenuOpen, toggleMenu, className }) => {
    return (
        // Renders the button element for toggling the mobile menu.
        <button
            type="button" // Standard practice for buttons not submitting forms.
            className={cn(
                // Base styling for button layout, padding, and focus states.
                "inline-flex items-center justify-center p-2 rounded-md",
                "focus:outline-none focus:ring-2 focus:ring-inset",
                // Merges optional custom classes passed via props.
                className,
            )}
            // Accessibility: Associates button with the mobile menu panel it controls.
            aria-controls="mobile-menu"
            // Accessibility: Indicates whether the controlled menu is expanded (true) or collapsed (false).
            aria-expanded={isMenuOpen}
            // Calls the toggleMenu function passed from the parent component on click.
            onClick={toggleMenu}
        >
            {/* Screen-reader only text providing context for the button's action. */}
            <span className="sr-only">Open main menu</span>

            {/* Conditionally renders the appropriate icon based on the menu state. */}
            {isMenuOpen ? (
                // Renders a close ('X') icon when the menu is open.
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    // Hides decorative icon from screen readers.
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                // Renders a hamburger icon when the menu is closed.
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    // Hides decorative icon from screen readers.
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
        </button>
    )
}
