'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';

const navItems = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Service' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/85 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="text-sm tracking-[0.25em] font-light text-neutral-900"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.siteName}
        </a>

        {/* PC ナビ */}
        <nav className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* モバイル メニューボタン */}
        <button
          type="button"
          className="sm:hidden p-2 -mr-2"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-5 space-y-1.5">
            <span
              className={`block h-px bg-neutral-900 transition-transform ${
                menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px bg-neutral-900 transition-transform ${
                menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* モバイル ナビ */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-6 py-4 text-xs tracking-[0.25em] text-neutral-600 hover:text-neutral-900"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
