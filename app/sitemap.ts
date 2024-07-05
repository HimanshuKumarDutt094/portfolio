import { MetadataRoute } from "next";

const BASE_URL = "https://www.himanshudutt.me";

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${BASE_URL}/`,
        },
    ];
}