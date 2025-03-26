// fullscreen_splash.tsx
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

interface FullScreenSplashProps {
    splashImage: string
    duration?: number
    onFinish?: () => void
}

export const FullScreenSplash: React.FC<FullScreenSplashProps> = ({ splashImage, duration = 1000, onFinish }) => {
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
        // Make sure it's the opacity transition.
        // Move the onFinish inside the if statement to wait until the fade is complete.
        onFinish?.()
        // If the opacity transition is complete, set visible to false.
        if (event.propertyName === "opacity" && fading) {
            setVisible(false)
        }
    }

    // Immediately trigger the fade-out.
    const handleSkip = () => setFading(true)

    if (!visible) return null

    return (
        <div
            onTransitionEnd={handleTransitionEnd}
            className={cn("fixed inset-0 z-50 bg-cover bg-center transition-opacity duration-1000 p-4", {
                // When fading is true, the opacity goes to 0, otherwise it remains at 100.
                "opacity-0": fading,
                "opacity-100": !fading,
            })}
            style={{ backgroundImage: `url(${splashImage})` }}
        >
            {visible && !fading && (
                <button
                    onClick={handleSkip}
                    className={cn(
                        "font-mono bg-gray-800 text-white px-3 py-2 rounded shadow transition-colors duration-200 hover:bg-gray-700 focus:outline-red-700",
                    )}
                >
                    SKIP &gt;
                </button>
            )}
        </div>
    )
}
