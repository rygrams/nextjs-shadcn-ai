'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icons } from './icons'
import { appConfig } from '~/configs'
import { cn } from '~/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="size-6" />
        <span className="hidden font-bold lg:inline-block">
          {appConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/components') &&
              !pathname?.startsWith('/docs/component/chart')
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  )
}
