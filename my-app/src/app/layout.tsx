import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    icons: {
        icon: 'favicon.png',
    },
    title: 'O portifólio do Pedro',
    description: 'Portifólio responsivo e com desing moderno',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
