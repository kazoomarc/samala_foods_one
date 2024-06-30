'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <div className="text-base font-medium bg-black _bg-orange-700">
      <div className="">
        <nav
          className={`flex lg:hover:bg-black overflow-hidden justify-between px-4 items-center sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 ${
            isMenuOpen ? 'hover:bg-gray-500' : ''
          }`}
        >
          <div>
            <span className="py-4 text-lg font-bold tracking-wider text-white font-playfair">
              <Link href={'/'}>SAMALA</Link>
            </span>
          </div>

          <div className="hidden tracking-wide text-white lg:flex">
            <Link href="/menu" className="px-3 py-4 hover:bg-gray-500">
              MENU
            </Link>
            <Link href="/about" className="px-3 py-4 hover:bg-gray-500">
              ABOUT
            </Link>
            <Link href="/contact" className="px-3 py-4 hover:bg-gray-500">
              CONTACT
            </Link>
          </div>

          <div
            className="flex items-center justify-center py-4 text-white lg:hidden hover:cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </nav>

        <div
          className={`transition-all duration-300 ease-in-out lg:hidden
            ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
            overflow-hidden`}
        >
          <Link href="/menu">
            <div className="w-full px-4 py-4 tracking-wide text-white hover:bg-gray-500 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
              MENU
            </div>
          </Link>

          <Link href="/about">
            <div className="w-full px-4 py-4 tracking-wide text-white hover:bg-gray-500 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
              ABOUT
            </div>
          </Link>

          <Link href="/contact">
            <div className="w-full px-4 py-4 tracking-wide text-white hover:bg-gray-500 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
              CONTACT
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path
        fillRule="evenodd"
        d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
