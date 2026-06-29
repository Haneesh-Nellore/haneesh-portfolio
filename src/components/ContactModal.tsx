"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idea: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple validation
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.firstName.length < 2) newErrors.firstName = "First name must be at least 2 characters.";
    if (formData.lastName.length < 2) newErrors.lastName = "Last name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (formData.phone.length < 7) newErrors.phone = "Please enter a valid phone number.";
    if (formData.idea.length < 10) newErrors.idea = "Please provide a bit more detail (min 10 chars).";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call to email service
    // TODO: Connect to Web3Forms or Resend API here.
    // Example for Web3Forms: 
    // await fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(e.target as HTMLFormElement) });
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto-close after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", idea: "" });
      onClose();
    }, 4000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[500px] bg-navy/80 backdrop-blur-[16px] border border-electricBlue/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12 min-h-[400px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 size={64} className="text-emerald-400 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-300">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Let&apos;s Build.</h2>
                  <p className="text-slate-400 mb-8 text-sm">Tell me about your idea, and I&apos;ll help you scale it from 0 to 1.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Access key for web3forms placeholder */}
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY_HERE" />

                    <div className="grid grid-cols-2 gap-5">
                      {/* First Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-slate-300 font-medium">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          className="w-full bg-slate-800/50 border border-electricBlue/30 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                        />
                        {errors.firstName && <span className="text-xs text-red-400">{errors.firstName}</span>}
                      </div>

                      {/* Last Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm text-slate-300 font-medium">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          className="w-full bg-slate-800/50 border border-electricBlue/30 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                        />
                        {errors.lastName && <span className="text-xs text-red-400">{errors.lastName}</span>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-slate-300 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-800/50 border border-electricBlue/30 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                      />
                      {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-slate-300 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-800/50 border border-electricBlue/30 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                      />
                      {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
                    </div>

                    {/* Idea */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-slate-300 font-medium">Idea You Want to Talk About</label>
                      <textarea
                        name="idea"
                        value={formData.idea}
                        onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                        placeholder="Tell me about your project, idea, or what you need help with..."
                        className="w-full bg-slate-800/50 border border-electricBlue/30 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all min-h-[120px] max-h-[250px] resize-y"
                      />
                      {errors.idea && <span className="text-xs text-red-400">{errors.idea}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 w-full bg-electricBlue text-navy font-bold text-[16px] py-4 px-6 rounded-lg hover:bg-[#7BC3FF] hover:shadow-[0_0_20px_rgba(99,179,237,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
