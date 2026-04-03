import React from "react";
import { FileText } from "lucide-react";

const courses = [
  "Broiler Management", "Breeder Management", "Commercial Layers",
  "Hatchery Management", "Environment Management", "Cleaning & Handling",
  "Brooding", "Poultry Health", "Reception of Point-of-lay Pullets",
  "Biosecurity", "Feeding", "Water Supply", "Record Keeping", "Egg Handling",
];

const Courses = () => (
  <div className="space-y-4">
    <p className="text-sm text-[#555] font-medium">All Courses & Modules offered:</p>
    <ul className="grid grid-cols-2 gap-2">
      {courses.map((course, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-sm text-[#444] bg-white/70 border border-[#1F8F63]/10 rounded-lg px-3 py-3 hover:bg-[#1F8F63]/5 transition"
        >
          <div className="flex items-center justify-center min-w-[26px] h-[26px] rounded-md bg-[#1F8F63]/10 flex-shrink-0">
            <FileText size={15} className="text-[#1F8F63]" strokeWidth={2.2} />
          </div>
          <p className="leading-snug m-0">{course}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Courses;