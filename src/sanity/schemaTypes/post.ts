import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Post Type",
      type: "string",
      options: { list: [{ title: "Blog", value: "Blogs" }, { title: "Case Study", value: "Case Studies" }], layout: "radio" },
      initialValue: "Blogs",
    }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })] }),
    defineField({ name: "description", title: "Description / Excerpt", type: "text", rows: 3 }),
    defineField({ name: "executiveSummary", title: "Executive Summary", description: "Short plain-language summary used for AI/answer-engine citations.", type: "text", rows: 4 }),
    defineField({ name: "readTime", title: "Read Time (minutes)", type: "number" }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date", initialValue: () => new Date().toISOString().split("T")[0] }),
    defineField({ name: "featured", title: "Featured Post", type: "boolean", initialValue: false }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", category: "category" },
    prepare({ title, media, category }) {
      return { title, media, subtitle: category === "Case Studies" ? "Case Study" : "Blog" };
    },
  },
});
