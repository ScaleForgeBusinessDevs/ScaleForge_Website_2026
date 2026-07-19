export const personSchema = {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 48 },
    },
    {
      name: "title",
      title: "Title / Role",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "linkedIn",
      title: "LinkedIn URL",
      type: "url",
    },
    {
      name: "twitter",
      title: "X / Twitter URL",
      type: "url",
    },
  ],
};
