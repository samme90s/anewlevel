import { FC } from "react"
// Import Link component and useLocation hook from React Router for navigation.
import { Link, useLocation } from "react-router-dom"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the structure for a single navigation link object.
interface LinkData {
    // Display text for the link.
    name: string
    // Target URL path for the link.
    href: string
}

// Defines the props accepted by the NavLinks component.
interface NavLinksProps {
    // An array of LinkData objects defining the navigation items. Required.
    links: LinkData[]
    // Optional base CSS classes applied to every link.
    className?: string
    // Optional CSS classes applied only to the currently active link.
    activeClassName?: string
}

// The NavLinks component renders a list of navigation links.
// It automatically highlights the link corresponding to the current URL path.
export const NavLinks: FC<NavLinksProps> = ({
    links,
    className, // Base styles for all links (layout, typography).
    // Default style for the active link if not overridden by props.
    activeClassName = "text-blue-500 hover:text-blue-500",
}) => {
    // Get the current location object from React Router.
    const location = useLocation()
    // Extract the current URL path string (e.g., "/about").
    const pathname = location.pathname

    return (
        // Use a React Fragment as the root element doesn't need a DOM node.
        <>
            {/* Map over the links array to render each navigation item. */}
            {links.map((link) => {
                // Determine if this link's href matches the current URL path.
                const isActive = pathname === link.href

                // Render each navigation item as a React Router Link component.
                return (
                    <Link
                        key={link.name} // Unique key for React list rendering.
                        to={link.href} // Destination path for the link.
                        // Apply classes: base, transitions, and active class if isActive is true.
                        className={cn(
                            "p-2 transition-colors duration-200", // Default padding and transition.
                            className, // Apply base styles passed via props.
                            isActive && activeClassName, // Conditionally apply active styles.
                        )}
                        // Accessibility attribute: indicates the current page to screen readers.
                        aria-current={isActive ? "page" : undefined}
                    >
                        {/* Display the link text. */}
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}
