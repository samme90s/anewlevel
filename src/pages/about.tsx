// src/pages/about.tsx
import { FC } from "react"
import { cn } from "../lib/utils"
import { Textbox } from "../components/textbox"
import { Avatar } from "../components/avatar"
// Import specific type needed by this component
import { AboutContent } from "../types"

interface AboutProps {
    className?: string
    aboutData: AboutContent
}

export const About: FC<AboutProps> = ({ className, aboutData }) => {
    // Optional: Add check if data is missing
    if (!aboutData) {
        return <div className={cn("p-4 text-red-500", className)}>About content data is missing.</div>
    }

    return (
        <div className={cn("p-4", className)}>
            <div className="mx-auto max-w-2xl">
                <h1 className="font-bold text-4xl mb-4">{aboutData.heading}</h1>
                <Textbox>
                    <section>
                        {aboutData.section_1_heading && <h2 className="font-bold text-2xl mb-4">{aboutData.section_1_heading}</h2>}

                        <Avatar
                            src={aboutData.image}
                            alt={aboutData.image_alt}
                            className={cn("mx-auto mb-4", "sm:float-left sm:mr-6 sm:mb-2 sm:[shape-outside:circle(50%)]")}
                        />

                        <p className="mb-4">{aboutData.paragraph_1}</p>
                        <p className="mb-4">{aboutData.paragraph_2}</p>
                        <p>{aboutData.paragraph_3}</p>

                        <div className="mt-6 clear-both">
                            <audio controls src="/audio/about.mp3" className="w-full rounded">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </section>

                    <section className="mt-8">
                        {aboutData.section_2_heading && <h2 className="font-bold text-2xl mb-4">{aboutData.section_2_heading}</h2>}
                        <img src={aboutData.image_2} alt={aboutData.image_2_alt} className="mt-4 mb-4 w-full rounded" />
                        <p className="mb-4">{aboutData.paragraph_4}</p>
                    </section>
                </Textbox>
            </div>
        </div>
    )
}
