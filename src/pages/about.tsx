// src/pages/about.tsx

// Defines the About page component.
// Displays content related to the "About" section using data passed via props.

import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"
// Custom components used on this page.
import { Textbox } from "../components/textbox"
import { Avatar } from "../components/avatar"
// Type definition for the expected data structure.
import { AboutContent } from "../types"

// Defines the props accepted by the About component.
interface AboutProps {
    // Object containing all content needed for the About page. Required.
    aboutData: AboutContent
    // Optional CSS class names for custom styling.
    className?: string
}

// The About page component.
// Renders content like headings, text, images, and audio based on aboutData prop.
export const About: FC<AboutProps> = ({ aboutData, className }) => {
    // Handles cases where the necessary page data might be missing.
    if (!aboutData) {
        return <div className={cn("p-4 text-red-500", className)}>About content data is missing.</div>
    }

    // Renders the main structure of the About page.
    return (
        // Main container div, applies padding and optional className. Uses cn utility.
        <div className={cn("relative p-4", className)}>
            {/* Decorative avatar image positioned at the top right. */}
            <img src={aboutData.avatar_image} alt={aboutData.avatar_image_alt} className="absolute top-0 right-14 w-36" />

            {/* Main page heading. */}
            <h1 className="font-bold text-6xl mb-2 w-4/5">{aboutData.heading}</h1>
            {/* Page subheading. */}
            <h2 className="text-4xl mb-4 w-4/5">{aboutData.subheading}</h2>

            {/* Textbox component provides styled background for content sections. */}
            <Textbox>
                {/* First content section. */}
                <section>
                    {/* Optional heading for the first section. */}
                    {aboutData.section_1_heading && <h2 className="font-bold text-2xl mb-4">{aboutData.section_1_heading}</h2>}

                    {/* Avatar component displays the main image, floated left on small screens. */}
                    <Avatar
                        src={aboutData.image}
                        alt={aboutData.image_alt}
                        // Uses cn for dynamic class application, handles floating and text wrapping.
                        className={cn("mx-auto mb-4", "sm:float-left sm:mr-6 sm:mb-2 sm:[shape-outside:circle(50%)]")}
                    />

                    {/* Text paragraphs for the first section. */}
                    <p className="mb-4">{aboutData.paragraph_1}</p>
                    <p className="mb-4">{aboutData.paragraph_2}</p>
                    <p>{aboutData.paragraph_3}</p>

                    {/* Conditionally renders an audio player if audio data exists. */}
                    {aboutData.audio && (
                        <div className="mt-6 clear-both">
                            {" "}
                            {/* clear-both ensures it appears below floated elements */}
                            <audio controls src={aboutData.audio} className="w-full rounded">
                                {/* Fallback text for browsers that don't support the audio tag. */}
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    )}
                </section>

                {/* Second content section. */}
                <section className="mt-12">
                    {/* Optional heading for the second section. */}
                    {aboutData.section_2_heading && <h2 className="font-bold text-2xl mb-4">{aboutData.section_2_heading}</h2>}
                    {/* Displays the first image for section 2. */}
                    <img src={aboutData.image_2} alt={aboutData.image_2_alt} className="mt-4 mb-4 w-full rounded" />
                    {/* Text paragraph for the second section. */}
                    <p className="mb-4">{aboutData.paragraph_4}</p>
                    {/* Displays the second image for section 2. */}
                    <img src={aboutData.image_3} alt={aboutData.image_3_alt} className="mt-4 mb-4 w-full rounded" />
                </section>
            </Textbox>
        </div>
    )
}
