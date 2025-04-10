// src/pages/about.tsx
import { FC } from "react"
import { cn } from "../lib/utils"
import { Textbox } from "../components/textbox"
import { Avatar } from "../components/avatar"
// Import specific type needed by this component
import { AboutContent } from "../types"

interface AboutProps {
    aboutData: AboutContent
    className?: string
}

export const About: FC<AboutProps> = ({ aboutData, className }) => {
    // Optional: Add check if data is missing
    if (!aboutData) {
        return <div className={cn("p-4 text-red-500", className)}>About content data is missing.</div>
    }

    return (
        <div className={cn("relative p-4", className)}>
            <img src={aboutData.avatar_image} alt={aboutData.avatar_image_alt} className="absolute top-0 right-14 w-36" />

            <h1 className="font-bold text-6xl mb-2 w-4/5">{aboutData.heading}</h1>
            <h2 className="text-4xl mb-4 w-4/5">{aboutData.subheading}</h2>

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

                    {aboutData.audio && (
                        <div className="mt-6 clear-both">
                            <audio controls src={aboutData.audio} className="w-full rounded">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    )}
                </section>

                <section className="mt-12">
                    {aboutData.section_2_heading && <h2 className="font-bold text-2xl mb-4">{aboutData.section_2_heading}</h2>}
                    <img src={aboutData.image_2} alt={aboutData.image_2_alt} className="mt-4 mb-4 w-full rounded" />
                    <p className="mb-4">{aboutData.paragraph_4}</p>
                    <img src={aboutData.image_3} alt={aboutData.image_3_alt} className="mt-4 mb-4 w-full rounded" />
                </section>
            </Textbox>
        </div>
    )
}
