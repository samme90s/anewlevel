// utils.ts
// Merges classnames using tailwind-merge and clsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs))
}
