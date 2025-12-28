import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Logistics",
  description: "Свяжитесь с нами для сотрудничества",
};

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="mb-8 text-3xl font-bold text-primary md:text-4xl">Контакты</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-primary">Наш офис</h2>
            <p className="text-gray-600">г. Владимир, ул. Примерная, 1</p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-primary">Телефон</h2>
            <p className="text-gray-600">+7 (999) 000-00-00</p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-primary">Email</h2>
            <p className="text-gray-600">info@logistics.ru</p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-primary">Режим работы</h2>
            <p className="text-gray-600">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: Выходной</p>
          </div>
        </div>
        <div className="h-64 rounded-xl bg-gray-200 md:h-auto">
          {/* Placeholder for a map */}
          <div className="flex h-full items-center justify-center text-gray-500">
            Карта
          </div>
        </div>
      </div>
    </div>
  );
}
