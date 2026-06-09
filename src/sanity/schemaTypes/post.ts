import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({
      name: "type",
      title: "Post Type",
      type: "string",
      options: { list: [{ title: "Blog", value: "blog" }, { title: "Case Study", value: "case-study" }], layout: "radio" },
      initialValue: "blog",
    }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })] }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "readTime", title: "Read Time (minutes)", type: "number" }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "publishedDate", title: "Published Date", type: "date", initialValue: () => new Date().toISOString().split("T")[0] }),
    defineField({ name: "featured", title: "Featured Post", type: "boolean", initialValue: false }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
  preview: {
    select: { title: "title", media: "featuredImage", type: "type" },
    prepare({ title, media, type }) {
      return { title, media, subtitle: type === "case-study" ? "Case Study" : "Blog" };
    },
  },
});
