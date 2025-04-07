import { FC } from "react"
import { cn } from "../lib/utils"

interface WorldProps {
    src: string
    poster: string
    heading: string
    description: string
    href: string
    className?: string
}

export const World: FC<WorldProps> = ({ src, poster, heading, description, href, className }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                // Base styles for the card/link
                "block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300",
                // --- Positioning Context ---
                "relative", // Makes this the container for absolutely positioned children
                "h-64",
                className,
            )}
        >
            {/* --- Video Background --- */}
            <video
                // Add key={src} if the video source might change dynamically for the same component instance
                // This forces React to treat it as a new element, ensuring the correct video loads.
                key={src}
                src={src}
                autoPlay // Start playing automatically
                muted // **Required** for autoplay in most modern browsers
                loop // Loop the video
                playsInline // Important for inline playback on mobile (especially iOS)
                poster={poster} // Optional: but ensures a placeholder image is shown before the video loads
                className={cn(
                    "absolute inset-0 w-full h-full", // Position absolutely to fill the container
                    "object-cover", // Cover the area, cropping if necessary, like background-size: cover
                    "z-0", // Ensure video is at the bottom stack layer
                )}
            >
                {/* Fallback text if browser doesn't support video tag */}
                Your browser does not support the video tag.
            </video>

            {/* --- Overlay for Text Readability --- */}
            <div
                className={cn(
                    // Cover the entire container
                    "absolute inset-0",
                    "bg-gradient-to-t from-black via-black/70 to-transparent",
                    "z-10",
                )}
                aria-hidden="true" // Hide decorative overlay from screen readers
            />

            {/* --- Text Content --- */}
            <div className="relative w-full h-full flex flex-col justify-center items-center p-6 text-center z-20">
                <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow-md">{heading}</h3>
                <p className="text-gray-200 drop-shadow-md">{description}</p>
                <span className="mt-4 text-sm text-blue-500 font-bold transition-colors">Visit &rarr;</span>
            </div>
        </a>
    )
}
