// src/components/fullscreen_splash.tsx
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

interface FullScreenSplashProps {
    /** URL of the splash image */
    splashImage: string
    /** Time (ms) to wait before starting fade-out (default: 2000) */
    duration?: number
}

/**
 * Displays a full-screen background image, then fades out and unmounts.
 */
export const FullScreenSplash: React.FC<FullScreenSplashProps> = ({ splashImage, duration = 2000 }) => {
    const [fading, setFading] = useState(false) // triggers fade
    const [visible, setVisible] = useState(true) // controls DOM presence

    useEffect(() => {
        // Start fade-out after `duration`
        const fadeTimer = setTimeout(() => {
            setFading(true)
        }, duration)

        // Remove from DOM after the fade transition ends (1s here)
        const removalTimer = setTimeout(() => {
            setVisible(false)
        }, duration + 1000)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(removalTimer)
        }
    }, [duration])

    // If not visible anymore, render nothing
    if (!visible) {
        return null
    }

    return (
        <div
            className={cn("fixed inset-0 z-50 bg-cover bg-center transition-opacity duration-1000", {
                "opacity-0": fading,
                "opacity-100": !fading,
            })}
            style={{ backgroundImage: `url(${splashImage})` }}
        />
    )
}
