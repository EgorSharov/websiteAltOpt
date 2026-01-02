import { fetchAPI } from "./strapi";
import { HomePageData, ThreePLPageData } from "@/types/strapi";

/**
 * Universal loader for Single Types (e.g., Pages, Settings)
 */
export async function getSingleType<T>(
  slug: string, 
  queryParams: object = { populate: "*" }
): Promise<T | null> {
  const data = await fetchAPI(`/${slug}`, queryParams);
  return data?.data?.attributes || null;
}

/**
 * Universal loader for Collection Types (e.g., Products, Articles)
 */
export async function getCollectionType<T>(
  slug: string, 
  queryParams: object = { populate: "*" }
): Promise<T[] | null> {
  const data = await fetchAPI(`/${slug}`, queryParams);
  
  if (!data?.data) return null;

  return data.data.map((item: any) => ({
    id: item.id,
    ...item.attributes,
  })) as T[];
}

// --- Specific loaders with Mock Data fallbacks ---

const MOCK_3PL: ThreePLPageData = {
  hero: {
    id: 1, title: "Полный цикл 3PL Логистики",
    description: "Возьмем на себя все складские и логистические операции.",
    backgroundImage: { data: { id: 1, attributes: { url: "/images/Hero3pl.png", alternativeText: "3PL", width: 1920, height: 1080 } } },
  },
  stagesTitle: "Как мы работаем", stagesDescription: "Прозрачный процесс",
  stages: [
    { id: 1, title: "Приемка", description: "Проверка качества.", icon: "PackageCheck" },
    { id: 2, title: "Хранение", description: "Соблюдение режима.", icon: "Warehouse" },
    { id: 3, title: "Комплектация", description: "Сборка заказов.", icon: "Settings" },
    { id: 4, title: "Доставка", description: "Собственный транспорт.", icon: "Truck" },
    { id: 5, title: "Возвраты", description: "Сортировка продукции.", icon: "Undo2" },
  ],
  benefitsTitle: "Почему мы", benefitsDescription: "Ваш партнер",
  benefits: [
    { id: 1, title: "Надежность", description: "Сохранность груза.", icon: "ShieldCheck" },
    { id: 2, title: "Скорость", description: "Оптимизация процессов.", icon: "Clock" },
  ],
  ctaTitle: "Готовы?", ctaDescription: "Свяжитесь с нами.", ctaButtonText: "Заявка",
};

export async function getThreePLPageData(): Promise<ThreePLPageData> {
  const data = await getSingleType<ThreePLPageData>("three-pl-page", {
    populate: { hero: { populate: "*" }, stages: true, benefits: true },
  });

  if (!data) {
    console.warn("Using mock data for 3PL Page.");
    return MOCK_3PL;
  }
  return data;
}