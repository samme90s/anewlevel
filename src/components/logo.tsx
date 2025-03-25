// logo.tsx
import { FC } from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"

interface LogoProps {
    src: string
    className?: string
}

export const Logo: FC<LogoProps> = ({ src, className }) => {
    return (
        <div className="flex-shrink-0 flex items-center">
            <Link to="/">
                <img src={src} alt="Logo" className={cn("h-8 w-auto", className)} />
            </Link>
        </div>
    )
}
