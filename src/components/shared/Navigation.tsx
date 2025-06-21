'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Blog', path: '/blog' },
    { label: 'Tools', path: '/tools' },
  ]

  return (
    <nav className="hidden md:flex gap-12">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`hover:text-blue-600 transition-colors ${
            pathname === item.path ? 'text-blue-600 font-medium' : 'text-gray-600'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
} 