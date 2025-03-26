// app.tsx
import { FC, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { FullScreenSplash } from "./components/fullscreen_splash"

const NAV_LINKS = [
    { name: "Home", href: "/", element: Home },
    { name: "About", href: "/about", element: About },
]

export const App: FC = () => {
    const [splashDone, setSplashDone] = useState(false)

    return (
        <>
            {/* Main content always renders in the background */}
            <Router>
                <NavBar navLinks={NAV_LINKS} />
                <Routes>
                    {NAV_LINKS.map((link) => (
                        <Route key={link.href} path={link.href} element={<link.element />} />
                    ))}
                </Routes>
            </Router>

            {/* The splash overlay is on top until it fades out */}
            {!splashDone && <FullScreenSplash splashImage="splash_x2.png" duration={6000} onFinish={() => setSplashDone(true)} />}
        </>
    )
}
