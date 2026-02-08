// sanity-studio/schemaTypes/category.ts
import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Kategori / Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Tag',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
    }),
  ],
})