export const F = { sans: "'Plus Jakarta Sans', sans-serif", serif: "'Lora', serif" };

export function hex2rgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ].join(",");
}

export const CONTACT_NUMBERS = [
  { label: "Frozen Foods", num: "09070 269 373", tel: "09070269373" },
  { label: "DOC Sales",    num: "08127 138 650", tel: "08127138650" },
];