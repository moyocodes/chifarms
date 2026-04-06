import React from "react";
import { FileText } from "lucide-react";

const bulletins = [
  "Impacts of Laboratory Services on Poultry Health in Nigeria (May/June 2021)",
  "A Metaphor for a Bleeding Industry (March/April 2021)",
  "Hard Times for Poultry Producers (Jan/Feb 2021)",
  "Surging Feed Prices hurt the Industry (March/April 2021)",
  "Covid-19 Pandemic and Current Situations towards Recovery (Sept/Oct 2020)",
  "The Gold in Broiler Operation (Jan/Feb 2020)",
  "Biological Risk Management (BRM) (Nov/Dec 2019)",
];

const Bulletin = () => (
  <div className="space-y-4">
    <p className="text-sm text-dark-500 font-medium">Technical Service Bulletins</p>
    <ul className="grid sm:grid-cols-2 gap-2">
      {bulletins.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm text-dark-900 bg-white/70 border border-primary-500/10 rounded-lg px-3 py-3 hover:bg-primary-500/5 transition cursor-pointer"
        >
          <div className="flex items-center justify-center min-w-[26px] h-[26px] rounded-md bg-primary-500/10 flex-shrink-0">
            <FileText size={15} className="text-primary-500" strokeWidth={2.2} />
          </div>
          <p className="leading-snug m-0">{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Bulletin;