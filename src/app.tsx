// src/App.tsx

// Main application file defining the root component.
// Handles routing, data fetching, layout, and initial splash screen.

import { FC, useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Home } from "./pages/home"
import { Splash } from "./components/splash"
import { Footer } from "./components/footer"
import { getGoogleMapsUri } from "./lib/utils"
import { About } from "./pages/about"
import { AppData } from "./types"

// The main application component.
// Manages configuration data, loading/error states, routing, and renders the UI shell.
export const App: FC = () => {
    // Tracks splash screen completion.
    const [splashDone, setSplashDone] = useState(false)
    // Stores fetched application data (from index.json).
    const [appData, setAppData] = useState<AppData | null>(null)
    // Tracks if initial data is loading.
    const [isLoading, setIsLoading] = useState<boolean>(true)
    // Stores error message if data fetch fails.
    const [error, setError] = useState<string | null>(null)

    // Gets current date for the footer copyright year.
    const currentDate = new Date()

    // Effect hook to fetch initial application data (index.json) on component mount.
    // Manages loading and error states during fetch. Runs once.
    useEffect(() => {
        // Fetches data from the public/index.json file.
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)
            try {
                // Fetch configuration file from the root path.
                const response = await fetch("/index.json")
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                // Parse JSON response.
                const data: AppData = await response.json()
                // Update state with fetched data.
                setAppData(data)
            } catch (err) {
                console.error("Failed to fetch index.json:", err)
                // Set error message in state.
                if (err instanceof Error) {
                    setError(`Failed to load configuration: ${err.message}`)
                } else {
                    setError("Failed to load configuration due to an unknown error.")
                }
                setAppData(null) // Ensure data is null on error.
            } finally {
                // Ensure loading is set to false after fetch completes.
                setIsLoading(false)
            }
        }

        fetchData()
    }, []) // Empty dependency array: run only on mount.

    // Show loading indicator while fetching data.
    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">Loading...</div>
    }

    // Show error message if fetching failed or data is missing.
    if (error || !appData) {
        const displayError = error || "Application data could not be loaded."
        return <div className="flex justify-center items-center min-h-screen bg-red-900 text-white p-4">Error: {displayError}</div>
    }

    // Define navigation links and associated page components.
    // IMPORTANT: Defined *after* appData is loaded, as pages use this data.
    // Used for NavBar links and React Router route definitions.
    const NAV_LINKS = [
        {
            name: "Home",
            href: "/",
            element: <Home className="flex-grow max-w-4xl mx-auto" homeData={appData.home} />, // Pass home data
        },
        {
            name: "About",
            href: "/about",
            element: <About className="flex-grow max-w-4xl mx-auto" aboutData={appData.about} />, // Pass about data
        },
    ]

    // Render the main application UI.
    return (
        <>
            {/* Router component enables client-side navigation. */}
            <Router>
                {/* Main layout container with flex column, background, etc. */}
                <div
                    className={`flex flex-col min-h-screen font-inter bg-[url("/images/bg.png")] bg-cover bg-center bg-no-repeat h-full text-gray-100`}
                >
                    {/* Renders the navigation bar using NAV_LINKS. */}
                    <NavBar navLinks={NAV_LINKS} className="backdrop-blur-sm box-border border-b-4 bg-black/80 border-black" />

                    {/* Defines where routed page components will render. */}
                    <Routes>
                        {/* Create routes dynamically from NAV_LINKS. */}
                        {NAV_LINKS.map((link) => (
                            <Route key={link.href} path={link.href} element={link.element} />
                        ))}
                    </Routes>

                    {/* Renders the application footer. */}
                    <Footer className="backdrop-blur-sm box-border border-t-6 border-black bg-black/80 py-8 px-4 text-center text-sm">
                        {/* Footer content container. */}
                        <div className="max-w-5xl mx-auto space-y-4">
                            {/* Contact Links (Email). */}
                            <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
                                {/* Email link using data from appData. */}
                                <a
                                    href={`mailto:${appData.footer.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 hover:underline transition-colors duration-200"
                                >
                                    {appData.footer.email}
                                </a>
                            </div>

                            {/* Address Links (linked to Google Maps). */}
                            <div className="space-y-2">
                                {/* Primary address link using getGoogleMapsUri utility. */}
                                <a
                                    href={getGoogleMapsUri(appData.footer.primary_address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    {appData.footer.primary_address}
                                </a>
                                {/* Secondary address link using getGoogleMapsUri utility. */}
                                <a
                                    href={getGoogleMapsUri(appData.footer.secondary_address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    {appData.footer.secondary_address}
                                </a>
                            </div>

                            {/* Social Media Icon Links. */}
                            <div className="flex justify-center items-center gap-x-2">
                                {/* LinkedIn link. */}
                                <a href={appData.footer.linkedin_href} target="_blank" rel="noopener noreferrer">
                                    <img src={appData.footer.linkedin_icon} alt="LinkedIn" className="h-8 w-8 inline-block" />
                                </a>
                                {/* Instagram link. */}
                                <a href={appData.footer.instagram_href} target="_blank" rel="noopener noreferrer">
                                    <img src={appData.footer.instagram_icon} alt="Instagram" className="h-8 w-8 inline-block" />
                                </a>
                                {/* Facebook link. */}
                                <a href={appData.footer.facebook_href} target="_blank" rel="noopener noreferrer">
                                    <img src={appData.footer.facebook_icon} alt="Facebook" className="h-8 w-8 inline-block" />
                                </a>
                            </div>

                            {/* Copyright notice with dynamic year. */}
                            <p className="text-neutral-500 text-xs">&#169; {currentDate.getFullYear()} A New Level. All rights reserved.</p>
                        </div>
                    </Footer>
                </div>
            </Router>

            {/* Conditionally renders the Splash screen until splashDone is true. */}
            {/* Passes image, duration, and finish callback. */}
            {!splashDone && <Splash splashImage={appData.splash_image} duration={1000} onFinish={() => setSplashDone(true)} />}
        </>
    )
}
