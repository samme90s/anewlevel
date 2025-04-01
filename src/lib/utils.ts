// Merges classnames using tailwind-merge and clsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs))
}

export const getGoogleMapsUri = (address: string): string => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
