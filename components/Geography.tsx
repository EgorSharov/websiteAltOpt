export function Geography() {
  return (
    <section className="container mx-auto px-4 py-16 md:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          География работы
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Работаем во Владимирской и Ивановской областях
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-[2px]">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
        
        <div className="relative flex h-96 w-full items-center justify-center rounded-[22px] bg-white">
          <div className="text-center">
            <span className="block text-6xl opacity-10">🗺️</span>
            <span className="mt-4 block text-xl font-medium text-gray-400">
              Map Placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
