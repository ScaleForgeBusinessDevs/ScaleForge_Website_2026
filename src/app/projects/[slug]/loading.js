export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-[#08090a]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#08090a] px-6 pb-0 pt-32 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-[1440px]">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2">
            <div className="h-3.5 w-14 animate-pulse rounded bg-white/[0.06]" />
            <div className="h-3 w-1 animate-pulse rounded bg-white/[0.04]" />
            <div className="h-3.5 w-28 animate-pulse rounded bg-white/[0.06]" />
          </div>

          {/* Category + client */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-6 w-28 animate-pulse rounded-full bg-white/[0.07]" />
            <div className="h-4 w-24 animate-pulse rounded bg-white/[0.05]" />
          </div>

          {/* Title */}
          <div className="mt-5 space-y-3">
            <div className="h-11 w-3/4 animate-pulse rounded bg-white/[0.09]" />
            <div className="h-11 w-1/2 animate-pulse rounded bg-white/[0.09]" />
          </div>

          {/* Excerpt */}
          <div className="mt-5 space-y-2">
            <div className="h-4 w-full max-w-2xl animate-pulse rounded bg-white/[0.05]" />
            <div className="h-4 w-3/4 max-w-xl animate-pulse rounded bg-white/[0.05]" />
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="mx-auto mt-10 max-w-[1440px] px-6 lg:px-10">
        <div className="aspect-[21/9] w-full animate-pulse rounded-2xl bg-white/[0.06]" />
      </div>

      {/* Metrics strip */}
      <div className="border-y border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-10 px-6 lg:px-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="h-8 w-20 animate-pulse rounded bg-white/[0.07]" />
              <div className="h-3 w-16 animate-pulse rounded bg-white/[0.04]" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content + sidebar */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          {/* Body */}
          <div className="space-y-3">
            <div className="h-6 w-2/5 animate-pulse rounded bg-white/[0.07]" />
            {[100, 93, 86, 100, 70, 100, 88, 75, 100, 60].map((w, i) => (
              <div
                key={i}
                className="h-4 animate-pulse rounded bg-white/[0.05]"
                style={{ width: `${w}%` }}
              />
            ))}
            <div className="pt-6">
              <div className="h-6 w-1/3 animate-pulse rounded bg-white/[0.07]" />
            </div>
            {[100, 90, 82, 100, 65, 95, 78, 100, 55].map((w, i) => (
              <div
                key={`b${i}`}
                className="h-4 animate-pulse rounded bg-white/[0.05]"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/[0.06] bg-[#101013] p-6">
              <div className="h-5 w-24 animate-pulse rounded bg-white/[0.07]" />
              <div className="mt-4 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 w-16 animate-pulse rounded bg-white/[0.05]" />
                    <div className="h-4 w-24 animate-pulse rounded bg-white/[0.05]" />
                  </div>
                ))}
              </div>
              <div className="mt-6 h-10 w-full animate-pulse rounded-xl bg-white/[0.07]" />
            </div>

            {/* Gallery skeleton */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#101013] p-5">
              <div className="h-5 w-20 animate-pulse rounded bg-white/[0.07]" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square w-full animate-pulse rounded-lg bg-white/[0.06]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
