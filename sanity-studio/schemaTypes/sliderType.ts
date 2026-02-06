// sanity-studio/schemaTypes/slider.ts
import { defineField, defineType } from 'sanity'

export const sliderType = defineType({
  name: 'slider',
  title: 'Slider Halaman Depan',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      type: 'string',
      title: 'Nama Slider',
      description: 'Beri nama untuk identifikasi, misal: "Slider Utama 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Daftar Foto Slider',
      description: 'Drag & Drop foto-foto Anda ke sini. Anda bisa mengubah urutan dengan menggesernya.',
      options: {
        layout: 'grid', // Tampilan di admin akan jadi kotak-kotak rapi
      },
      of: [
        defineField({
          type: 'image',
          name: 'slideImage',
          options: {
            hotspot: true, // Agar bisa mengatur titik fokus di HP
          },
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Teks Caption (Opsional)',
              description: 'Teks yang akan muncul di atas foto.',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text (Untuk SEO)',
              description: 'Deskripsi singkat foto untuk Google.',
            }),
            defineField({
              name: 'subcaption',
              type: 'string',
              title: 'Subtext Caption',
              description: 'Subteks dibawah caption',
            })
          ],
        }),
      ],
    }),
  ],
})