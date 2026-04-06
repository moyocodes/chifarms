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
    <p className="text-sm text-dark-500 font-medium">All Courses & Modules offered:</p>
    <ul className="grid grid-cols-2 gap-2">
      {courses.map((course, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-sm text-dark-400 bg-white/70 border border-primary-500/10 rounded-lg px-3 py-3 hover:bg-primary-500/5 transition"
        >
          <div className="flex items-center justify-center min-w-[26px] h-[26px] rounded-md bg-primary-500/10 flex-shrink-0">
            <FileText size={15} className="text-primary-500" strokeWidth={2.2} />
          </div>
          <p className="leading-snug m-0">{course}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Courses;