import { FC } from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"

export enum NavLinksVariant {
    DESKTOP = "desktop",
    MOBILE = "mobile",
}

interface NavLink {
    name: string
    href: string
}

interface NavLinksProps {
    links: NavLink[]
    variant: NavLinksVariant
}

export const NavLinks: FC<NavLinksProps> = ({ links, variant }) => {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium",
                        variant === NavLinksVariant.DESKTOP && "block text-base",
                    )}
                >
                    {link.name}
                </Link>
            ))}
        </>
    )
}
