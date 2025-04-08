// src/types.ts
// Main structure expected in index.json (found in the public dir)
// ----------------------------
// FOOTER
// ----------------------------
export interface FooterContent {
    email: string
    primary_address: string
    secondary_address: string
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
interface WorldData {
    video: string
    poster: string
    heading: string
    description: string
    href: string
}

export interface HomeContent {
    avatar_image: string
    avatar_image_alt: string
    heading: string
    subheading: string
    paragraph_1: string
    paragraph_2: string
    world: WorldData
}

// ----------------------------
// ABOUT
// ----------------------------
export interface AboutContent {
    heading: string
    paragraph_1: string
    paragraph_2: string
    paragraph_3: string
    image: string
    image_alt: string
}

// ----------------------------
// APP DATA (MAIN)
// ----------------------------
export interface AppData {
    splash_image: string
    home: HomeContent
    about: AboutContent
    footer: FooterContent
    // Add any other top-level keys from your index.json
}
