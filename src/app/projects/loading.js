function SkeletonProjectCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101013]">
      <div className="aspect-[4/3] w-full animate-pulse bg-white/[0.06]" />
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="h-5 w-24 animate-pulse rounded-full bg-white/[0.07]" />
          <div className="h-4 w-20 animate-pulse rounded bg-white/[0.04]" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-5 w-4/5 animate-pulse rounded bg-white/[0.07]" />
          <div className="h-5 w-3/5 animate-pulse rounded bg-white/[0.07]" />
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-3.5 w-full animate-pulse rounded bg-white/[0.04]" />
          <div className="h-3.5 w-2/3 animate-pulse rounded bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-[#08090a]">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 lg:px-10 lg:pt-28">
          <div className="max-w-4xl space-y-4">
            <div className="h-3.5 w-16 animate-pulse rounded-full bg-white/[0.06]" />
            <div className="space-y-3">
              <div className="h-10 w-3/4 animate-pulse rounded bg-white/[0.08]" />
              <div className="h-10 w-1/2 animate-pulse rounded bg-white/[0.08]" />
            </div>
            <div className="space-y-2 pt-1">
              <div className="h-4 w-full animate-pulse rounded bg-white/[0.05]" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar skeleton */}
      <div className="sticky top-[64px] z-40 border-b border-white/[0.06] bg-[#08090a]/95 px-6 py-3 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-2">
          {[60, 80, 110, 72, 96, 88, 104, 64].map((w, i) => (
            <div
              key={i}
              className="h-8 animate-pulse rounded-full bg-white/[0.06]"
              style={{ width: `${w}px` }}
            />
          ))}
        </div>
      </div>

      {/* Grid skeleton */}
      <section className="bg-[#08080a] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Featured banner skeleton */}
          <div className="mb-12 overflow-hidden rounded-3xl border border-white/[0.07] bg-[#101013]">
            <div className="aspect-[21/9] w-full animate-pulse bg-white/[0.06]" />
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonProjectCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
