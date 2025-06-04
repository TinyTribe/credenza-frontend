'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

interface NavigationLink {
  label: string
  path: string
}

export const FooterMenu = () => {
      const pathname = usePathname()

 const mainLinks: NavigationLink[] = [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Job Marketplace', path: '/jobs' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' }
  ]

  // Support links
  const supportLinks: NavigationLink[] = [
    { label: 'Help Center', path: '/help' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' }
  ]

  // Legal links
  const legalLinks: NavigationLink[] = [
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' }
  ]

  const baseClasses: string = 'text-base leading-9 gap-4 max-xl:text-center align-middle tracking-wider font-medium font-satoshi text-gray-600'

  const renderLinks = (links: NavigationLink[]): ReactElement[] => (
    links.map((link: NavigationLink) => (
      <Link key={link.path} href={link.path}>
        <li className={`hover:text-gray-900 transition-colors cursor-pointer ${
          pathname === link.path ? 'text-gray-900 font-semibold' : ''
        }`}>
          {link.label}
        </li>
      </Link>
    ))
  )

  return (
     <div  className='w-[34.345rem] max-sm:w-[21.4375rem] flex flex-col xl:flex-row leading-6 gap-[6.5rem] justify-between max-xl:mx-auto max-xl:mt-14'>
      {/* Main Navigation */}
      <ul className={baseClasses}>
        {renderLinks(mainLinks)}
      </ul>

      {/* Support Navigation */}
      <ul className={baseClasses}>
        {renderLinks(supportLinks)}
      </ul>

      {/* Legal Navigation */}
      <ul className={baseClasses}>
        {renderLinks(legalLinks)}
      </ul>
    </div>  )
}
