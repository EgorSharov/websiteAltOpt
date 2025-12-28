import Link from "next/link";
import { Download } from "lucide-react";

const categories = [
  { id: 1, name: "Мясо", color: "bg-red-100" },
  { id: 2, name: "Рыба", color: "bg-blue-100" },
  { id: 3, name: "Овощи", color: "bg-green-100" },
  { id: 4, name: "Полуфабрикаты", color: "bg-orange-100" },
  { id: 5, name: "Бакалея", color: "bg-yellow-100" },
  { id: 6, name: "Молочная продукция", color: "bg-indigo-100" },
  { id: 7, name: "Консервация", color: "bg-amber-100" },
  { id: 8, name: "Напитки", color: "bg-teal-100" },
];

export function CategoryGrid() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`group relative aspect-square overflow-hidden rounded-2xl ${category.color} shadow-sm transition-all hover:shadow-md`}
          >
            {/* Placeholder for 3D Render */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="text-4xl font-bold text-gray-900/10">IMG</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-xl border border-white/20 bg-white/30 p-4 backdrop-blur-md">
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-primary/90 active:scale-95">
          <Download className="h-5 w-5" />
          Скачать полный прайс-лист (PDF)
        </button>
      </div>
    </section>
  );
}
