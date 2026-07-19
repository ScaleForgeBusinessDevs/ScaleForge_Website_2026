import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postSchema } from "./src/lib/sanity/schema/post";
import { topicSchema } from "./src/lib/sanity/schema/topic";
import { personSchema } from "./src/lib/sanity/schema/person";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "scaleforge-studio",
  title: "ScaleForge CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [postSchema, topicSchema, personSchema],
  },
});
