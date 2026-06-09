import type { Rule } from "@sanity/types";

export const topicSchema = {
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 48 },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    },
  ],
};
