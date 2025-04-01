import { FC } from "react"
import { cn } from "../lib/utils"

interface HomeProps {
    className?: string
}

export const Home: FC<HomeProps> = ({ className }) => {
    return (
        <div className={cn("p-4", className)}>
            <div className="mx-auto max-w-2xl">Welcome to A New Level...</div>
        </div>
    )
}
