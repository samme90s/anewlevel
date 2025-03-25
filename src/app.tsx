// app.tsx
import { FC, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/navbar"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { FullScreenSplash } from "./components/fullscreen_splash"

const NAV_LINKS = [
    { name: "Home", href: "/", element: Home },
    { name: "About", href: "/about", element: About },
    { name: "Contact", href: "/contact", element: Contact },
]

export const App: FC = () => {
    const [splashDone, setSplashDone] = useState(false)

    // Render the splash while it's visible,
    // then render your main app once splash is "done."
    return (
        <>
            <FullScreenSplash splashImage="https://picsum.photos/id/1040/1920/1080" duration={6000} onFinish={() => setSplashDone(true)} />
            {splashDone && (
                <Router>
                    <NavBar navLinks={NAV_LINKS} />
                    <Routes>
                        {NAV_LINKS.map((link) => (
                            <Route key={link.href} path={link.href} element={<link.element />} />
                        ))}
                    </Routes>
                </Router>
            )}
        </>
    )
}
