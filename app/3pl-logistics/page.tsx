import { getThreePLPageData } from "@/lib/loaders";
import { getStrapiMedia } from "@/lib/strapi";
import Client3PLPage from "./client";

export default async function ThreePLPage() {
  const data = await getThreePLPageData();

  return <Client3PLPage data={data} />;
}