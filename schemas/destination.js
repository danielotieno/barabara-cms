import {defineField, defineType} from 'sanity'
import countries from './countries'

export default defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [...countries],
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'country',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Country Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'destinationList',
      title: 'Destination List',
      type: 'array',
      of: [{type: 'reference', to: {type: 'destinationList'}}],
    }),
  ],
})
