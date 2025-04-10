import { FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the World component.
interface WorldProps {
    // Video source URL.
    src: string
    // Poster image URL (placeholder for video).
    poster: string
    // Main text heading displayed over the video.
    heading: string
    // Description text displayed below the heading.
    description: string
    // Target URL for the link.
    href: string
    // Optional CSS class names for custom styling.
    className?: string
}

// The World component renders a clickable card with a video background.
// It displays a heading, description, and links to a specified URL.
export const World: FC<WorldProps> = ({ src, poster, heading, description, href, className }) => {
    return (
        // Main container is an anchor tag making the whole component clickable.
        <a
            href={href} // Link destination.
            target="_blank" // Open link in new tab.
            rel="noopener noreferrer" // Security measure for target blank.
            className={cn(
                // Base styling for card appearance: rounded, shadow, hover effect.
                "block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300",
                // Establishes positioning context for absolute children.
                "relative",
                // Fixed height for the card.
                "h-64",
                // Merges optional custom classes.
                className,
            )}
        >
            {/* Video element for the background. */}
            <video
                // Using src as key forces re-render if video source changes.
                key={src}
                src={src}
                autoPlay // Plays automatically on load.
                muted // Required by browsers for autoplay.
                loop // Repeats the video.
                playsInline // Needed for inline playback on mobile devices.
                poster={poster} // Displays image while video loads.
                className={cn(
                    // Positions video to fill the container.
                    "absolute inset-0 w-full h-full",
                    // Scales video to cover area, may crop.
                    "object-cover",
                    // Places video at the bottom layer (behind overlay and text).
                    "z-0",
                )}
            >
                {/* Fallback text for browsers not supporting video. */}
                Your browser does not support the video tag.
            </video>

            {/* Semi-transparent overlay to improve text readability over the video. */}
            <div
                className={cn(
                    // Covers the entire container.
                    "absolute inset-0",
                    // Creates a vertical gradient from black to transparent.
                    "bg-gradient-to-t from-black via-black/70 to-transparent",
                    // Places overlay above video, below text.
                    "z-10",
                )}
                // Hides this decorative element from screen readers.
                aria-hidden="true"
            />

            {/* Container for the text content, centered over the video/overlay. */}
            <div className="relative w-full h-full flex flex-col justify-center items-center p-6 text-center z-20">
                {/* Main heading text. */}
                <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow-md">{heading}</h3>
                {/* Description text. */}
                <p className="text-gray-200 drop-shadow-md">{description}</p>
                {/* Visual cue indicating this is a link. */}
                <span className="mt-4 text-sm text-blue-500 font-bold transition-colors">Visit &rarr;</span>
            </div>
        </a>
    )
}
