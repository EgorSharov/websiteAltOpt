"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";

export function HeroSplit() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const { openModal } = useModal();

  const transition = { type: "spring", stiffness: 200, damping: 30 } as const;

  return (
    <section className="flex min-h-[calc(100vh-64px)] w-full flex-col overflow-hidden md:flex-row">
      {/* Left Side: Partners / 3PL */}
      <motion.div
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        initial={{ flex: 1 }}
        animate={{
          flex: hoveredSide === "left" ? 1.5 : hoveredSide === "right" ? 0.6 : 1,
        }}
        transition={transition}
        className="relative flex flex-1 flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100 px-8 py-16 md:px-16"
      >
        <div className="z-10 max-w-lg">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            Партнерам
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
            3PL Логистика <br /> и Хранение
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Комплексные решения для вашего бизнеса. Складские услуги,
            транспортировка и управление запасами.
          </p>
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90"
          >
            Стать партнером
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      </motion.div>

      {/* Right Side: Stores / Distribution */}
      <motion.div
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        initial={{ flex: 1 }}
        animate={{
          flex: hoveredSide === "right" ? 1.5 : hoveredSide === "left" ? 0.6 : 1,
        }}
        transition={transition}
        className="relative flex flex-1 flex-col justify-center overflow-hidden bg-primary px-8 py-16 text-white md:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900" />
        
        <div className="z-10 max-w-lg">
          <span className="mb-4 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-cyan-300">
            Магазинам
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Дистрибьюция <br /> Продуктов
          </h1>
          <p className="mb-8 text-lg text-blue-100">
            Поставки продуктов питания в розничные сети и магазины. 
            Широкий ассортимент и точная логистика.
          </p>
          <Link
            href="/catalog"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cyan-500"
          >
            Перейти в каталог
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </motion.div>
    </section>
  );
}
