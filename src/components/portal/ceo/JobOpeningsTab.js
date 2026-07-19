"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Briefcase } from "lucide-react";

export default function JobOpeningsTab({ addToast }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCustomDept, setIsCustomDept] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "",
    requirements: "", // Comma-separated or newline
    isActive: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requirementsList = formData.requirements
        .split("\n")
        .map((r) => r.trim())
        .filter(Boolean);

      const res = await fetch("/api/sanity/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          requirements: requirementsList,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to create job opening");
      }

      addToast("success", "Job opening created successfully!");

      // Reset form
      setFormData({
        title: "",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "",
        requirements: "",
        isActive: true,
      });
    } catch (error) {
      addToast(
        "error",
        error.message || "Failed to create job. Did you add SANITY_API_TOKEN?",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#111] border border-white/10 rounded-3xl p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
            <Briefcase size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Create Job Opening
            </h2>
            <p className="text-white/40 text-sm">
              Publish new roles directly to the careers page.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Job Title
              </label>
              <input
                required
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="e.g. Senior Frontend Engineer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
                  Department
                </label>
                <button
                  type="button"
                  onClick={() => setIsCustomDept(!isCustomDept)}
                  className="text-[10px] text-yellow-500 hover:text-yellow-400 font-bold uppercase tracking-wider"
                >
                  {isCustomDept ? "Choose Existing" : "+ New Department"}
                </button>
              </div>

              {isCustomDept ? (
                <input
                  required
                  type="text"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Enter new department name"
                />
              ) : (
                <select
                  required
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Operations">Management / Operations</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Location
              </label>
              <input
                required
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="e.g. Remote, Karachi"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Type
              </label>
              <select
                required
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Description
              </label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                placeholder="Brief description of the role..."
              />
            </div>

            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Requirements (One per line)
              </label>
              <textarea
                required
                rows={4}
                value={formData.requirements}
                onChange={(e) =>
                  setFormData({ ...formData, requirements: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                placeholder="3+ years of React experience&#10;Strong understanding of UI/UX&#10;Excellent communication skills"
              />
            </div>

            <div className="col-span-1 md:col-span-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, isActive: !formData.isActive })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  formData.isActive ? "bg-yellow-500" : "bg-white/20"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData.isActive ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm text-white/70">
                Make this job visible immediately
              </span>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-white/10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-black font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-2 transition-colors"
            >
              {isSubmitting ? (
                "Publishing..."
              ) : (
                <>
                  <Plus size={16} /> Publish Job Opening
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
