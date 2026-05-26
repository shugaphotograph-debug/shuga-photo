'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/service', label: 'Service' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ページ遷移時にモバイルメニューを閉じる
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isTopPage = pathname === '/';
  const transparentBg = isTopPage && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparentBg
          ? 'bg-transparent'
          : 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* サイト名 */}
        <Link
          href="/"
          className={`text-sm font-light tracking-[0.25em] uppercase transition-colors duration-300 ${
            transparentBg ? 'text-white' : 'text-stone-900'
          }`}
        >
          Shuga Photo
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group ${
                pathname === href
                  ? transparentBg
                    ? 'text-white'
                    : 'text-stone-900'
                  : transparentBg
                  ? 'text-white/70 hover:text-white'
                  : 'text-stone-400 hover:text-stone-900'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-300 ${
                  pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* ハンバーガーボタン */}
        <button
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] transition-colors ${
            transparentBg ? 'text-white' : 'text-stone-900'
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px bg-current origin-center transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-current origin-center transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-5"
          aria-label="モバイルナビゲーション"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors ${
                pathname === href ? 'text-stone-900' : 'text-stone-400'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
