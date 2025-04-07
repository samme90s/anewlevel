import { FC } from "react"
import { cn } from "../lib/utils"

interface FooterProps {
    children: React.ReactNode
    className?: string
}

export const Footer: FC<FooterProps> = ({ children, className }) => {
    return (
        <footer className={cn("text-white py-4", className)}>
            <div className="container mx-auto text-center">{children}</div>
        </footer>
    )
}
