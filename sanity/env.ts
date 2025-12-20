export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
// Use a placeholder projectId for development - replace with your actual project ID
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";

export const useCdn = process.env.NODE_ENV === "production";
