import { defineField, defineType } from 'sanity';
export const addressType =  defineType({
  name: 'alamat',
  title: 'Deskripsi',
  type: 'text',
  fields: [
    defineField({
      name: 'lokasi',
      type: 'text',
      title: 'Alamat Balai Desa',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'telp_1',
      type: 'string',
      title: 'No. Telp. Utama',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'telp_2',
      type: 'string',
      title: 'No. Telp. Alternatif',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Alamat Email Desa',
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