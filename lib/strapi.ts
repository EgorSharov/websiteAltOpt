import qs from "qs";

export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param path Path of the API endpoint
 * @param urlParamsObject URL params object, will be stringified
 * @param options Options passed to fetch
 * @returns Parsed API response
 */
export async function fetchAPI(
  path: string,
  urlParamsObject: object = {},
  options: RequestInit = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // prettify URL
    });
    
    const requestUrl = `${STRAPI_API_URL}/api${path}${queryString ? `?${queryString}` : ""}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error(response.statusText);
      // Return null or throw error depending on needs
      return null; 
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null; // Return null on error to allow graceful degradation
  }
}

/**
 * Helper to get full Strapi media URL
 * @param url Relative URL from Strapi
 * @returns Full URL
 */
export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the Strapi URL
  return `${STRAPI_API_URL}${url}`;
}
