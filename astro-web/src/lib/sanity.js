import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "3ozr75gb", // Ambil dari .env
  dataset: "production",
  apiVersion: "2026-02-04",
  useCdn: false,
});