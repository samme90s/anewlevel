import { FC } from "react"
import { cn } from "../lib/utils"
import { Preview } from "../components/preview"

interface HomeProps {
    className?: string
}

export const Home: FC<HomeProps> = ({ className }) => {
    return (
        <div className={cn("p-4", className)}>
            <h1 className="text-center text-3xl mb-8">Metaverse</h1>

            <div
                className={cn(
                    // Default (stacked) layout styles (< sm)
                    "flex",
                    "flex-col",
                    "items-center",
                    "space-y-2",

                    // Floated layout styles (>= sm)
                    "sm:flex-row",
                    "sm:justify-center",
                    "sm:items-center",
                    "sm:space-y-0",
                    "sm:space-x-6",
                )}
            >
                <Preview src="/1.png" alt="Metaverse demo 1" className="w-64 h-auto sm:w-40" />
                <Preview src="/2.png" alt="Metaverse demo 2" className="w-64 h-auto sm:w-40" />
                <Preview src="/3.png" alt="Metaverse demo 3" className="w-64 h-auto sm:w-40" />
            </div>
        </div>
    )
}
