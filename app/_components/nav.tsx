"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "صفحه نخست", href: "/" },
  { label: "خدمات", href: "/#services" },
  { label: "اخبار کسب‌وکار", href: "/news" },
  { label: "کسب‌وکارهای ما", href: "/businesses" },
  { label: "درباره ما", href: "/#about" },
  { label: "تماس باما", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div
        className={`sticky z-50 top-0 left-0 right-0 flex justify-center  transition-all duration-500 ${
          isScrolled ? "pt-0" : "pt-10"
        }`}
      >
        <nav
          dir="rtl"
          className={`bg-white shadow-md transition-all duration-500 ease-out ${
            isScrolled
              ? "w-full rounded-none backdrop-blur-sm bg-white/80"
              : "w-9/12 rounded-xl"
          }`}
        >
          <div className="container mx-auto flex flex-row items-center justify-between px-6 py-4">
            {/* LOGO */}
            <Link href="/" className="text-slate-900 font-bold text-lg">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={200}
                height={60}
              />
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex gap-1.5 items-center">
              {navLinks.map((link, index) => (
                <div key={link.href} className="flex items-center gap-1.5">
                  <Link
                    href={link.href}
                    className={`px-4 py-1.5 text-sm transition-all whitespace-nowrap rounded-lg hover:font-medium ${
                      isActive(link.href)
                        ? " font-bold text-slate-900"
                        : "font-light text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>

            {/* DESKTOP CTA BUTTON */}
            <Link
              href="/ideas"
              className="hidden lg:block bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              چه ایده ای داری
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
        dir="rtl"
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-slate-900 font-bold text-lg">
            Logo
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-slate-900"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2 text-base transition-all rounded-lg ${
                isActive(link.href)
                  ? "bg-slate-100 font-bold text-slate-900"
                  : "font-light text-slate-900 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <Link
            href="/ideas"
            onClick={() => setMobileOpen(false)}
            className="mt-6 bg-slate-900 text-white text-base font-medium px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-center"
          >
            چه ایده ای داری
          </Link>
        </div>
      </div>
    </>
  );
}
