import { CategoryGrid } from "@/components/CategoryGrid";

export default function CatalogPage() {
  return (
    <div className="container mx-auto min-h-screen px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Каталог продукции
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Мы предлагаем широкий ассортимент продуктов питания для вашего бизнеса.
          Ознакомьтесь с основными категориями или скачайте полный прайс-лист.
        </p>
      </div>

      <CategoryGrid />
    </div>
  );
}
