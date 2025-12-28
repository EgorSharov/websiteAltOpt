import { Thermometer, Building2, Truck } from "lucide-react";

export function BenefitsGrid() {
  const benefits = [
    {
      icon: Thermometer,
      title: "Температурный контроль",
      description: "Строгое соблюдение режимов хранения и перевозки для свежести продукции.",
    },
    {
      icon: Building2,
      title: "Федеральные сети",
      description: "Опыт работы и аккредитация в крупнейших торговых сетях региона.",
    },
    {
      icon: Truck,
      title: "Собственный автопарк",
      description: "Более 50 единиц техники для оперативной и надежной доставки.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 md:px-6" id="services">
      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <item.icon size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
