import { FC, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Home } from "./pages/home"
import { Splash } from "./components/splash"
import { Footer } from "./components/footer"
import { getGoogleMapsUri } from "./lib/utils"
import { About } from "./pages/about"

const NAV_LINKS = [
    { name: "Home", href: "/", element: <Home className="flex-grow" /> },
    { name: "About", href: "/about", element: <About className="flex-grow" /> },
]

export const App: FC = () => {
    const [splashDone, setSplashDone] = useState(false)

    const currentDate = new Date()

    return (
        <>
            {/* Main content always renders in the background */}
            <Router>
                <div className="flex flex-col min-h-screen font-inter bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat h-full text-gray-100">
                    <NavBar navLinks={NAV_LINKS} className="bg-black/90" />

                    <Routes>
                        {NAV_LINKS.map((link) => (
                            <Route key={link.href} path={link.href} element={link.element} />
                        ))}
                    </Routes>

                    <Footer className="bg-black/90 py-8 px-4 text-center text-sm">
                        <div className="max-w-5xl mx-auto space-y-4">
                            {/* Contact Links */}
                            <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
                                <a
                                    href="mailto:info@anewlevel.nu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 hover:underline transition-colors duration-200"
                                >
                                    info@anewlevel.nu
                                </a>
                                <span className="text-neutral-400 hidden sm:inline">|</span>
                                <a
                                    href="tel:+467934088"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 hover:underline transition-colors duration-200"
                                >
                                    +46 79 340 88
                                </a>
                            </div>

                            {/* Address Links */}
                            <div className="space-y-2">
                                <a
                                    href={getGoogleMapsUri("Varvsholmen Bredbandet 1 392 51 Kalmar")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    A New Level Sweden &mdash; Varvsholmen Bredbandet 1 &mdash; 392 51 Kalmar
                                </a>
                                <a
                                    href={getGoogleMapsUri("Calle Róbalo 8 29017 Málaga")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    A New Level Spain &mdash; Calle Róbalo 8 &mdash; 29017 Málaga
                                </a>
                            </div>

                            {/* Copyright */}
                            <p className="text-neutral-500 text-xs">&#169; {currentDate.getFullYear()} A New Level. All rights reserved.</p>
                        </div>
                    </Footer>
                </div>
            </Router>

            {/* The splash overlay is on top until it fades out */}
            {!splashDone && <Splash splashImage="splash.png" duration={1000} onFinish={() => setSplashDone(true)} />}
        </>
    )
}
