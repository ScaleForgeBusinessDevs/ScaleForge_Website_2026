"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Profile } from "@/lib/supabase";
import PortalNav from "@/components/portal/PortalNav";
import Toast, { useToast } from "@/components/portal/Toast";
import CeoDashboardTab from "@/components/portal/ceo/DashboardTab";
import CeoAnalyticsTab from "@/components/portal/ceo/AnalyticsTab";
import CeoTransactionsTab from "@/components/portal/ceo/TransactionsTab";
import CeoInvoicesTab from "@/components/portal/ceo/InvoicesTab";
import CeoPaymentPlansTab from "@/components/portal/ceo/PaymentPlansTab";
import CeoSalariesTab from "@/components/portal/ceo/SalariesTab";
import CeoJobOpeningsTab from "@/components/portal/ceo/JobOpeningsTab";
import CeoSettingsTab from "@/components/portal/ceo/SettingsTab";
import OnboardingTab from "@/components/portal/admin/OnboardingTab";
import { LayoutDashboard, BarChart3, ArrowLeftRight, FileText, Loader2, CreditCard, Users, Settings, Briefcase, UserPlus, Search, Bell, LogOut, Hexagon } from "lucide-react";

const TAB_GROUPS = [
  {
    title: "MAIN",
    items: [
      { id: "dashboard", label: "Overview", icon: LayoutDashboard },
      { id: "transactions", label: "Transactions", icon: ArrowLeftRight },
      { id: "analytics", label: "Analytics", icon: BarChart3 },
    ]
  },
  {
    title: "MONEY CONTROL",
    items: [
      { id: "invoices", label: "Invoices", icon: FileText },
      { id: "payment-plans", label: "Payment Plans", icon: CreditCard },
      { id: "salaries", label: "Salaries", icon: Users },
    ]
  },
  {
    title: "OTHERS",
    items: [
      { id: "job-openings", label: "Jobs", icon: Briefcase },
      { id: "settings", label: "Settings", icon: Settings },
      { id: "onboarding", label: "Onboarding", icon: UserPlus },
    ]
  }
];

export default function CeoPortal() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [globalCurrency, setGlobalCurrency] = useState<"USD" | "PKR">("USD");
  const [rates, setRates] = useState<Record<string, number>>({ USD: 278.5, EUR: 300.2, GBP: 350 });
  const [loading, setLoading] = useState(true);
  const { toasts, add: addToast, remove } = useToast();

  const loadRates = useCallback(async () => {
    const { data } = await supabase.from("currency_rates").select("*");
    if (data && data.length > 0) {
      const rMap: Record<string, number> = { USD: 278.5, EUR: 300.2, GBP: 350 };
      data.forEach((r: { currency: string; to_pkr_rate: number }) => { rMap[r.currency] = r.to_pkr_rate; });
      setRates(rMap);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.replace("/portal"); return; }

      const { data: prof } = await supabase
        .from("profiles").select("*").eq("id", session.user.id).single();

      if (!prof) {
        await supabase.auth.signOut();
        router.replace("/portal");
        return;
      }
      if (prof.role !== "ceo") {
        router.replace(prof.role === "admin" ? "/portal/admin" : "/portal/employee");
        return;
      }
      setProfile(prof);
      await loadRates();
      setLoading(false);
    })();
  }, [router, loadRates]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/portal");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F5F7] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-green-600" size={32} />
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Loading Workspace</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F5F7] text-[#476fc6] flex font-sans selection:bg-green-500/20">

      {/* Sidebar */}
      <aside className="w-[260px] bg-[#F4F5F7] border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="p-8 pb-6 flex items-center gap-3">
          <Hexagon size={28} className="text-green-600 fill-green-600" />
          <span className="font-bold text-lg tracking-tight text-gray-900">SCALE FORGE</span>
        </div>

        <nav className="flex-1 px-4 space-y-6 mt-2">
          {TAB_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.items.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${activeTab === tab.id
                      ? "bg-[#111827] text-white shadow-lg shadow-gray-900/10"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
                      }`}
                  >
                    <tab.icon size={18} className={activeTab === tab.id ? "text-green-400" : "opacity-70"} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-gray-200/50 space-y-2">
          {/* Currency Toggle */}
          <div className="bg-white border border-gray-200 rounded-2xl p-1 flex shadow-sm">
            {(["USD", "PKR"] as const).map(c => (
              <button
                key={c}
                onClick={() => setGlobalCurrency(c)}
                className={`flex-1 py-2 text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all ${globalCurrency === c ? "bg-green-50 text-green-700" : "text-gray-400 hover:text-gray-700"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={18} className="opacity-70" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 pl-[260px] flex flex-col min-h-screen">

        {/* Header */}
        <header className="h-24 px-10 flex items-center justify-between border-b border-gray-200/50 bg-[#F4F5F7] sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-gray-500 font-bold text-lg">
              {profile!.full_name.charAt(0)}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                Welcome, {profile!.full_name.split(" ")[0]} 👋
              </h1>
              <p className="text-sm text-gray-500">Here is your financial overview for today</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors">
              <Search size={20} />
            </button>
            <button className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
          </div>
        </header>

        {/* Tab Content */}
        <div className="p-8 max-w-[1400px] w-full mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "dashboard" && <CeoDashboardTab addToast={addToast} globalCurrency={globalCurrency} />}
            {activeTab === "payment-plans" && <CeoPaymentPlansTab addToast={addToast} globalCurrency={globalCurrency} rates={rates} />}
            {activeTab === "transactions" && <CeoTransactionsTab addToast={addToast} globalCurrency={globalCurrency} rates={rates} />}
            {activeTab === "invoices" && <CeoInvoicesTab addToast={addToast} globalCurrency={globalCurrency} rates={rates} />}
            {activeTab === "salaries" && <CeoSalariesTab addToast={addToast} globalCurrency={globalCurrency} rates={rates} />}
            {activeTab === "job-openings" && <CeoJobOpeningsTab addToast={addToast} />}
            {activeTab === "analytics" && <CeoAnalyticsTab addToast={addToast} globalCurrency={globalCurrency} rates={rates} />}
            {activeTab === "settings" && <CeoSettingsTab addToast={addToast} onRatesSaved={loadRates} />}
            {activeTab === "onboarding" && <OnboardingTab addToast={addToast} />}
          </motion.div>
        </div>

      </div>

      <Toast toasts={toasts} remove={remove} />
    </main>
  );
}
