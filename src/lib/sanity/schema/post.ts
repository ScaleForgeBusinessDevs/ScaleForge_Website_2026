import type { Rule } from "@sanity/types";

export const postSchema = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Blog Post", value: "blog" },
          { title: "Case Study", value: "case-study" },
        ],
        layout: "radio",
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "topicTags",
      title: "Topic Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topic" }] }],
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "featuredImageCaption",
      title: "Image Caption (optional)",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule: Rule) => Rule.required().min(100).max(200),
    },
    {
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      description: "Estimated reading time in minutes",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
    },
    {
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "lastUpdatedDate",
      title: "Last Updated Date",
      type: "date",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt Text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
        {
          type: "code",
          options: {
            languageAlternatives: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "Bash", value: "bash" },
              { title: "JSON", value: "json" },
              { title: "CSS", value: "css" },
            ],
          },
        },
      ],
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Pin this post to the top of the blog index",
      initialValue: false,
    },
    {
      name: "relatedPostsManual",
      title: "Related Posts (manual)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule: Rule) => Rule.max(3),
    },
    {
      name: "seoTitle",
      title: "SEO Title (optional override)",
      type: "string",
      validation: (Rule: Rule) => Rule.max(60),
    },
    {
      name: "seoDescription",
      title: "SEO Description (optional override)",
      type: "text",
      rows: 2,
      validation: (Rule: Rule) => Rule.max(160),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedDate",
      media: "featuredImage",
    },
  },
};
