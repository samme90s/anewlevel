// src/app.tsx
import { FC } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { FullScreenSplash } from "./components/fullscreen_splash"

export const App: FC = () => {
    // Define the nav links you’d like to display in the Navbar
    const navLinks = [
        { name: "Home", href: "/", element: Home },
        { name: "About", href: "/about", element: About },
        { name: "Contact", href: "/contact", element: Contact },
    ]

    return (
        <>
            <FullScreenSplash splashImage="https://picsum.photos/id/1040/1920/1080" duration={3000} />
            <Router>
                <Navbar navLinks={navLinks} />
                <Routes>
                    {navLinks.map((link) => (
                        <Route key={link.href} path={link.href} element={<link.element />} />
                    ))}
                </Routes>
            </Router>
        </>
    )
}
