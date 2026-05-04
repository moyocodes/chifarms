import React from "react";
import { motion } from "framer-motion";

export default function StepPersonal({ form, handleChange }) {
  return (
    <div>
      <motion.div
        key="step1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <p className="text-xs text-dark-400 mb-5 italic font-serif">
          Tell us a bit about yourself to get started.
        </p>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
              First Name
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Adebayo"
              className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border placeholder:text-[#bbb] focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
              Last Name
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Okonkwo"
              className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border placeholder:text-[#bbb] focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border placeholder:text-[#bbb] focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 800 000 0000"
            className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border placeholder:text-[#bbb] focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
            Preferred Location
          </label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border cursor-pointer focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
          >
            <option value="">Select a location</option>
            <option>Lagos</option>
            <option>Ibadan</option>
            <option>Ogun State</option>
            <option>Open to any location</option>
          </select>
        </div>
      </motion.div>
    </div>
  );
}