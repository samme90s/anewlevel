// src/pages/home.tsx
import { FC } from "react"
import { cn } from "../lib/utils"
import { Textbox } from "../components/textbox"
import { World } from "../components/world"
// Import specific types needed by this component
import { HomeContent } from "../types"

interface HomeProps {
    className?: string
    homeData: HomeContent
}

export const Home: FC<HomeProps> = ({ className, homeData }) => {
    // Optional: Add check if data is missing, although App.tsx should prevent this
    if (!homeData) {
        return <div className={cn("p-4 text-red-500", className)}>Home content data is missing.</div>
    }

    return (
        <div className={cn("relative p-4", className)}>
            <img src={homeData.avatar_image} alt={homeData.avatar_image_alt} className="absolute top-0 right-14 w-36" />

            <h1 className="font-bold text-6xl mb-2">{homeData.heading}</h1>
            <h2 className="text-4xl mb-4">{homeData.subheading}</h2>

            <Textbox>
                <section>
                    {homeData.section_1_heading && <h2 className="font-bold text-2xl mb-4">{homeData.section_1_heading}</h2>}

                    <p className="mb-8">{homeData.paragraph_1}</p>

                    <div
                        className={cn(
                            "flex flex-col items-center space-y-2",
                            "sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-6",
                        )}
                    >
                        <World
                            src={homeData.world.video}
                            poster={homeData.world.poster}
                            heading={homeData.world.heading}
                            description={homeData.world.description}
                            href={homeData.world.href}
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="mt-8">{homeData.paragraph_2}</p>
                </section>

                <section className="mt-8">
                    {homeData.section_2_heading && <h2 className="font-bold text-2xl mb-4">{homeData.section_2_heading}</h2>}
                    <img src={homeData.image} alt={homeData.image_alt} className="my-4 w-full rounded" />
                    <p>{homeData.paragraph_3}</p>
                </section>
            </Textbox>
        </div>
    )
}
