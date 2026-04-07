import React from "react";
import { motion } from "framer-motion";

export default function StepAcademic({ form, handleChange }) {
  return (
    <div>
      <motion.div
        key="step2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <p className="text-xs text-dark-400 mb-5 italic font-serif">
          Share your academic background and qualifications.
        </p>

        <div>
          <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
            Degree / Qualification
          </label>
          <select
            name="degree"
            value={form.degree}
            onChange={handleChange}
            className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border cursor-pointer focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
          >
            <option value="">Select your degree</option>
            <option>B.Sc</option>
            <option>B.Eng</option>
            <option>B.Tech</option>
            <option>B.A</option>
            <option>HND</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
            Field of Study
          </label>
          <select
            name="fieldOfStudy"
            onChange={handleChange}
            className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border cursor-pointer focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
          >
            <option value="">Select your field</option>
            <option>Food Science / Agriculture</option>
            <option>Microbiology</option>
            <option>Marketing / Business Administration</option>
            <option>Finance / Accounting</option>
            <option>Computer Science / IT</option>
            <option>Engineering (Mechanical/Civil/Electrical)</option>
            <option>Other related field</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
            Institution
          </label>
          <input
            name="institution"
            value={form.institution}
            onChange={handleChange}
            placeholder="University of Ibadan"
            className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border placeholder:text-[#bbb] focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
              Graduation Year
            </label>
            <select
              name="graduationYear"
              value={form.graduationYear}
              onChange={handleChange}
              className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border cursor-pointer focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
            >
              <option value="">Year</option>
              {[2024, 2023, 2022, 2021, 2020].map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
              Class of Degree
            </label>
            <select
              onChange={handleChange}
              className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border cursor-pointer focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
            >
              <option value="">Select</option>
              <option>First Class</option>
              <option>Second Class Upper</option>
              <option>Second Class Lower</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold font-heading text-dark-500 mb-[5px] tracking-[0.04em] uppercase">
            Why Chi Farms?
          </label>
          <textarea
            name="whyUs"
            value={form.whyUs}
            onChange={handleChange}
            placeholder="Tell us why you want to join Chi Farms and what you'll bring to the team..."
            className="w-full px-[14px] py-[10px] border border-primary-500/20 rounded-[10px] text-[13px] font-heading text-dark-900 bg-white outline-none transition-all duration-200 box-border placeholder:text-[#bbb] min-h-[100px] resize-y focus:border-primary-500 focus:ring-0 focus:shadow-[0_0_0_3px_rgba(31,143,99,0.1)]"
          />
        </div>
      </motion.div>
    </div>
  );
}