import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Покупателям | Logistics",
  description: "Информация для оптовых покупателей",
};

export default function BuyersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="mb-6 text-3xl font-bold text-primary md:text-4xl">Для покупателей</h1>
      <div className="prose max-w-none text-gray-600">
        <p className="mb-4 text-lg">
          Мы предлагаем выгодные условия сотрудничества для розничных сетей, магазинов и HoReCa.
        </p>
        <h2 className="mb-3 mt-8 text-xl font-semibold text-primary">Преимущества работы с нами</h2>
        <div className="grid gap-6 py-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-primary">Ассортимент</h3>
                <p>Более 1000 наименований товаров в наличии.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-primary">Логистика</h3>
                <p>Доставка на следующий день собственной службой.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-primary">Сервис</h3>
                <p>Персональный менеджер и удобный документооборот.</p>
            </div>
        </div>
        <p>
            Чтобы стать нашим клиентом, свяжитесь с нами или оставьте заявку.
        </p>
      </div>
    </div>
  );
}
