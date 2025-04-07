import { FC } from "react"
import { cn } from "../lib/utils"
import { Textbox } from "../components/textbox"
import { World } from "../components/world"
import d from "../index.json"

interface HomeProps {
    className?: string
}

export const Home: FC<HomeProps> = ({ className }) => {
    return (
        <div className={cn("relative p-4", className)}>
            <img src={d.home.avatar_image} alt={d.home.avatar_image_alt} className="absolute top-0 right-14 w-36" />

            <h1 className="font-bold text-6xl mb-2">{d.home.heading}</h1>
            <h2 className="text-4xl mb-4">{d.home.subheading}</h2>

            <Textbox>
                <p className="mb-8">{d.home.paragraph_1}</p>

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
                    <World
                        src={d.scenes.world.video}
                        poster={d.scenes.world.poster}
                        heading={d.scenes.world.heading}
                        description={d.scenes.world.description}
                        href={d.scenes.world.href}
                        className="w-full h-auto"
                    />
                </div>

                <p className="mt-8">{d.home.paragraph_2}</p>
            </Textbox>
        </div>
    )
}
