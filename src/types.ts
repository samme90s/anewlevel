// src/types.ts

// This file defines TypeScript interfaces for the expected structure
// of the data used in the application.
// Main structure expected in index.json (found in the public directory).

// ----------------------------
// FOOTER
// ----------------------------
export interface FooterContent {
    // Information
    email: string
    primary_address: string
    secondary_address: string

    // Social Media Links
    linkedin_href: string
    linkedin_icon: string
    instagram_href: string
    instagram_icon: string
    facebook_href: string
    facebook_icon: string
}

// ----------------------------
// HOME
// ----------------------------
// Used for the World component
interface WorldData {
    video: string
    poster: string
    heading: string
    description: string
    href: string
}

export interface HomeContent {
    // Avatar
    avatar_image: string
    avatar_image_alt: string

    // Heading
    heading: string
    subheading: string

    // Section 1
    section_1_heading: string
    paragraph_1: string
    world: WorldData
    paragraph_2: string

    // Section 2
    section_2_heading: string
    image: string
    image_alt: string
    paragraph_3: string
}

// ----------------------------
// ABOUT
// ----------------------------
export interface AboutContent {
    // Avatar
    avatar_image: string
    avatar_image_alt: string

    // Heading
    heading: string
    subheading: string

    // Section 1
    section_1_heading: string
    image: string
    image_alt: string
    paragraph_1: string
    paragraph_2: string
    paragraph_3: string

    // Audio
    audio: string

    // Section 2
    section_2_heading: string
    image_2: string
    image_2_alt: string
    paragraph_4: string
    image_3: string
    image_3_alt: string
}

// ----------------------------
// APP DATA (MAIN)
// ----------------------------
export interface AppData {
    splash_image: string
    home: HomeContent
    about: AboutContent
    footer: FooterContent
    // Add any other top-level keys from the public/index.json file.
}
