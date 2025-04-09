import { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"

interface LinkData {
    name: string
    href: string
}

interface NavLinksProps {
    links: LinkData[]
    className?: string // Base classes applied to ALL links
    activeClassName?: string // Classes applied ONLY to the active link
}

export const NavLinks: FC<NavLinksProps> = ({
    links,
    className, // Base styles for layout/typography
    activeClassName = "text-blue-500 hover:text-blue-500", // Default active link styles
}) => {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <>
            {links.map((link) => {
                const isActive = pathname === link.href

                return (
                    <Link
                        key={link.name}
                        to={link.href}
                        // Apply classes conditionally
                        className={cn("p-2 transition-colors duration-200", className, isActive && activeClassName)}
                        // Accessibility: Indicate the current page
                        aria-current={isActive ? "page" : undefined}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}
