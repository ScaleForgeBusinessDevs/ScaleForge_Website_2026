import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Design", value: "Web Design" },
          { title: "Web Development", value: "Web Development" },
          { title: "SEO", value: "SEO" },
          { title: "AI Automation", value: "AI Automation" },
          { title: "Social Media Branding", value: "Social Media Branding" },
          { title: "Content Creation", value: "Content Creation" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "client",
      title: "Client / Company",
      type: "string",
    }),
    defineField({
      name: "projectUrl",
      title: "Live Project URL",
      type: "url",
      description: "Optional — link to the live site or deliverable",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Shown on project cards — keep under 160 characters",
      validation: (r) => r.required().max(300),
    }),
    defineField({
      name: "results",
      title: "Results & Metrics",
      type: "array",
      description:
        "Key outcomes — e.g. 312% traffic increase, 4.2s → 0.8s load time",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value (e.g. 312%)",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "label",
              title: "Label (e.g. Traffic increase)",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
      validation: (r) => r.max(6),
    }),
    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "text",
      rows: 4,
      description:
        "What problem did the client face before engaging ScaleForge?",
    }),
    defineField({
      name: "solution",
      title: "Our Solution",
      type: "text",
      rows: 4,
      description: "How did ScaleForge solve it?",
    }),
    defineField({
      name: "body",
      title: "Full Case Study Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt Text" }),
            defineField({ name: "caption", type: "string", title: "Caption" }),
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
      description: "Featured projects appear first in the grid",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      category: "category",
      client: "client",
    },
    prepare({ title, media, category, client }) {
      return {
        title,
        media,
        subtitle: [category, client].filter(Boolean).join(" · "),
      };
    },
  },
});
