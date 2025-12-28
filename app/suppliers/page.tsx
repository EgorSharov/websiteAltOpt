import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Поставщикам | Logistics",
  description: "Информация для поставщиков",
};

export default function SuppliersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="mb-6 text-3xl font-bold text-primary md:text-4xl">Для поставщиков</h1>
      <div className="prose max-w-none text-gray-600">
        <p className="mb-4 text-lg">
          Мы приглашаем к сотрудничеству производителей и дистрибьюторов продуктов питания.
        </p>
        <h2 className="mb-3 mt-8 text-xl font-semibold text-primary">Наши требования</h2>
        <ul className="mb-6 list-inside list-disc space-y-2">
          <li>Высокое качество продукции</li>
          <li>Стабильность поставок</li>
          <li>Наличие необходимых сертификатов</li>
          <li>Конкурентные цены</li>
        </ul>
        <h2 className="mb-3 mt-8 text-xl font-semibold text-primary">Что мы предлагаем</h2>
        <ul className="mb-6 list-inside list-disc space-y-2">
          <li>Регулярные заказы</li>
          <li>Своевременную оплату</li>
          <li>Широкую географию сбыта</li>
        </ul>
      </div>
    </div>
  );
}
