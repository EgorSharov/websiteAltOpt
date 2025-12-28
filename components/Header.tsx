"use client";

import Link from "next/link";
import { useModal } from "@/components/providers/ModalProvider";

export function Header() {
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          LOGISTICS
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-primary transition-colors">
            Главная
          </Link>
          <Link href="/#services" className="hover:text-primary transition-colors">
            Услуги 3PL
          </Link>
          <Link href="/catalog" className="hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openModal}
            className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            Связаться
          </button>
        </div>
      </div>
    </header>
  );
}
