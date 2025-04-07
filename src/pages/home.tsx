// src/pages/home.tsx
import { FC } from "react"
import { cn } from "../lib/utils"
import { Textbox } from "../components/textbox"
import { World } from "../components/world"
// Import specific types needed by this component
import { HomeContent, ScenesContent } from "../types"

interface HomeProps {
    className?: string
    homeData: HomeContent
    scenesData: ScenesContent
}

export const Home: FC<HomeProps> = ({ className, homeData, scenesData }) => {
    // Optional: Add check if data is missing, although App.tsx should prevent this
    if (!homeData || !scenesData) {
        return <div className={cn("p-4 text-red-500", className)}>Home content data is missing.</div>
    }

    return (
        <div className={cn("relative p-4", className)}>
            <img src={homeData.avatar_image} alt={homeData.avatar_image_alt} className="absolute top-0 right-14 w-36" />

            <h1 className="font-bold text-6xl mb-2">{homeData.heading}</h1>
            <h2 className="text-4xl mb-4">{homeData.subheading}</h2>

            <Textbox>
                <p className="mb-8">{homeData.paragraph_1}</p>

                <div
                    className={cn(
                        "flex flex-col items-center space-y-2",
                        "sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-6",
                    )}
                >
                    <World
                        src={scenesData.world.video}
                        poster={scenesData.world.poster}
                        heading={scenesData.world.heading}
                        description={scenesData.world.description}
                        href={scenesData.world.href}
                        className="w-full h-auto"
                    />
                </div>

                <p className="mt-8">{homeData.paragraph_2}</p>
            </Textbox>
        </div>
    )
}
