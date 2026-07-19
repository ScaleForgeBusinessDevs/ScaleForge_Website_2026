import { sanityClient } from "@/lib/sanity/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

    // List every unique _type in the dataset
    const types = await sanityClient.fetch(`array::unique(*[]._type)`);

    // Grab raw docs of each non-system type — show ALL keys so we can map field names
    const samples = {};
    for (const t of types) {
      if (t.startsWith("system.") || t.startsWith("sanity.")) continue;
      samples[t] = await sanityClient.fetch(`*[_type == $t][0..4]`, { t });
    }

    // Specifically look for any document that might be a blog/post regardless of type name
    const allDocs = await sanityClient.fetch(
      `*[!(_type match "system.*") && !(_type match "sanity.*")][0..9]`,
    );

    return NextResponse.json(
      { projectId, dataset, types, samples, allDocs },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: String(err),
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      },
      { status: 500 },
    );
  }
}
