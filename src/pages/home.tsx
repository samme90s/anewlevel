import { FC } from "react"
import { cn } from "../lib/utils"

interface HomeProps {
    className?: string
}

export const Home: FC<HomeProps> = ({ className }) => {
    return (
        <div className={cn("p-4", className)}>
            <div className="mx-auto max-w-2xl">
                {/* Changed from bg-black bg-opacity-50 */}
                <h1 className="text-2xl text-white">Home Page</h1>
                <p className="text-white">Welcome to the Home page.</p>
            </div>
        </div>
    )
}
