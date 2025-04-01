import { FC } from "react"
import { cn } from "../lib/utils"
import { Textbox } from "../components/textbox"
import { Avatar } from "../components/avatar"

interface AboutProps {
    className?: string
}

export const About: FC<AboutProps> = ({ className }) => {
    return (
        <div className={cn("p-4", className)}>
            <div className="mx-auto max-w-2xl">
                <Textbox>
                    <Avatar
                        src="/hakan.jpg"
                        alt="Håkan Rosenstam"
                        className={cn(
                            "float-left", // Keep float for wrapping context
                            "mr-6", // Right margin for spacing
                            "mb-2", // Bottom margin for spacing
                            "[shape-outside:circle(50%)]", // Apply circular shape for text wrapping
                        )}
                    />
                    <h1 className="text-2xl mb-4">Håkan Rosenstam &mdash; Founder</h1>
                    <p>
                        Hey, I'm Håkan Rosenstam and here is my life story... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Add more text here if needed to clearly see the circular wrapping
                        effect, especially below the image.
                    </p>
                </Textbox>
            </div>
        </div>
    )
}
