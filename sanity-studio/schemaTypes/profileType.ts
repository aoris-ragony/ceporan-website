// sanity-studio/schemaTypes/profilDesa.ts
import { defineField, defineType } from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profil & Kontak Desa',
  type: 'document',
  fields: [
    defineField({
      name: 'namaDesa',
      title: 'Nama Desa',
      type: 'string',
      initialValue: 'Desa Ceporan',
    }),
    defineField({
      name: 'alamat',
      title: 'Alamat Lengkap',
      type: 'text', // Pakai text agar bisa multi-baris
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Alamat Email',
      type: 'string',
    }),
    defineField({
      name: 'telepon',
      title: 'Nomor Telepon (Tampilan)',
      description: 'Contoh: 0812-3456-7890 (Ini yang dilihat user)',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'Nomor WhatsApp (Link)',
      description: 'Contoh: 6281234567890 (Gunakan angka saja, dengan kkode negara 62)',
      type: 'string',
    }),
    defineField({
      name: 'jamKerja',
      title: 'Jam Operasional',
      type: 'text',
      rows: 3,
      initialValue: 'Senin - Kamis: 08.00 - 14.00 WIB\nJumat: 08.00 - 11.00 WIB'
    }),
  ],
})