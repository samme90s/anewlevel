import { useEffect, useState, FC } from "react"
// Utility for merging CSS classes.
import { cn } from "../lib/utils"

// Defines the props accepted by the Splash component.
interface SplashProps {
    // Background image URL for the splash screen. Required.
    splashImage: string
    // Duration in milliseconds before auto-fading starts. Optional, default 1000ms.
    duration?: number
    // Callback function executed when the fade-out animation finishes. Optional.
    onFinish?: () => void
    // Optional CSS class names for custom styling of the splash container.
    className?: string
}

// The Splash component displays a full-screen image that fades out
// after a set duration or when clicked. It calls an optional callback on completion.
export const Splash: FC<SplashProps> = ({
    splashImage,
    duration = 1000, // Default duration set to 1 second.
    onFinish,
    className,
}) => {
    // State to control the start of the fade-out transition.
    const [fading, setFading] = useState(false)
    // State to control whether the component is rendered in the DOM.
    const [visible, setVisible] = useState(true)

    // Effect hook to automatically trigger the fade-out after the specified duration.
    useEffect(() => {
        // Sets a timer to start fading.
        const timeout = setTimeout(() => {
            // Start fading only if not already initiated (e.g., by clicking).
            if (!fading) {
                setFading(true)
            }
        }, duration)
        // Cleanup function to clear the timer if component unmounts or dependencies change.
        return () => clearTimeout(timeout)
        // Depends on duration and fading state.
    }, [duration, fading])

    // Handles the end of the CSS opacity transition.
    const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
        // Check if the opacity transition finished and the component is set to be fading.
        if (event.propertyName === "opacity" && fading) {
            // Call the optional onFinish callback provided by the parent.
            onFinish?.()
            // Set the component to not be visible, removing it from the DOM.
            setVisible(false)
        }
    }

    // Function to immediately start the fade-out when the splash screen is clicked.
    const handleSkip = () => {
        // Trigger fading only if not already fading.
        if (!fading) {
            setFading(true)
        }
    }

    // If the component is no longer visible, render nothing.
    if (!visible) return null

    // Renders the main splash screen div.
    return (
        <div
            // Allows clicking anywhere on the splash to skip.
            onClick={handleSkip}
            // Listens for the end of CSS transitions (specifically opacity).
            onTransitionEnd={handleTransitionEnd}
            className={cn(
                // Core styles: fixed position covering screen, high z-index, background handling, opacity transition.
                "fixed inset-0 z-50 bg-cover bg-center transition-opacity duration-1000 p-4",
                // Makes it obvious it's clickable.
                "cursor-pointer",
                {
                    // Apply 'opacity-0' class when fading is true.
                    "opacity-0": fading,
                    // Apply 'opacity-100' class when fading is false (initial state).
                    "opacity-100": !fading,
                },
                // Merges optional custom classes passed via props.
                className,
            )}
            // Sets the background image dynamically from props.
            style={{ backgroundImage: `url(${splashImage})` }}
        >
            {/* Content inside the splash could be added here if needed */}
        </div>
    )
}
