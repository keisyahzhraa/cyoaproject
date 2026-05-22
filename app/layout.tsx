"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isStoryPage = pathname?.startsWith("/story/");

  return (
    <html lang="id">
      <body
        className={`${font.className} bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#22c55e]/10`}
      >
        {!isStoryPage && <Navbar />}

        <main className="pt-24 md:pt-32 flex flex-col">
          {children}
        </main>

        {!isStoryPage && <Footer />}
      </body>
    </html>
  );
}

/* ================= NAVBAR ================= */
function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Cerita", href: "/cerita" },
    { name: "Tentang", href: "/tentang" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl px-6 md:px-8 py-3 md:py-4 transition-all duration-300 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-between border
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md border-slate-200"
            : "bg-white border-transparent shadow-sm"
        }`}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3 group cursor-pointer relative z-50"
        >
          <img
            src="/logocyoa.png"
            alt="SAKATA"
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-110"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-2 rounded-2xl font-bold text-sm relative overflow-hidden transition-all duration-300 group
                  ${
                    isActive
                      ? "text-[#92400e]"
                      : "text-[#22c55e]"
                  }
                `}
              >
                {/* ACTIVE / HOVER BACKGROUND */}
                <span
                  className={`absolute inset-0 bg-[#fbbf24] transition-transform duration-300 ease-out
                    ${
                      isActive
                        ? "translate-y-0"
                        : "translate-y-full group-hover:translate-y-0"
                    }
                  `}
                />

                {/* TEXT */}
                <span className="relative z-10">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2 text-slate-600 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="absolute top-2 left-0 w-full px-4 md:hidden">
            <div className="bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 pt-20 flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-bold p-4 rounded-2xl text-center transition-colors
                      ${
                        isActive
                          ? "bg-[#fbbf24] text-[#92400e]"
                          : "text-[#22c55e] hover:bg-[#fbbf24] hover:text-[#92400e]"
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="bg-[#f0fdf4] border-t border-green-100 pt-6 text-slate-600 font-medium">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          {/* LOGO + DESC */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex justify-center md:justify-start">
              <img
                src="/logocyoa.png"
                alt="SAKATA Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Meningkatkan pemahaman kosakata dan literasi anak kelas 4 SD
              melalui cerita petualangan interaktif.
            </p>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-3 items-center">
            <span className="font-bold text-[#22c55e] uppercase tracking-widest text-[10px]">
              Eksplorasi
            </span>

            <Link href="/cerita" className="hover:text-[#92400e] transition-colors">
              Mulai Baca
            </Link>
          </div>

          {/* ABOUT */}
          <div className="flex flex-col gap-3 items-center">
            <span className="font-bold text-[#22c55e] uppercase tracking-widest text-[10px]">
              Dukungan
            </span>

            <Link href="/tentang" className="hover:text-[#92400e] transition-colors">
              Tentang Kami
            </Link>
          </div>

        </div>
      </div>

      <div className="bg-green-100/50 py-4 text-center border-t border-green-200/30">
        <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-green-700/70">
          © IPB 1 • Amartha Project • 2026
        </p>
      </div>
    </footer>
  );
}