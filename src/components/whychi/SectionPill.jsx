import React from 'react'

export default function SectionPill({ label }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 bg-primary-500/10 border border-primary-500/20 text-primary-700 text-[10px] font-bold tracking-[0.14em] uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
      {label}
    </div>
  );
}