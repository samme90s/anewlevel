import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

interface FullScreenSplashProps {
    splashImage: string
    duration?: number
    onFinish?: () => void
    className?: string
}

export const FullScreenSplash: React.FC<FullScreenSplashProps> = ({ splashImage, duration = 1000, onFinish, className }) => {
    const [fading, setFading] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        // Set a timeout that triggers fading after duration
        const timeout = setTimeout(() => setFading(true), duration)
        return () => clearTimeout(timeout)
    }, [duration])

    // This event fires when the CSS transition ends.
    // We wait for the opacity transition to complete before removing the element.
    const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
        // If the opacity transition is complete, set visible to false.
        if (event.propertyName === "opacity" && fading) {
            // Use callback here if provided.
            onFinish?.()
            setVisible(false)
        }
    }

    // Immediately trigger the fade-out.
    const handleSkip = () => setFading(true)

    if (!visible) return null

    return (
        <div
            onTransitionEnd={handleTransitionEnd}
            className={cn(
                "fixed inset-0 z-50 bg-cover bg-center transition-opacity duration-1000 p-4",
                {
                    // When fading is true, the opacity goes to 0, otherwise it remains at 100.
                    "opacity-0": fading,
                    "opacity-100": !fading,
                },
                className,
            )}
            style={{ backgroundImage: `url(${splashImage})` }}
        >
            {visible && !fading && (
                <button
                    onClick={handleSkip}
                    className={cn(
                        "bg-gray-800 text-white px-3 py-2 rounded shadow transition-colors duration-200 hover:bg-gray-700 focus:outline-red-700",
                    )}
                >
                    Skip
                </button>
            )}
        </div>
    )
}
