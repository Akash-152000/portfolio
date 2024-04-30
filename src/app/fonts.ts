import { DM_Sans, Syne } from "next/font/google";

export const syne = Syne({
    subsets: ['latin'],
    variable: '--font-syne',
    display: 'swap',
})

export const dm_sans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dmSans',
    display: 'swap',
})
