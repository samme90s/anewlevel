import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the Avatar component.
interface AvatarProps {
    // Image source URL. Required.
    src: string
    // Alt text for the image. Required for accessibility.
    alt: string
    // Optional CSS class names for layout or style overrides.
    className?: string
}

// The Avatar component displays a styled, circular image.
// Commonly used for user profile pictures.
export const Avatar: FC<AvatarProps> = ({ src, alt, className }) => {
    return (
        // Renders an image element with specific avatar styling.
        <img
            src={src} // Image source.
            alt={alt} // Alternative text.
            className={cn(
                // Core Avatar Styles applied by default.
                "w-32", // Default width.
                "h-32", // Default height.
                "rounded-full", // Makes the image circular.
                "object-cover", // Ensures image covers the area without distortion.
                "object-top", // Focuses cropping towards the top of the image.
                "shadow-lg", // Adds a shadow effect.
                "border-2", // Adds a border.
                "border-black", // Sets border color to black.

                // Merges any additional classes passed via props for customization.
                className,
            )}
        />
    )
}
