import { FC } from "react"
import { cn } from "../lib/utils"

interface HomeProps {
    className?: string
}

export const Home: FC<HomeProps> = ({ className }) => {
    return (
        <div className={cn("max-w-xl mx-auto p-4", className)}>
            <h1 className="text-2xl">Home Page</h1>
            <p>Welcome to the Home page.</p>
        </div>
    )
}
