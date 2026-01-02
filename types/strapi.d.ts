// Basic Strapi Response Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

// Image Type
export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string;
      width: number;
      height: number;
    };
  } | null;
}

// Components
export interface HeroSimple {
  id: number;
  title: string;
  description: string;
  backgroundImage: StrapiImage;
}

export interface StageItem {
  id: number;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StatsItem {
  id: number;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

// Page Types
export interface ThreePLPageData {
  hero: HeroSimple;
  stagesTitle: string;
  stagesDescription: string;
  stages: StageItem[];
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: BenefitItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export interface HomePageData {
  heroTitleLeft: string;
  heroDescLeft: string;
  heroTitleRight: string;
  heroDescRight: string;
  stats: StatsItem[];
  benefits: BenefitItem[];
}
