"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users, DollarSign, Percent, BarChart3 } from "lucide-react";

interface Transaction {
  id: string; date: string; amount: number; type: "income" | "expense"; category: string; client_name?: string;
}

function fmtPct(n: number) { return `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`; }

function KpiCard({ label, value, sub, icon: Icon, positive, neutral }: {
  label: string; value: string; sub?: string; icon: React.ElementType; positive?: boolean; neutral?: boolean;
}) {
  const color = neutral ? "border-gray-200 bg-white" : positive
    ? "border-green-100 bg-green-50"
    : "border-red-100 bg-red-50";
  const textColor = neutral ? "text-gray-900" : positive ? "text-green-600" : "text-red-600";
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      className={`rounded-[24px] border p-6 shadow-sm ${color}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">{label}</p>
          <p className={`text-2xl font-bold tracking-tight ${textColor}`}>{value}</p>
          {sub && <p className="text-gray-400 text-xs mt-2">{sub}</p>}
        </div>
        <div className={`p-3 rounded-xl border ${neutral ? "bg-gray-50 border-gray-100" : positive ? "bg-green-100 border-green-200" : "bg-red-100 border-red-200"}`}>
          <Icon size={18} className={neutral ? "text-gray-500" : positive ? "text-green-600" : "text-red-600"} />
        </div>
      </div>
    </motion.div>
  );
}

function BarChart({ data, label, colorClass, fmtMoney }: { data: { label: string; value: number }[]; label: string; colorClass: string; fmtMoney: (n: number) => string }) {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <div>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">{label}</p>
      <div className="space-y-3">
        {data.map(d => (
          <div key={d.label} className="flex items-center gap-3">
            <span className="text-gray-500 text-[10px] font-bold w-20 text-right shrink-0">{d.label}</span>
            <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(d.value / max) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`h-full rounded-full ${colorClass}`}
              />
            </div>
            <span className="text-gray-700 text-xs font-mono font-bold w-20 shrink-0">{fmtMoney(d.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CeoAnalyticsTab({ addToast, globalCurrency = "USD", rates = {} }: {
  addToast: (type: "success" | "error" | "info", msg: string) => void;
  globalCurrency?: "USD" | "PKR";
  rates?: Record<string, number>;
}) {
  // Transactions stored in USD → convert for display
  const usdToPkr = rates["USD"] ?? 278.5;
  const convert = (usd: number) => globalCurrency === "PKR" ? usd * usdToPkr : usd;
  const fmtMoney = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: globalCurrency, maximumFractionDigits: 0 }).format(n);
  const [txns, setTxns] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from("transactions").select("*").order("date");
    setTxns(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  if (loading) return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 rounded-full border-2 border-green-500/30 border-t-green-500 animate-spin" /></div>;

  // ── Calculations ─────────────────────────────────────────────────────────────
  const totalRevenue = txns.filter(t => t.type === "income").reduce((s, t) => s + convert(t.amount), 0);
  const totalExpenses = txns.filter(t => t.type === "expense").reduce((s, t) => s + convert(t.amount), 0);
  const payroll = txns.filter(t => t.category === "payroll").reduce((s, t) => s + convert(t.amount), 0);
  const cogs = txns.filter(t => ["payroll", "software", "rent", "marketing"].includes(t.category)).reduce((s, t) => s + convert(t.amount), 0);
  const grossProfit = totalRevenue - cogs;
  const ebitda = grossProfit;
  const roi = totalExpenses > 0 ? ((totalRevenue - totalExpenses) / totalExpenses) * 100 : 0;
  const profitMargin = totalRevenue > 0 ? ((totalRevenue - totalExpenses) / totalRevenue) * 100 : 0;

  // Monthly revenue breakdown (last 6 months)
  const monthlyData: Record<string, { income: number; expense: number }> = {};
  txns.forEach(t => {
    const month = new Date(t.date).toLocaleDateString("en-US", { month: "short", year: "2-digit" });
    if (!monthlyData[month]) monthlyData[month] = { income: 0, expense: 0 };
    monthlyData[month][t.type] += convert(t.amount);
  });
  const months = Object.keys(monthlyData).slice(-6);
  const revenueByMonth = months.map(m => ({ label: m, value: monthlyData[m]?.income ?? 0 }));
  const expenseByMonth = months.map(m => ({ label: m, value: monthlyData[m]?.expense ?? 0 }));

  // Client revenue breakdown
  const clientRevenue: Record<string, number> = {};
  txns.filter(t => t.type === "income" && t.client_name).forEach(t => {
    clientRevenue[t.client_name!] = (clientRevenue[t.client_name!] ?? 0) + convert(t.amount);
  });
  const clientData = Object.entries(clientRevenue)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value).slice(0, 6);

  // Expense category breakdown
  const categoryExpense: Record<string, number> = {};
  txns.filter(t => t.type === "expense").forEach(t => {
    categoryExpense[t.category] = (categoryExpense[t.category] ?? 0) + convert(t.amount);
  });
  const expenseCatData = Object.entries(categoryExpense)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="space-y-8">
      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <KpiCard label="Total Revenue" value={fmtMoney(totalRevenue)} icon={DollarSign} positive neutral />
        <KpiCard label="Total Expenses" value={fmtMoney(totalExpenses)} icon={TrendingDown} positive={false} />
        <KpiCard label="ROI" value={fmtPct(roi)} icon={Percent} positive={roi >= 0} sub="Return on investment" />
        <KpiCard label="COGS" value={fmtMoney(cogs)} icon={BarChart3} positive={false} sub="Cost of goods sold" />
        <KpiCard label="EBITDA" value={fmtMoney(ebitda)} icon={TrendingUp} positive={ebitda >= 0} sub="Earnings before tax" />
        <KpiCard label="Profit Margin" value={fmtPct(profitMargin)} icon={Percent} positive={profitMargin >= 0} sub="Net margin %" />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Gross Profit</p>
          <p className={`text-3xl font-bold ${grossProfit >= 0 ? "text-green-600" : "text-red-600"}`}>{fmtMoney(grossProfit)}</p>
          <p className="text-gray-400 text-xs mt-2">Revenue minus COGS</p>
        </div>
        <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Employee Cost Ratio</p>
          <p className="text-3xl font-bold text-yellow-600">
            {totalRevenue > 0 ? `${((payroll / totalRevenue) * 100).toFixed(1)}%` : "—"}
          </p>
          <p className="text-gray-400 text-xs mt-2">Payroll as % of revenue</p>
        </div>
        <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Active Clients</p>
          <p className="text-3xl font-bold text-blue-600">{Object.keys(clientRevenue).length}</p>
          <p className="text-gray-400 text-xs mt-2">Clients with revenue recorded</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
          <BarChart data={revenueByMonth} label="Monthly Revenue" colorClass="bg-green-500" fmtMoney={fmtMoney} />
        </div>
        <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
          <BarChart data={expenseByMonth} label="Monthly Expenses" colorClass="bg-red-500" fmtMoney={fmtMoney} />
        </div>
        <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
          <BarChart data={clientData} label="Revenue by Client" colorClass="bg-yellow-500" fmtMoney={fmtMoney} />
        </div>
        <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
          <BarChart data={expenseCatData} label="Expense Breakdown by Category" colorClass="bg-orange-500" fmtMoney={fmtMoney} />
        </div>
      </div>

      {/* Cash Flow Forecast */}
      <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6">Cash Flow Forecast (Next 3 Months)</p>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map(offset => {
            const avgIncome = totalRevenue / Math.max(months.length, 1);
            const avgExpense = totalExpenses / Math.max(months.length, 1);
            const projected = (avgIncome - avgExpense) * offset;
            const mName = new Date(Date.now() + offset * 30 * 24 * 3600 * 1000).toLocaleDateString("en-US", { month: "long" });
            return (
              <div key={offset} className={`rounded-xl border p-5 ${projected >= 0 ? "border-green-100 bg-green-50" : "border-red-100 bg-red-50"}`}>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">{mName}</p>
                <p className={`text-2xl font-bold tracking-tight ${projected >= 0 ? "text-green-600" : "text-red-600"}`}>{fmtMoney(projected)}</p>
                <p className="text-gray-400 text-xs mt-2">Projected net</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

