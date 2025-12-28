export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-surface py-12 text-gray-600">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-primary">LOGISTICS</div>
          <p className="text-sm">
            Надежный партнер в мире логистики и дистрибьюции продуктов питания.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-primary">Контакты</h3>
          <ul className="space-y-2 text-sm">
            <li>+7 (999) 000-00-00</li>
            <li>info@logistics.ru</li>
            <li>г. Владимир, ул. Примерная, 1</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-primary">Информация</h3>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Logistics Co.</p>
            <p className="mt-2">Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
