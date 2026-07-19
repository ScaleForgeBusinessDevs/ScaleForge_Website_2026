"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PiggyBank,
  BarChart3,
  Plus,
  Pencil,
  Trash2,
  X,
  Check,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  CreditCard,
  ChevronDown,
  Layers,
} from "lucide-react";

const ACCOUNT_ICON = {
  checking: DollarSign,
  savings: PiggyBank,
  investment: BarChart3,
  wallet: Wallet,
};
const ACCOUNT_COLOR = {
  checking: "text-blue-400 bg-blue-500/10",
  savings: "text-emerald-400 bg-emerald-500/10",
  investment: "text-violet-400 bg-violet-500/10",
  wallet: "text-orange-400 bg-orange-500/10",
};

export default function CeoDashboardTab({ addToast, globalCurrency }) {
  const [accounts, setAccounts] = useState([]);
  const [recentTxns, setRecentTxns] = useState([]);
  const [plans, setPlans] = useState([]);
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  const [showAddAccount, setShowAddAccount] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);
  const [form, setForm] = useState({
    name: "",
    type: "checking",
    balance: "",
    institution: "",
    currency: "USD",
  });

  // Dropdown state for periods
  const [period, setPeriod] = useState("This Month");
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const [
      { data: accs },
      { data: txns },
      { data: plns },
      { data: currRates },
    ] = await Promise.all([
      supabase.from("financial_accounts").select("*").order("created_at"),
      supabase
        .from("transactions")
        .select("*")
        .order("date", { ascending: false })
        .limit(20),
      supabase
        .from("payment_plans")
        .select("*")
        .eq("status", "active")
        .order("created_at", { ascending: false })
        .limit(4),
      supabase.from("currency_rates").select("*"),
    ]);

    setAccounts(accs ?? []);
    setRecentTxns(txns ?? []);
    setPlans(plns ?? []);

    const rMap = { USD: 278.5 }; // fallback
    currRates?.forEach((r) => {
      rMap[r.currency] = r.to_pkr_rate;
    });
    setRates(rMap);

    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const convertAmount = useCallback(
    (amount, fromCurr, toCurr) => {
      if (fromCurr === toCurr) return amount;
      // Convert to PKR first
      const fromRate =
        fromCurr === "PKR" ? 1 : rates[fromCurr] || rates["USD"] || 278.5;
      const inPkr = amount * fromRate;
      // Convert to target
      if (toCurr === "PKR") return inPkr;
      const toRate = rates[toCurr] || rates["USD"] || 278.5;
      return inPkr / toRate;
    },
    [rates],
  );

  const fmtMoney = useCallback(
    (n, forceCurrency) => {
      const c = forceCurrency || globalCurrency;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: c,
        maximumFractionDigits: 0,
      }).format(n);
    },
    [globalCurrency],
  );

  const totalBalance = useMemo(
    () =>
      accounts.reduce(
        (s, a) => s + convertAmount(a.balance, a.currency, globalCurrency),
        0,
      ),
    [accounts, globalCurrency, convertAmount],
  );
  const totalSavings = useMemo(
    () =>
      accounts
        .filter((a) => a.type === "savings")
        .reduce(
          (s, a) => s + convertAmount(a.balance, a.currency, globalCurrency),
          0,
        ),
    [accounts, globalCurrency, convertAmount],
  );
  const totalInvested = useMemo(
    () =>
      accounts
        .filter((a) => a.type === "investment")
        .reduce(
          (s, a) => s + convertAmount(a.balance, a.currency, globalCurrency),
          0,
        ),
    [accounts, globalCurrency, convertAmount],
  );

  // Transactions are implicitly treated as USD currently unless noted. We'll assume USD for simplicity here, but convert.
  const netCashFlow = useMemo(
    () =>
      recentTxns.reduce((s, t) => {
        const amt = convertAmount(t.amount, "USD", globalCurrency);
        return t.type === "income" ? s + amt : s - amt;
      }, 0),
    [recentTxns, globalCurrency, convertAmount],
  );

  const resetForm = () =>
    setForm({
      name: "",
      type: "checking",
      balance: "",
      institution: "",
      currency: globalCurrency,
    });

  const handleSaveAccount = async () => {
    if (!form.name || !form.balance) {
      addToast("error", "Name and balance are required.");
      return;
    }
    const payload = {
      name: form.name,
      type: form.type,
      balance: parseFloat(form.balance),
      institution: form.institution,
      currency: form.currency,
    };
    const { error } = editingAccount
      ? await supabase
          .from("financial_accounts")
          .update(payload)
          .eq("id", editingAccount.id)
      : await supabase.from("financial_accounts").insert(payload);
    if (error) {
      addToast("error", "Failed to save account.");
      return;
    }
    addToast("success", editingAccount ? "Account updated." : "Account added.");
    resetForm();
    setShowAddAccount(false);
    setEditingAccount(null);
    load();
  };

  const handleDeleteAccount = async (id) => {
    const { error } = await supabase
      .from("financial_accounts")
      .delete()
      .eq("id", id);
    if (error) {
      addToast("error", "Failed to delete.");
      return;
    }
    addToast("success", "Account removed.");
    load();
  };

  const openEdit = (acc) => {
    setEditingAccount(acc);
    setForm({
      name: acc.name,
      type: acc.type,
      balance: String(acc.balance),
      institution: acc.institution ?? "",
      currency: acc.currency,
    });
    setShowAddAccount(true);
  };

  // Mock graph data for Attio style
  const graphData = [
    { day: "Mon", in: 400, out: 200 },
    { day: "Tue", in: 300, out: 139 },
    { day: "Wed", in: 200, out: 800 },
    { day: "Thu", in: 278, out: 390 },
    { day: "Fri", in: 189, out: 480 },
    { day: "Sat", in: 239, out: 380 },
    { day: "Sun", in: 349, out: 430 },
  ];
  const maxVal = Math.max(...graphData.map((d) => Math.max(d.in, d.out)));

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-7 h-7 rounded-full border-2 border-yellow-500/30 border-t-yellow-400 animate-spin" />
      </div>
    );

  return (
    <div className="flex flex-col xl:flex-row gap-6 selection:bg-yellow-500/30 text-foreground">
      {/* ── Left Sidebar (Accounts & Settings) ───────────────────────── */}
      <div className="w-full xl:w-80 shrink-0 space-y-6">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xl relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[50px] pointer-events-none rounded-full" />

          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold flex items-center gap-2">
              <Layers size={16} className="opacity-40" />
              Accounts
            </h2>
            <button
              onClick={() => {
                resetForm();
                setEditingAccount(null);
                setShowAddAccount(true);
              }}
              className="w-7 h-7 rounded-lg bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 text-foreground/50 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="space-y-3 relative z-10">
            {accounts.map((acc) => {
              const Icon = ACCOUNT_ICON[acc.type] ?? Wallet;
              return (
                <div
                  key={acc.id}
                  className="group relative rounded-xl border border-border bg-foreground/[0.02] p-3.5 hover:bg-foreground/[0.05] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${ACCOUNT_COLOR[acc.type]}`}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate leading-tight">
                        {acc.name}
                      </p>
                      <p className="opacity-30 text-[10px] truncate">
                        {acc.type} {acc.currency}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <button
                        onClick={() => openEdit(acc)}
                        className="p-1 hover:text-foreground opacity-40"
                      >
                        <Pencil size={12} />
                      </button>
                      <button
                        onClick={() => handleDeleteAccount(acc.id)}
                        className="p-1 hover:text-red-500 opacity-40"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="opacity-30 text-[9px] uppercase tracking-widest font-bold mb-0.5">
                        Balance
                      </p>
                      <p className="font-bold font-mono text-sm">
                        {fmtMoney(
                          convertAmount(
                            acc.balance,
                            acc.currency,
                            globalCurrency,
                          ),
                        )}
                      </p>
                    </div>
                    {acc.currency !== globalCurrency && (
                      <p className="opacity-20 text-[9px] font-mono">
                        ({fmtMoney(acc.balance, acc.currency)})
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main Dashboard Area ───────────────────────────────────────── */}
      <div className="flex-1 space-y-6 min-w-0">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Dark Card (Net Worth) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[24px] bg-[#111827] text-white p-6 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-gray-900/10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] pointer-events-none rounded-full" />
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1 flex items-center gap-2">
                Total Balance <DollarSign size={14} className="opacity-50" />
              </p>
              <p className="text-4xl font-bold tracking-tight mt-2">
                {fmtMoney(totalBalance)}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-xs font-bold">
                <TrendingUp size={12} /> +2.4%
              </span>
              <span className="text-gray-500 text-xs">vs last month</span>
            </div>
          </motion.div>

          {/* Three Light Cards */}
          {[
            {
              label: "Net Cash Flow",
              value: netCashFlow,
              icon: Activity,
              color: netCashFlow >= 0 ? "text-green-600" : "text-red-600",
              trend: netCashFlow >= 0 ? "+5.1%" : "-2.1%",
              tColor:
                netCashFlow >= 0
                  ? "text-green-600 bg-green-50"
                  : "text-red-600 bg-red-50",
              tIcon: netCashFlow >= 0 ? TrendingUp : TrendingDown,
            },
            {
              label: "Total Savings",
              value: totalSavings,
              icon: PiggyBank,
              color: "text-gray-900",
              trend: "+3.2%",
              tColor: "text-green-600 bg-green-50",
              tIcon: TrendingUp,
            },
            {
              label: "Total Invested",
              value: totalInvested,
              icon: BarChart3,
              color: "text-gray-900",
              trend: "+8.4%",
              tColor: "text-green-600 bg-green-50",
              tIcon: TrendingUp,
            },
          ].map(
            (
              { label, value, icon: Icon, color, trend, tColor, tIcon: TIcon },
              idx,
            ) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className="rounded-[24px] bg-white border border-gray-100 p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <p className="text-gray-500 text-sm font-medium flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
                      <Icon size={12} className="text-gray-400" />
                    </span>
                    {label}
                  </p>
                  <p className={`text-2xl font-bold tracking-tight ${color}`}>
                    {fmtMoney(value)}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${tColor}`}
                  >
                    <TIcon size={12} /> {trend}
                  </span>
                  <span className="text-gray-400 text-xs">vs last month</span>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Row 2: Chart & Accounts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 rounded-[24px] bg-white border border-gray-100 p-8 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Spending Overview
                </h3>
                <p className="text-gray-400 text-sm">
                  Income vs Expenses tracking
                </p>
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-700"
                >
                  {period} <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {showPeriodDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute right-0 mt-2 w-48 rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-900/10 z-20 py-2 overflow-hidden"
                    >
                      {["This Month", "Last 3 Months", "This Year"].map((p) => (
                        <button
                          key={p}
                          onClick={() => {
                            setPeriod(p);
                            setShowPeriodDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${period === p ? "bg-green-50 text-green-700 font-bold" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}
                        >
                          {p}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex-1 flex items-end justify-between gap-4 px-2 min-h-[200px]">
              {graphData.map((d, i) => {
                const inPct = Math.max(5, (d.in / maxVal) * 100);
                const outPct = Math.max(5, (d.out / maxVal) * 100);
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-4 flex-1 group"
                  >
                    <div className="flex items-end justify-center gap-2 w-full h-full relative">
                      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-mono flex flex-col items-center pointer-events-none z-10 shadow-xl">
                        <span className="text-green-400 font-bold">
                          +{d.in}
                        </span>
                        <span className="text-red-400 font-bold">-{d.out}</span>
                      </div>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${inPct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        className="w-full max-w-[16px] bg-gray-900 rounded-t-md"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${outPct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 + 0.1 }}
                        className="w-full max-w-[16px] bg-green-500 rounded-t-md"
                      />
                    </div>
                    <span className="text-gray-400 text-xs font-semibold">
                      {d.day}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Chart Legend */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-900" />
                <span className="text-sm font-semibold text-gray-600">
                  Income
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-gray-600">
                  Expenses
                </span>
              </div>
            </div>
          </div>

          {/* Accounts List */}
          <div className="lg:col-span-1 rounded-[24px] bg-white border border-gray-100 p-6 shadow-sm flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-gray-900 text-lg">Accounts</h2>
              <button
                onClick={() => {
                  resetForm();
                  setEditingAccount(null);
                  setShowAddAccount(true);
                }}
                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 text-gray-500 transition-colors shadow-sm border border-gray-200"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {accounts.map((acc) => {
                const Icon = ACCOUNT_ICON[acc.type] ?? Wallet;
                return (
                  <div
                    key={acc.id}
                    className="group relative rounded-2xl border border-gray-100 bg-gray-50/50 p-4 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 text-gray-700">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate leading-tight">
                          {acc.name}
                        </p>
                        <p className="text-gray-400 text-xs truncate capitalize">
                          {acc.type} • {acc.currency}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-white border border-gray-100 rounded-lg p-1 shadow-sm">
                        <button
                          onClick={() => openEdit(acc)}
                          className="p-1.5 hover:text-blue-600 text-gray-400"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteAccount(acc.id)}
                          className="p-1.5 hover:text-red-600 text-gray-400"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">
                          Balance
                        </p>
                        <p className="font-bold font-mono text-base text-gray-900">
                          {fmtMoney(
                            convertAmount(
                              acc.balance,
                              acc.currency,
                              globalCurrency,
                            ),
                          )}
                        </p>
                      </div>
                      {acc.currency !== globalCurrency && (
                        <p className="text-gray-400 text-xs font-mono bg-white px-2 py-0.5 rounded border border-gray-100">
                          {fmtMoney(acc.balance, acc.currency)}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 3: Inflows & Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scheduled Inflows */}
          <div className="lg:col-span-2 rounded-[24px] bg-white border border-gray-100 p-6 shadow-sm flex flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                Scheduled Inflows
              </h3>
              <button className="text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
              {plans.length === 0 ? (
                <p className="text-gray-400 text-sm col-span-full text-center py-8">
                  No active payment plans.
                </p>
              ) : (
                plans.map((p) => {
                  const pct = Math.round(
                    (p.installments_paid / p.total_installments) * 100,
                  );
                  const remPkr = convertAmount(
                    p.remaining_balance,
                    p.currency || "USD",
                    globalCurrency,
                  );
                  return (
                    <div
                      key={p.id}
                      className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-4">
                          <CreditCard size={16} className="text-gray-700" />
                        </div>
                        <p className="text-gray-900 text-base font-bold mb-1">
                          {p.client_name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {p.project_name}
                        </p>
                      </div>
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-gray-900 font-bold font-mono">
                            {fmtMoney(remPkr)}
                          </p>
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            Remaining
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            className="h-full bg-gray-900 rounded-full"
                          />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-gray-400">
                          <span>{pct}% Collected</span>
                          <span>
                            {p.total_installments - p.installments_paid}x{" "}
                            {p.frequency}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Recent Ledger */}
          <div className="lg:col-span-1 rounded-[24px] bg-white border border-gray-100 p-6 shadow-sm flex flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                Recent Transactions
              </h3>
              <button className="text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors">
                View All
              </button>
            </div>
            <div className="flex-1 space-y-4">
              {recentTxns.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-8">
                  No transactions found.
                </p>
              ) : (
                recentTxns.slice(0, 5).map((t) => {
                  const amt = convertAmount(t.amount, "USD", globalCurrency);
                  return (
                    <div
                      key={t.id}
                      className="flex items-center justify-between group py-2 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100 ${t.type === "income" ? "bg-green-50 text-green-600" : "bg-white text-gray-700"}`}
                        >
                          {t.type === "income" ? (
                            <ArrowUpRight size={16} />
                          ) : (
                            <ArrowDownRight size={16} />
                          )}
                        </div>
                        <div>
                          <p className="text-gray-900 text-sm font-bold">
                            {t.description}
                          </p>
                          <p className="text-gray-400 text-xs mt-0.5">
                            {new Date(t.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}{" "}
                            · {t.category}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`text-base font-bold font-mono ${t.type === "income" ? "text-green-600" : "text-gray-900"}`}
                      >
                        {t.type === "income" ? "+" : "−"}
                        {fmtMoney(amt)}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Add / Edit Account Modal ────────────────────────────────────── */}
      <AnimatePresence>
        {showAddAccount && (
          <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md rounded-[24px] border border-gray-100 bg-white p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-gray-900 text-xl">
                  {editingAccount ? "Edit Account" : "Add Account"}
                </h3>
                <button
                  onClick={() => {
                    setShowAddAccount(false);
                    resetForm();
                    setEditingAccount(null);
                  }}
                  className="text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-5">
                {[
                  {
                    label: "Account Name",
                    key: "name",
                    type: "text",
                    placeholder: "e.g. Primary Checking",
                  },
                  {
                    label: `Balance (${globalCurrency})`,
                    key: "balance",
                    type: "number",
                    placeholder: "0",
                  },
                  {
                    label: "Institution (Optional)",
                    key: "institution",
                    type: "text",
                    placeholder: "e.g. Chase Bank",
                  },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [key]: e.target.value }))
                      }
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-2">
                      Type
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, type: e.target.value }))
                      }
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all appearance-none"
                    >
                      {["checking", "savings", "investment", "wallet"].map(
                        (t) => (
                          <option key={t} value={t}>
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-2">
                      Currency
                    </label>
                    <select
                      value={form.currency}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, currency: e.target.value }))
                      }
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all appearance-none"
                    >
                      {["USD", "PKR", "EUR", "GBP"].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleSaveAccount}
                  className="w-full flex items-center justify-center gap-2 py-4 mt-6 rounded-xl bg-[#111827] text-white font-bold hover:bg-gray-800 transition-all shadow-md shadow-gray-900/10"
                >
                  <Check size={18} />{" "}
                  {editingAccount ? "Save Changes" : "Add Account"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
