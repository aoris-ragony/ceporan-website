import { defineField, defineType } from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profil Desa',
  type: 'document',
  fields: [
    defineField({
        name: 'deskripsi',
        title: 'Sejarah / Deskripsi Singkat Desa',
        description: 'Ceritakan sedikit tentang sejarah atau gambaran umum desa.',
        type: 'text',
        rows: 6,
    }),
    defineField({
        name: 'visi',
        title: 'Visi Desa',
        type: 'text',
        rows: 3,
    }),
    defineField({
        name: 'misi',
        title: 'Misi Desa',
        description: 'Tambahkan poin-poin misi satu per satu.',
        type: 'array',
        of: [{ type: 'string' }],
    }),
    defineField({
        name: 'perangkatDesa',
        title: 'Struktur Organisasi / Perangkat Desa',
        type: 'array',
        of: [
            {
                type: 'object',
                title: 'Anggota',
                fields: [
                    { name: 'nama', title: 'Nama Lengkap', type: 'string' },
                    { name: 'jabatan', title: 'Jabatan', type: 'string', initialValue: 'Kepala Desa' },
                    { name: 'foto', title: 'Foto Profil', type: 'image', options: { hotspot: true } },
                ],
                preview: {
                    select: {
                        title: 'nama',
                        subtitle: 'jabatan',
                        media: 'foto'
                    }
                }
            }
        ]
    }),
  ],
})