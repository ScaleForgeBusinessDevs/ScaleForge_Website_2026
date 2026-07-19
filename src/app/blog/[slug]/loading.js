export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-[#08090a]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#08090a] px-6 pb-12 pt-32 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2">
            <div className="h-3.5 w-10 animate-pulse rounded bg-white/[0.06]" />
            <div className="h-3 w-1 animate-pulse rounded bg-white/[0.04]" />
            <div className="h-3.5 w-32 animate-pulse rounded bg-white/[0.06]" />
          </div>

          {/* Category + date row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-6 w-16 animate-pulse rounded-full bg-white/[0.07]" />
            <div className="h-4 w-36 animate-pulse rounded bg-white/[0.05]" />
          </div>

          {/* Title */}
          <div className="mt-5 space-y-3">
            <div className="h-10 w-full animate-pulse rounded bg-white/[0.09]" />
            <div className="h-10 w-4/5 animate-pulse rounded bg-white/[0.09]" />
            <div className="h-10 w-3/5 animate-pulse rounded bg-white/[0.09]" />
          </div>

          {/* Excerpt */}
          <div className="mt-5 space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-white/[0.05]" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-white/[0.05]" />
          </div>

          {/* Author row */}
          <div className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-6">
            <div className="h-10 w-10 animate-pulse rounded-full bg-white/[0.07]" />
            <div className="space-y-1.5">
              <div className="h-4 w-28 animate-pulse rounded bg-white/[0.07]" />
              <div className="h-3 w-20 animate-pulse rounded bg-white/[0.04]" />
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="aspect-[16/9] w-full animate-pulse rounded-2xl bg-white/[0.06]" />
      </div>

      {/* Article body */}
      <section className="mx-auto max-w-3xl px-6 py-14 lg:px-10">
        <div className="space-y-3">
          {[
            100, 95, 88, 100, 72, 100, 91, 80, 100, 85, 60, 100, 94, 78, 100,
            50,
          ].map((w, i) => (
            <div
              key={i}
              className="h-4 animate-pulse rounded bg-white/[0.05]"
              style={{ width: `${w}%` }}
            />
          ))}
          {/* Sub-heading break */}
          <div className="pt-6">
            <div className="h-6 w-2/5 animate-pulse rounded bg-white/[0.07]" />
          </div>
          {[100, 90, 83, 100, 68, 95, 77, 100, 88, 55].map((w, i) => (
            <div
              key={`b-${i}`}
              className="h-4 animate-pulse rounded bg-white/[0.05]"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
