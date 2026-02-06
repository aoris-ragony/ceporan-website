import { defineField, defineType } from 'sanity';
export const descType =  defineType({
  name: 'desc',
  title: 'Deskripsi',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      type: 'string',
      title: 'Judul Berita',
      validation: (Rule) => Rule.required().min(10).error('Judul terlalu pendek'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug (URL)',
      options: {
        source: 'judul', // Otomatis membuat URL dari judul
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gambarUtama',
      type: 'image',
      title: 'Foto Utama',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Deskripsi Foto',
        }),
      ],
    }),
    defineField({
      name: 'tanggal',
      type: 'datetime',
      title: 'Tanggal Posting',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isiBerita',
      type: 'array',
      title: 'Isi Berita',
      of: [{ type: 'block' }],
    }),
  ],
})