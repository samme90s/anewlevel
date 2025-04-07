import { FC, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Home } from "./pages/home"
import { Splash } from "./components/splash"
import { Footer } from "./components/footer"
import { getGoogleMapsUri } from "./lib/utils"
import { About } from "./pages/about"
import d from "./index.json"

const NAV_LINKS = [
    { name: "Home", href: "/", element: <Home className="flex-grow max-w-2xl mx-auto" /> },
    { name: "About", href: "/about", element: <About className="flex-grow max-w-2xl mx-auto" /> },
]

export const App: FC = () => {
    const [splashDone, setSplashDone] = useState(false)

    const currentDate = new Date()

    return (
        <>
            {/* Main content always renders in the background */}
            <Router>
                <div
                    className={`flex flex-col min-h-screen font-inter bg-[url('${d.bg_image}')] bg-cover bg-center bg-no-repeat h-full text-gray-100`}
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
                                    href={`mailto:${d.footer.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 hover:underline transition-colors duration-200"
                                >
                                    {d.footer.email}
                                </a>
                            </div>

                            {/* Address Links */}
                            <div className="space-y-2">
                                <a
                                    href={getGoogleMapsUri(d.footer.primary_address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    {d.footer.primary_address}
                                </a>
                                <a
                                    href={getGoogleMapsUri(d.footer.secondary_address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-blue-600 transition-colors duration-200"
                                >
                                    {d.footer.secondary_address}
                                </a>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex justify-center items-center gap-x-2">
                                <a href={d.footer.linkedin_href} target="_blank" rel="noopener noreferrer">
                                    <img src={d.footer.linkedin_icon} alt="LinkedIn" className="h-8 w-8 inline-block" />
                                </a>
                                <a href={d.footer.instagram_href} target="_blank" rel="noopener noreferrer">
                                    <img src={d.footer.instagram_icon} alt="Instagram" className="h-8 w-8 inline-block" />
                                </a>
                                <a href={d.footer.facebook_href} target="_blank" rel="noopener noreferrer">
                                    <img src={d.footer.facebook_icon} alt="Facebook" className="h-8 w-8 inline-block" />
                                </a>
                            </div>

                            {/* Copyright */}
                            <p className="text-neutral-500 text-xs">&#169; {currentDate.getFullYear()} A New Level. All rights reserved.</p>
                        </div>
                    </Footer>
                </div>
            </Router>

            {/* The splash overlay is on top until it fades out */}
            {!splashDone && <Splash splashImage={d.splash_image} duration={1000} onFinish={() => setSplashDone(true)} />}
        </>
    )
}
