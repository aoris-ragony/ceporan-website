// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"; // <--- 1. Import library ini

export const client = createClient({
  projectId: "3ozr75gb", // Ganti dengan Project ID Anda
  dataset: "production",
  apiVersion: "2024-02-06",
  useCdn: true,
});

// --- BAGIAN BARU YANG WAJIB DITAMBAH ---

// 2. Nyalakan mesin pembangun URL
const builder = imageUrlBuilder(client);

// 3. Export fungsi 'urlFor' agar bisa dipanggil di ProfileSection.astro
export function urlFor(source: any) { // <--- JavaScript tidak mengerti ": any"
  return builder.image(source);
}