// This file contains utility functions used throughout the application.

// Import functions/types from class merging libraries.
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges multiple class name values into a single string.
// Handles conditional classes (via clsx) and resolves
// conflicting Tailwind CSS classes (via tailwind-merge).
// Input: Any number of class values (strings, arrays, objects).
// Output: A single optimized string of class names.
export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs))
}

// Generates a Google Maps URL string for a given address.
// Input: An address string.
// Output: A formatted URL string intended for Google Maps,
//         with the address properly URI encoded.
// Note: The base URL structure used here is specific.
export const getGoogleMapsUri = (address: string): string => {
    // Encodes the address to make it safe for inclusion in a URL.
    const encodedAddress = encodeURIComponent(address)
    // Constructs the specific URL string.
    return `https://www.google.com/maps/search/?api=1&query=$${encodedAddress}`
}
