import React from 'react';
import {motion} from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SuccessState = ({reset}) => {
  return (
    <div>
        <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center h-full py-16"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(31,143,99,0.1)", border: "2px solid rgba(31,143,99,0.2)" }}
                  >
                    <CheckCircle2 size={36} className="text-[#1F8F63]" strokeWidth={1.8} />
                  </div>
                  <h3
                    className="font-extrabold text-xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Application Submitted!
                  </h3>
                  <p
                    className="text-sm text-[#888] leading-relaxed max-w-[300px] mb-8"
                    style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                  >
                    Thank you for applying to the Chi Farms Graduate Trainee Program. We'll review your application and get back to you within 2–3 weeks.
                  </p>
                  <button
                    onClick={reset}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white cursor-pointer border-none"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: "linear-gradient(135deg, #1F8F63, #125C42)",
                    }}
                  >
                    Close
                  </button>
                </motion.div></div>
  )
}

export default SuccessState