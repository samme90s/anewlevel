import { FC } from "react"
import { cn } from "../lib/utils"

interface TextboxProps {
    children: React.ReactNode
    className?: string
}

export const Textbox: FC<TextboxProps> = ({ children, className }) => {
    return <div className={cn("backdrop-blur-sm rounded-4xl shadow-lg px-6 py-8", className)}>{children}</div>
}
