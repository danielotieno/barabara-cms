import {defineField, defineType} from 'sanity'
import countries from './countries'

export default defineType({
  name: 'destinationList',
  title: 'Destination List',
  type: 'document',
  fields: [
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
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
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
      name: 'destinationName',
      title: 'Destination Name',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'contentTitle',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'contentDescription',
      title: 'Content Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'highlightsContent',
      title: 'Highlights Content',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'itineraryContent',
      title: 'Itinerary Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'includedContent',
      title: 'Included Content',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
