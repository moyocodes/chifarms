// CallCTA.jsx — reusable call / email CTA block
// Props:
//   phone    string  – phone number (e.g. "08022078446")
//   label    string  – label above the phone number
//   email    string  – email address (optional)
//   accent   string  – brand colour (default #1F8F63)
//   dark     bool    – dark gradient variant (default false)

import React from "react";

export default function CallCTA({
  phone,
  label = "Sales",
  email = "chifarms@clicktgi.net",
  accent = "#1F8F63",
  dark = false,
}) {
  const bg = dark
    ? `linear-gradient(145deg, ${accent} 0%, #0D4331 100%)`
    : "#fff";
  const textPrimary = dark ? "#fff" : "#1A1A1A";
  const textSub = dark ? "rgba(255,255,255,0.55)" : "#aaa";
  const rowBg = dark ? "rgba(255,255,255,0.12)" : "#f5f9f7";
  const rowBorder = dark ? "rgba(255,255,255,0.2)" : "rgba(31,143,99,0.15)";
  const emailBg = dark ? "#fff" : `rgba(31,143,99,0.07)`;
  const emailText = accent;

  const styles = {
    wrap: {
      borderRadius: 20,
      padding: "1.6rem",
      background: bg,
      border: dark ? "none" : `1px solid rgba(31,143,99,0.15)`,
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    heading: {
      fontSize: "1rem",
      fontWeight: 800,
      color: textPrimary,
      marginBottom: 4,
    },
    sub: {
      fontSize: "0.78rem",
      color: dark ? "rgba(255,255,255,0.55)" : "#999",
      fontFamily: "'Lora', serif",
      marginBottom: 18,
    },
    phoneRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 13px",
      borderRadius: 12,
      background: rowBg,
      border: `1px solid ${rowBorder}`,
      textDecoration: "none",
      marginBottom: 10,
    },
    icon: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: dark ? "rgba(255,255,255,0.18)" : `rgba(31,143,99,0.12)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      flexShrink: 0,
    },
    labelText: {
      fontSize: "0.6rem",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: textSub,
      marginBottom: 2,
    },
    phoneText: {
      fontSize: "0.92rem",
      fontWeight: 800,
      color: textPrimary,
    },
    emailRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 13px",
      borderRadius: 12,
      background: emailBg,
      border: dark ? "none" : `1px solid rgba(31,143,99,0.12)`,
      textDecoration: "none",
    },
    emailIcon: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: dark ? "rgba(255,255,255,0.9)" : `rgba(31,143,99,0.1)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      flexShrink: 0,
    },
    emailText: {
      fontSize: "0.78rem",
      fontWeight: 700,
      color: dark ? accent : emailText,
    },
  };

  return (
    <div style={styles.wrap}>
      <p style={styles.heading}>Enquire Now</p>
      <p style={styles.sub}>Our team is ready to assist you.</p>

      <a href={`tel:${phone}`} style={styles.phoneRow}>
        <div style={styles.icon}>📞</div>
        <div>
          <p style={styles.labelText}>{label}</p>
          <p style={styles.phoneText}>{phone}</p>
        </div>
      </a>

      {email && (
        <a href={`mailto:${email}`} style={styles.emailRow}>
          <div style={styles.emailIcon}>✉️</div>
          <div>
            <p
              style={{
                ...styles.labelText,
                color: dark ? "rgba(255,255,255,0.45)" : "#aaa",
              }}
            >
              Email
            </p>
            <p style={styles.emailText}>{email}</p>
          </div>
        </a>
      )}
    </div>
  );
}
