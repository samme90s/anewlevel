import { FC } from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"

interface NavLink {
    name: string
    href: string
}

interface NavLinksProps {
    links: NavLink[]
    className?: string
}

export const NavLinks: FC<NavLinksProps> = ({ links, className }) => {
    return (
        <>
            {links.map((link) => (
                <Link key={link.name} to={link.href} className={cn("p-2 rounded-md font-medium", className)}>
                    {link.name}
                </Link>
            ))}
        </>
    )
}
