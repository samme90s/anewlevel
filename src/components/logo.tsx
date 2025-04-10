import { FC } from "react"
// Import Link component from React Router for navigation.
import { Link } from "react-router-dom"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the Logo component.
interface LogoProps {
    // Logo image source URL. Required.
    src: string
    // Optional CSS class names for custom styling of the logo image.
    className?: string
}

// The Logo component displays the site logo image.
// The logo image is wrapped in a link pointing to the homepage.
export const Logo: FC<LogoProps> = ({ src, className }) => {
    return (
        // Container div using flexbox properties for alignment and shrinking behavior.
        <div className="flex-shrink-0 flex items-center">
            {/* React Router Link makes the logo clickable, navigating to the homepage. */}
            <Link to="/">
                {/* Image element displaying the logo. */}
                <img
                    src={src} // Image source URL.
                    alt="Logo" // Alt text for accessibility.
                    // Apply default height and merge optional custom classes passed via props.
                    className={cn("h-8 w-auto", className)}
                />
            </Link>
        </div>
    )
}
