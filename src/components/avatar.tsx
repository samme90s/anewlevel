import { FC } from "react"
import { cn } from "../lib/utils"

interface AvatarProps {
    src: string
    alt: string
    className?: string
}

export const Avatar: FC<AvatarProps> = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={cn(
                // Core Avatar Styles
                "w-32", // Default width (can be overridden by className)
                "h-32", // Default height (can be overridden by className)
                "rounded-full", // Make it circular
                "object-cover", // Scale image correctly without distortion
                "object-top", // Crop focusing on the top
                "shadow-lg", // Add shadow
                "border-2", // Add border
                "border-black", // Black border

                // Pass through any additional classes for layout adjustments
                className,
            )}
        />
    )
}
