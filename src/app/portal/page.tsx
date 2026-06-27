"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";

export default function PortalLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  // If already logged in, redirect immediately
  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (profile) {
          if (profile.role === "ceo") {
            router.replace("/portal/ceo");
          } else if (profile.role === "admin") {
            router.replace("/portal/admin");
          } else {
            router.replace("/portal/employee");
          }
        } else {
          // Break the infinite loop if profile is missing
          await supabase.auth.signOut();
          setError("Account setup incomplete: No profile found. Please contact an admin.");
          setChecking(false);
        }
      } else {
        setChecking(false);
      }
    })();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError || !data.session) {
      setError(authError?.message ?? "Login failed.");
      setLoading(false);
      return;
    }
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.session.user.id)
      .single();

    if (profile) {
      if (profile.role === "ceo") {
        router.replace("/portal/ceo");
      } else if (profile.role === "admin") {
        router.replace("/portal/admin");
      } else {
        router.replace("/portal/employee");
      }
    } else {
      await supabase.auth.signOut();
      setError("Account setup incomplete: No profile found.");
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="animate-spin text-orange-500" size={32} />
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full flex bg-white text-black overflow-hidden font-sans">
      {/* Left Side - Image Placeholder */}
      <div className="relative hidden lg:flex w-1/2 bg-gray-100 flex-col justify-between p-12 overflow-hidden">
        {/* Image Placeholder */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="/Assets/favicon_SF.png" alt="" className="h-5 w-5 object-contain" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">ScaleForge</span>
        </div>

        <div className="relative z-10 text-white pb-8">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Manage your workspace</h2>
          <p className="text-white/80 text-sm max-w-sm">
            Streamline operations, track analytics, and optimize your workflows in just a few clicks.
          </p>
          {/* Slider dots mockup */}
          <div className="flex gap-2 mt-8">
            <div className="w-8 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-24 relative bg-white">

        <div className="absolute top-8 right-8 hidden lg:block">
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Sign in
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-[#0A0A0B] tracking-tight mb-2">Welcome Back to ScaleForge!</h1>
          <p className="text-[#6B7280] text-sm mb-8">Sign in your account</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#374151]">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="YourEmail@gmail.com"
                className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm text-black placeholder:text-[#9CA3AF] outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#374151]">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 pr-12 text-sm text-black placeholder:text-[#9CA3AF] outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[#D1D5DB] text-black focus:ring-black accent-black cursor-pointer" />
                <span className="text-sm text-[#4B5563]">Remember Me</span>
              </label>
              <button type="button" className="text-sm text-[#9CA3AF] hover:text-[#374151] hover:underline transition-colors">
                Forgot Password?
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-black text-white font-medium rounded-xl py-3.5 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-md"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : null}
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

        </motion.div>
      </div>
    </main>
  );
}
