import { FC } from "react"
import { cn } from "../lib/utils"
import { Textbox } from "../components/textbox"
import { Avatar } from "../components/avatar"
import d from "../index.json"

interface AboutProps {
    className?: string
}

export const About: FC<AboutProps> = ({ className }) => {
    return (
        <div className={cn("p-4", className)}>
            <div className="mx-auto max-w-2xl">
                <h1 className="font-bold text-4xl mb-4">{d.about.heading}</h1>
                <Textbox>
                    <Avatar
                        src="/images/hakan.jpg"
                        alt="Håkan Rosenstam"
                        className={cn(
                            // Default (stacked) layout styles (< sm)
                            "mx-auto",
                            "mb-4",

                            // Floated layout styles (>= sm)
                            "sm:float-left",
                            "sm:mr-6",
                            "sm:mb-2",
                            "sm:[shape-outside:circle(50%)]",
                        )}
                    />
                    <p>{d.about.paragraph_1}</p>

                    <div className="mt-6 clear-both">
                        {/* Added margin-top and clear-both to handle potential float issues */}
                        <audio controls src="/audio/about.mp3" className="w-full rounded">
                            {/* Fallback content for browsers that don't support the audio element */}
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </Textbox>
            </div>
        </div>
    )
}
