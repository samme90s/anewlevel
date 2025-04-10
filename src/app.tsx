// src/App.tsx
import { FC, useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Home } from "./pages/home"
import { Splash } from "./components/splash"
import { Footer } from "./components/footer"
import { getGoogleMapsUri } from "./lib/utils"
import { About } from "./pages/about"
import { AppData } from "./types"

export const App: FC = () => {
    const [splashDone, setSplashDone] = useState(false)
    const [appData, setAppData] = useState<AppData | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const currentDate = new Date()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const response = await fetch("/index.json") // Fetches from /public/index.json
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                const data: AppData = await response.json()
                setAppData(data)
            } catch (err) {
                console.error("Failed to fetch index.json:", err)
                if (err instanceof Error) {
                    setError(`Failed to load configuration: ${err.message}`)
                } else {
                    setError("Failed to load configuration due to an unknown error.")
                }
                setAppData(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, []) // Empty dependency array means run once on mount

    // Handle Loading State
    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">Loading...</div>
    }

    // Handle Error State or Missing Data
    if (error || !appData) {
        const displayError = error || "Application data could not be loaded."
        return <div className="flex justify-center items-center min-h-screen bg-red-900 text-white p-4">Error: {displayError}</div>
    }

    // -- Define Nav Links *after* data is loaded --
    const NAV_LINKS = [
        {
            name: "Home",
            href: "/",
            element: <Home className="flex-grow max-w-4xl mx-auto" homeData={appData.home} />,
        },
        {
            name: "About",
            href: "/about",
            element: <About className="flex-grow max-w-4xl mx-auto" aboutData={appData.about} />,
        },
    ]

    // -- Render application with loaded data --
    return (
        <>
            <Router>
                <div
                    className={`flex flex-col min-h-screen font-inter bg-[url("/images/bg.png")] bg-cover bg-center bg-no-repeat h-full text-gray-100`}
                >
                    <NavBar navLinks={NAV_LINKS} className="backdrop-blur-sm box-border border-b-4 bg-black/80 border-black" />

                    <Routes>
                        {NAV_LINKS.map((link) => (
                            <Route key={link.href} path={link.href} element={link.element} />
                        ))}
                    </Routes>

                    <Footer className="backdrop-blur-sm box-border border-t-6 border-black bg-black/80 py-8 px-4 text-center text-sm">
                        <div className="max-w-5xl mx-auto space-y-4">
                            {/* Contact Links */}
                            <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
                                <a
                                    href={`mailto:${appData.footer.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 hover:underline transition-colors duration-200"
                                >
                                    {appData.footer.email}
                                </a>
                            </div>
                            {/* Address Links */}
                            <div className="space-y-2">
                                <a
                                    href={getGoogleMapsUri(appData.footer.primary_address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    {appData.footer.primary_address}
                                </a>
                                <a
                                    href={getGoogleMapsUri(appData.footer.secondary_address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    {appData.footer.secondary_address}
                                </a>
                            </div>
                            {/* Social Media Links */}
                            <div className="flex justify-center items-center gap-x-2">
                                <a href={appData.footer.linkedin_href} target="_blank" rel="noopener noreferrer">
                                    <img src={appData.footer.linkedin_icon} alt="LinkedIn" className="h-8 w-8 inline-block" />
                                </a>
                                <a href={appData.footer.instagram_href} target="_blank" rel="noopener noreferrer">
                                    <img src={appData.footer.instagram_icon} alt="Instagram" className="h-8 w-8 inline-block" />
                                </a>
                                <a href={appData.footer.facebook_href} target="_blank" rel="noopener noreferrer">
                                    <img src={appData.footer.facebook_icon} alt="Facebook" className="h-8 w-8 inline-block" />
                                </a>
                            </div>
                            {/* Copyright */}
                            <p className="text-neutral-500 text-xs">&#169; {currentDate.getFullYear()} A New Level. All rights reserved.</p>
                        </div>
                    </Footer>
                </div>
            </Router>

            {!splashDone && <Splash splashImage={appData.splash_image} duration={1000} onFinish={() => setSplashDone(true)} />}
        </>
    )
}
