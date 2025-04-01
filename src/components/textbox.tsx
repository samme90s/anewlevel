import { FC } from "react"
import { cn } from "../lib/utils"

interface TextboxProps {
    children: React.ReactNode
    className?: string
}

export const Textbox: FC<TextboxProps> = ({ children, className }) => {
    return <div className={cn("bg-black/40 rounded-4xl shadow-lg p-4", className)}>{children}</div>
}
