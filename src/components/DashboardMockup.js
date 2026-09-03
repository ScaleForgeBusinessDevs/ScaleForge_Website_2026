const STATS = [
  { value: "12.4K", label: "Workflow runs" },
  { value: "98.9%", label: "Success rate" },
  { value: "1.5 Min", label: "Avg. processing time" },
  { value: "28", label: "Active workflows" },
];

const BARS = [
  22, 34, 28, 46, 38, 52, 44, 60, 50, 68, 58, 74, 64, 80, 70, 86, 76, 92, 82,
  98,
];

const ROWS = [
  {
    name: "Order sync: Shopify",
    status: "Active",
    time: "2 mins ago",
    tone: "amber",
  },
  {
    name: "Email campaign: Q3 launch",
    status: "Completed",
    time: "18 mins ago",
    tone: "green",
  },
  {
    name: "Invoice reconciliation",
    status: "Active",
    time: "1 hour ago",
    tone: "amber",
  },
  {
    name: "Report generation: Weekly",
    status: "Completed",
    time: "3 hours ago",
    tone: "green",
  },
];

export default function DashboardMockup({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101013] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-[12px] text-white/35">
          Workflow overview
        </span>
        <div className="ml-auto flex items-center gap-2">
          <span className="h-6 w-6 rounded-md border border-white/10 bg-white/[0.03]" />
          <span className="h-6 w-6 rounded-md border border-white/10 bg-white/[0.03]" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-white/[0.05] sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-[#101013] p-5">
            <p className="text-[20px] font-semibold tracking-[-0.02em] text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-[12px] text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/[0.05] lg:grid-cols-[1.3fr_1fr]">
        <div className="bg-[#101013] p-6">
          <p className="text-[12px] text-white/40">
            Workflow runs · last 20 days
          </p>
          <div className="mt-5 flex h-32 items-end gap-1.5">
            {BARS.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-white/10 to-white/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3 bg-[#101013] p-6">
          <p className="text-[12px] text-white/40">Recent activity</p>
          {ROWS.map((row) => (
            <div key={row.name} className="flex items-center gap-3">
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  row.tone === "amber" ? "bg-[#e8633a]" : "bg-[#6fcf8e]"
                }`}
              />

              <span className="flex-1 truncate text-[12.5px] text-white/65">
                {row.name}
              </span>
              <span className="hidden shrink-0 text-[11.5px] text-white/35 sm:inline">
                {row.status}
              </span>
              <span className="shrink-0 text-[11.5px] text-white/30">
                {row.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
