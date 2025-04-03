import { FC } from "react"
import { cn } from "../lib/utils"

interface PreviewProps {
    src: string
    alt: string
    className?: string
}

export const Preview: FC<PreviewProps> = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={cn(
                "border-6", // Adds a default 1px border
                "border-black", // Sets the border color to black
                "rounded-2xl", // Applies large rounded corners
                "shadow-lg", // Adds a large box shadow
                className, // Merges any additional classes passed via props
            )}
        />
    )
}
