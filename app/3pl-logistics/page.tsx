"use client";

import { motion } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";
import { 
  ArrowRight, 
  PackageCheck, 
  Warehouse, 
  Settings, 
  Truck, 
  Undo2, 
  ShieldCheck, 
  Clock, 
  Banknote,
  Cpu
} from "lucide-react";

export default function ThreePLPage() {
  const { openModal } = useModal();

  const stages = [
    {
      title: "Приемка товара",
      description: "Тщательная проверка количества и качества поступающей продукции. Маркировка и внесение данных в WMS систему.",
      icon: PackageCheck,
    },
    {
      title: "Ответственное хранение",
      description: "Размещение на складе с соблюдением температурного режима и влажности. Круглосуточная охрана и видеонаблюдение.",
      icon: Warehouse,
    },
    {
      title: "Комплектация заказов",
      description: "Сборка заказов любой сложности (паллетная, коробочная, штучная). Упаковка, стикеровка и подготовка документов.",
      icon: Settings,
    },
    {
      title: "Доставка",
      description: "Оперативная доставка собственным транспортом в торговые сети, магазины или до конечного потребителя.",
      icon: Truck,
    },
    {
      title: "Обработка возвратов",
      description: "Прием и сортировка возвратной продукции, отбраковка и утилизация при необходимости. Полная отчетность.",
      icon: Undo2,
    },
  ];

  const benefits = [
    {
      title: "Надежность",
      description: "Гарантируем сохранность груза и точное соблюдение сроков. Страхование ответственности.",
      icon: ShieldCheck,
    },
    {
      title: "Скорость",
      description: "Оптимизированные бизнес-процессы и современная WMS позволяют обрабатывать заказы в рекордные сроки.",
      icon: Clock,
    },
    {
      title: "Экономия",
      description: "Вы платите только за фактически занимаемое место и выполненные операции. Никаких постоянных расходов на свой склад.",
      icon: Banknote,
    },
    {
      title: "Технологичность",
      description: "Личный кабинет клиента, интеграция по API, прозрачная отчетность в режиме реального времени.",
      icon: Cpu,
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Hero3pl.png"
            alt="3PL Logistics Warehouse"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl"
            >
              Полный цикл <span className="text-accent">3PL Логистики</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-xl font-medium text-gray-800"
            >
              Возьмем на себя все складские и логистические операции, чтобы вы могли сосредоточиться на развитии бизнеса.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Рассчитать стоимость
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Как мы работаем</h2>
          <p className="mt-4 text-lg text-gray-600">Прозрачный и отлаженный процесс на каждом этапе</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="absolute left-[50%] top-0 bottom-0 hidden w-0.5 bg-gray-200 md:block transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col gap-8 md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col gap-4 ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"}`}>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-accent md:hidden">
                      <stage.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-md">{stage.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-blue-50 shadow-sm text-accent hidden md:flex">
                    <stage.icon size={28} />
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Почему выбирают нас</h2>
            <p className="mt-4 text-lg text-blue-100">Мы не просто склад, мы — ваш стратегический партнер</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 text-cyan-300">
                  <benefit.icon size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-sm text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl bg-gray-50 p-8 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Готовы оптимизировать логистику?</h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-gray-600">
            Свяжитесь с нами для индивидуального расчета стоимости и обсуждения условий сотрудничества.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-cyan-600"
          >
            Оставить заявку
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
