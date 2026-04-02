import React from "react";

const courses = [
  "Broiler Management",
  "Breeder Management",
  "Commercial Layers",
  "Hatchery Management",
  "Environment Management",
  "Cleaning & Handling",
  "Brooding",
  "Poultry Health",
  "Reception of Point-of-lay Pullets",
  "Biosecurity",
  "Feeding",
  "Water Supply",
  "Record Keeping",
  "Egg Handling",
];

const Courses = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-[#555] font-medium">
        All Courses & Modules offered:
      </p>

      <ul className="grid sm:grid-cols-2 gap-2">
        {courses.map((course, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-[#444] bg-white/70 border border-[#1F8F63]/10 rounded-lg px-3 py-2 hover:bg-[#1F8F63]/5 transition"
          >
            {/* little bullet */}
            <span className="w-2 h-2 rounded-full bg-[#1F8F63]" />

            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;