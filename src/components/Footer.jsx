import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group mt-1" {...props}>
      <Icon className="h-5 w-5 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-base font-medium text-zinc-800 dark:text-zinc-200">
            <SocialLink
              href="https://twitter.com/_simplecompany"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
                <p>mark@simple.company</p>
              </div>
              <p className="text-base text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Simple Company. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
