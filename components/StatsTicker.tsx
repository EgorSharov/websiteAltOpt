"use client";

export function StatsTicker() {
  const stats = [
    { label: "Уровень сервиса", value: "99.8%" },
    { label: "Доставки в неделю", value: "4+" },
    { label: "Области покрытия", value: "2" },
    { label: "Довольных клиентов", value: "500+" },
    { label: "Лет на рынке", value: "10+" },
  ];

  // Duplicating for infinite scroll effect
  const repeatedStats = [...stats, ...stats, ...stats];

  return (
    <section className="w-full overflow-hidden bg-primary py-8 text-white">
      <div className="relative flex w-full overflow-hidden">
        <div className="animate-marquee flex gap-16 whitespace-nowrap px-8">
          {repeatedStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-4xl font-bold text-accent md:text-5xl">
                {stat.value}
              </span>
              <span className="text-lg font-medium text-blue-100 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
