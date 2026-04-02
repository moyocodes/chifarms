import React from "react";

const bulletins = [
  "Impacts of Laboratory Services on Poultry Health in Nigeria (May/June 2021)",
  "A Metaphor for a Bleeding Industry (March/April 2021)",
  "Hard Times for Poultry Producers (Jan/Feb 2021)",
  "Surging Feed Prices hurt the Industry (March/April 2021)",
  "Covid-19 Pandemic and Current Situations towards Recovery (Sept/Oct 2020)",
  "The Gold in Broiler Operation (Jan/Feb 2020)",
  "Biological Risk Management (BRM) (Nov/Dec 2019)",
];

const Bulletin = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-[#555] font-medium">
        Technical Service Bulletins
      </p>

      <ul className="space-y-2">
        {bulletins.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-[#444] bg-white/70 border border-[#1F8F63]/10 rounded-lg px-3 py-3 hover:bg-[#1F8F63]/5 transition cursor-pointer"
          >
            {/* ICON / NUMBER */}
            <div className="flex items-center justify-center min-w-[28px] h-7 rounded-md bg-[#1F8F63]/10 text-[#1F8F63] text-xs font-bold">
              📄
              {/* OR use number instead:
              {index + 1}
              */}
            </div>

            {/* TEXT */}
            <p className="leading-snug">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bulletin;