// src/types.ts

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

export interface SceneData {
    video: string
    poster: string
    heading: string
    description: string
    href: string
}

export interface ScenesContent {
    world: SceneData
    // Add other scenes if they exist
}

export interface HomeContent {
    avatar_image: string
    avatar_image_alt: string
    heading: string
    subheading: string
    paragraph_1: string
    paragraph_2: string
}

export interface AboutContent {
    heading: string
    paragraph_1: string
    image: string
    image_alt: string
}

// Main structure expected in index.json
export interface AppData {
    splash_image: string
    home: HomeContent
    scenes: ScenesContent
    about: AboutContent
    footer: FooterContent
    // Add any other top-level keys from your index.json
}
