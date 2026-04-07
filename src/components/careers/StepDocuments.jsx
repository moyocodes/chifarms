import React from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function StepDocuments({ fileName, handleFile, dragOver, setDragOver, form }) {
  return (
    <div>
      <motion.div
        key="step3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-5"
      >
        <p className="text-xs text-dark-400 mb-5 italic font-serif">
          Upload your CV/résumé to complete your application.
        </p>

        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            handleFile(e.dataTransfer.files[0]);
          }}
          onClick={() => document.getElementById("cv-upload").click()}
          className={`relative rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200 ${
            dragOver
              ? "border-primary-500 bg-primary-500/5"
              : "border-primary-500/25 bg-primary-500/5"
          }`}
        >
          <input
            id="cv-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />

          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 bg-primary-500/10">
            <Upload size={20} className="text-primary-500" strokeWidth={1.8} />
          </div>

          {fileName ? (
            <p className="text-sm font-bold text-primary-500 font-heading">
              {fileName}
            </p>
          ) : (
            <>
              <p className="text-sm font-bold text-dark-900 mb-1 font-heading">
                Drop your CV here
              </p>
              <p className="text-xs text-[#aaa]">
                or click to browse — PDF, DOC, DOCX (max 5MB)
              </p>
            </>
          )}
        </div>

        {/* Summary card */}
        <div className="rounded-xl p-4 border border-primary-500/10 bg-primary-500/[0.04]">
          <p className="text-[10px] font-black tracking-widest uppercase text-primary-500 mb-3 font-heading">
            Application Summary
          </p>

          {[
            {
              label: "Name",
              value: `${form.firstName} ${form.lastName}`.trim() || "—",
            },
            { label: "Email", value: form.email || "—" },
            { label: "Location", value: form.location || "—" },
            { label: "Institution", value: form.institution || "—" },
            { label: "CV", value: fileName || "Not uploaded" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex justify-between items-center py-1.5 border-b border-primary-500/10 last:border-0"
            >
              <span className="text-xs text-[#aaa] font-heading">
                {row.label}
              </span>

              <span className="text-xs font-semibold text-[#444] text-right max-w-[200px] truncate font-heading">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}