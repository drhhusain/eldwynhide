import { defineField, defineType } from 'sanity'

export const pageContent = defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page ID',
      type: 'string',
      options: {
        list: [
          { title: 'About', value: 'about' },
          { title: 'Craftsmanship', value: 'craftsmanship' },
          { title: 'Materials', value: 'materials' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'content', type: 'text', title: 'Content', rows: 6 },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
            },
            {
              name: 'imagePosition',
              type: 'string',
              title: 'Image Position',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                  { title: 'Full Width', value: 'full' },
                ],
              },
              initialValue: 'right',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageId',
      media: 'heroImage',
    },
  },
})

