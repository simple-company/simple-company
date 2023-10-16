import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Simple.Company',
    default:
      'Simple.Company',
  },
  description:
    'Small team with big dreams, laser-focused on the hyper niche. Zero meetings, async, no outside funding, just deep work and passionate souls. We're all about keeping things simple, clear, and fun for everyone involved - customers, team and everyone in between! Scratching our own itch, that’s us in a nutshell @simple.company!',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
