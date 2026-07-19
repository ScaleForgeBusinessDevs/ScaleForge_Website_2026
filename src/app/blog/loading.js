function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101013]">
      <div className="aspect-[16/9] w-full animate-pulse bg-white/[0.06]" />
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-5 w-16 animate-pulse rounded-full bg-white/[0.07]" />
          <div className="h-4 w-24 animate-pulse rounded bg-white/[0.05]" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-white/[0.07]" />
          <div className="h-5 w-4/5 animate-pulse rounded bg-white/[0.07]" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-3.5 w-full animate-pulse rounded bg-white/[0.04]" />
          <div className="h-3.5 w-3/4 animate-pulse rounded bg-white/[0.04]" />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <div className="h-7 w-7 animate-pulse rounded-full bg-white/[0.06]" />
          <div className="h-3.5 w-28 animate-pulse rounded bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}

export default function BlogLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 lg:px-10 lg:pt-28">
          <div className="max-w-2xl space-y-4">
            <div className="h-4 w-20 animate-pulse rounded-full bg-white/[0.07]" />
            <div className="space-y-3">
              <div className="h-10 w-3/4 animate-pulse rounded bg-white/[0.08]" />
              <div className="h-10 w-1/2 animate-pulse rounded bg-white/[0.08]" />
            </div>
            <div className="space-y-2 pt-2">
              <div className="h-4 w-full animate-pulse rounded bg-white/[0.05]" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar skeleton */}
      <div className="sticky top-[64px] z-40 border-b border-white/[0.06] bg-[#08090a]/95 px-6 py-3 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2">
          {[80, 56, 96, 72].map((w) => (
            <div
              key={w}
              className="h-8 animate-pulse rounded-full bg-white/[0.06]"
              style={{ width: `${w}px` }}
            />
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <section className="bg-[#08080a] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Featured post skeleton */}
          <div className="mb-10 overflow-hidden rounded-3xl border border-white/[0.07] bg-[#101013]">
            <div className="aspect-[16/7] w-full animate-pulse bg-white/[0.06]" />
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="h-5 w-20 animate-pulse rounded-full bg-white/[0.07]" />
                <div className="h-4 w-32 animate-pulse rounded bg-white/[0.05]" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-7 w-2/3 animate-pulse rounded bg-white/[0.08]" />
                <div className="h-7 w-1/2 animate-pulse rounded bg-white/[0.08]" />
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-white/[0.04]" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-white/[0.04]" />
              </div>
              <div className="mt-6 h-4 w-36 animate-pulse rounded bg-white/[0.05]" />
            </div>
          </div>

          {/* Card grid skeleton */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
