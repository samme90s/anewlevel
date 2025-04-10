import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the Preview component.
interface PreviewProps {
    // Image source URL. Required.
    src: string
    // Alt text for the image. Required for accessibility.
    alt: string
    // Optional CSS class names for custom styling or layout adjustments.
    className?: string
}

// The Preview component displays an image with prominent styling,
// suitable for featured images or previews.
export const Preview: FC<PreviewProps> = ({ src, alt, className }) => {
    return (
        // Renders an image element with specific preview styling.
        <img
            src={src} // Image source.
            alt={alt} // Alternative text.
            className={cn(
                // Core Preview Styles applied by default.
                "border-6", // Adds a thick border.
                "border-black", // Sets the border color to black.
                "rounded-2xl", // Applies large rounded corners.
                "shadow-lg", // Adds a large box shadow.
                // Merges any additional classes passed via props for customization.
                className,
            )}
        />
    )
}
