import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the Textbox component.
interface TextboxProps {
    // Content to be rendered inside the textbox. Required.
    children: React.ReactNode
    // Optional CSS class names for custom styling of the textbox container.
    className?: string
}

// The Textbox component renders a styled container div.
// It provides a background blur, rounded corners, shadow, and padding,
// suitable for displaying blocks of text or other content.
export const Textbox: FC<TextboxProps> = ({ children, className }) => {
    // Renders a div element with specific textbox styling.
    return (
        <div
            className={cn(
                // Default styles: background blur, large rounded corners, shadow, padding.
                "backdrop-blur-sm rounded-4xl shadow-lg px-6 py-8",
                // Merges optional custom classes passed via props.
                className,
            )}
        >
            {/* Renders the content passed as children props inside the styled div. */}
            {children}
        </div>
    )
}
