// src/pages/home.tsx

// Defines the Home page component.
// Displays the main landing page content using data passed via props.

import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"
// Custom components used on this page.
import { Textbox } from "../components/textbox"
import { World } from "../components/world"
// Type definition for the expected data structure.
import { HomeContent } from "../types"

// Defines the props accepted by the Home component.
interface HomeProps {
    // Object containing all content needed for the Home page. Required.
    homeData: HomeContent
    // Optional CSS class names for custom styling.
    className?: string
}

// The Home page component.
// Renders content like headings, text, images, and the World component based on homeData prop.
export const Home: FC<HomeProps> = ({ homeData, className }) => {
    // Optional check for missing data; App component should handle this upstream.
    if (!homeData) {
        return <div className={cn("p-4 text-red-500", className)}>Home content data is missing.</div>
    }

    // Renders the main structure of the Home page.
    return (
        // Main container div, applies padding and optional className. Uses cn utility.
        <div className={cn("relative p-4", className)}>
            {/* Decorative avatar image positioned at the top right. */}
            <img src={homeData.avatar_image} alt={homeData.avatar_image_alt} className="absolute top-0 right-14 w-36" />

            {/* Main page heading. */}
            <h1 className="font-bold text-6xl mb-2 w-4/5">{homeData.heading}</h1>
            {/* Page subheading. */}
            <h2 className="text-4xl mb-4 w-4/5">{homeData.subheading}</h2>

            {/* Textbox component provides styled background for content sections. */}
            <Textbox>
                {/* First content section. */}
                <section>
                    {/* Optional heading for the first section. */}
                    {homeData.section_1_heading && <h2 className="font-bold text-2xl mb-4">{homeData.section_1_heading}</h2>}

                    {/* First text paragraph for section 1. */}
                    <p className="mb-8">{homeData.paragraph_1}</p>

                    {/* Container div for layout of the World component. Centers items. */}
                    <div
                        className={cn(
                            "flex flex-col items-center space-y-2", // Default mobile layout
                            "sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-6", // Desktop layout
                        )}
                    >
                        {/* World component displays video/poster, heading, description and link. */}
                        <World
                            src={homeData.world.video}
                            poster={homeData.world.poster}
                            heading={homeData.world.heading}
                            description={homeData.world.description}
                            href={homeData.world.href}
                            className="w-full h-auto" // Basic styling for the component
                        />
                        {/* Add other elements side-by-side with World on larger screens if needed */}
                    </div>

                    {/* Second text paragraph for section 1, appears after the World component. */}
                    <p className="mt-8">{homeData.paragraph_2}</p>
                </section>

                {/* Second content section. */}
                <section className="mt-12">
                    {/* Optional heading for the second section. */}
                    {homeData.section_2_heading && <h2 className="font-bold text-2xl mb-4">{homeData.section_2_heading}</h2>}
                    {/* Displays the main image for section 2. */}
                    <img src={homeData.image} alt={homeData.image_alt} className="my-4 w-full rounded" />
                    {/* Text paragraph for the second section. */}
                    <p>{homeData.paragraph_3}</p>
                </section>
            </Textbox>
        </div>
    )
}
