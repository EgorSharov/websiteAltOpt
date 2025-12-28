"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    type: "logistics",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Спасибо!</h3>
        <p className="text-gray-600">
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ваше имя
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full border-b border-gray-300 bg-transparent py-2 transition-colors focus:border-primary focus:outline-none"
          placeholder="Иван Иванов"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Телефон <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          className="mt-1 block w-full border-b border-gray-300 bg-transparent py-2 transition-colors focus:border-primary focus:outline-none"
          placeholder="+7 (999) 000-00-00"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Название компании
        </label>
        <input
          type="text"
          className="mt-1 block w-full border-b border-gray-300 bg-transparent py-2 transition-colors focus:border-primary focus:outline-none"
          placeholder="ООО Пример"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Тип запроса
        </label>
        <div className="relative mt-1">
          <select
            className="block w-full appearance-none border-b border-gray-300 bg-transparent py-2 pr-8 transition-colors focus:border-primary focus:outline-none"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="logistics">Логистика (3PL)</option>
            <option value="wholesale">Опт (Дистрибьюция)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-4 font-bold text-white transition-opacity hover:opacity-90"
      >
        Отправить заявку
      </button>
    </form>
  );
}
