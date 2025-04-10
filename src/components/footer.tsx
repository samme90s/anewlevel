import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the Footer component.
interface FooterProps {
    // Content to be rendered inside the footer. Required.
    children: React.ReactNode
    // Optional CSS class names for custom styling of the footer element.
    className?: string
}

// The Footer component renders a standard HTML footer element.
// It provides basic styling and a centered container for its content.
export const Footer: FC<FooterProps> = ({ children, className }) => {
    return (
        // Renders the HTML footer tag.
        <footer
            className={cn(
                // Default styles: white text, vertical padding.
                "text-white py-4",
                // Merges optional custom classes passed via props.
                className,
            )}
        >
            {/* Inner div centers the content horizontally within the footer. */}
            <div className="container mx-auto text-center">
                {/* Renders the content passed as children props. */}
                {children}
            </div>
        </footer>
    )
}
