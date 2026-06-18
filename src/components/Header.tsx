"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          StreetWear Co.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-sm font-medium hover:text-gray-600 transition">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition">
            Contact
          </Link>
          <Link
            href="/cart"
            className="relative text-sm font-medium hover:text-gray-600 transition"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 pb-4 space-y-3">
          <Link href="/products" className="block text-sm font-medium" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/about" className="block text-sm font-medium" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block text-sm font-medium" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/cart" className="block text-sm font-medium" onClick={() => setMenuOpen(false)}>
            Cart ({totalItems})
          </Link>
        </div>
      )}
    </header>
  );
}
