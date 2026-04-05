"use client";
import { useState } from "react";

const techBadges = [
  { label: "⚛", bg: "rgba(56, 189, 248, 0.15)", color: "rgb(125, 211, 252)", title: "React" },
  { label: "~", bg: "rgba(34, 211, 238, 0.15)", color: "rgb(103, 232, 249)", title: "Tailwind" },
  { label: "TS", bg: "rgba(59, 130, 246, 0.15)", color: "rgb(96, 165, 250)", title: "TypeScript", fontSize: "9px", fontWeight: 900 },
  { label: "▲", bg: "rgba(255,255,255,0.08)", color: "white", title: "Three.js" },
  { label: "M", bg: "rgba(168, 85, 247, 0.2)", color: "rgb(216, 180, 254)", title: "Motion", fontWeight: "bold" },
];

export default function ProjectCard
({
  imageSrc,
  imageAlt = "Project preview",
  title = "Project Title",
  description = "Description not provided. This is a default placeholder description for the Project Card component. Please provide a custom description when using this component to replace this text.",
}) {
  const [tilt, setTilt] = useState({ rotateX: 6, rotateY: -3 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 15 - 3;
    const rotateX = ((centerY - y) / centerY) * 15 + 6;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 6, rotateY: -3 });
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#1a1730",
        boxShadow: "0 0 20px rgba(203, 172, 249, 0.15), 0 32px 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* ── Image Container ── */}
      <div
        style={{
          position: "relative",
          height: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "radial-gradient(ellipse at 20% 50%, #0d0826 0%, #060414 60%, #000 100%)",
        }}
      >
        {/* Starfield */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: [
              "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.9) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 28% 72%, rgba(255,255,255,0.7) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 45% 30%, rgba(255,255,255,1) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 62% 85%, rgba(255,255,255,0.6) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 78% 20%, rgba(255,255,255,0.8) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 88% 55%, rgba(255,255,255,0.9) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 5% 60%, rgba(255,255,255,0.5) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 35% 10%, rgba(255,255,255,0.7) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 93% 40%, rgba(255,255,255,0.6) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 82% 78%, rgba(255,255,255,0.8) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 18% 45%, rgba(255,255,255,0.7) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 52% 15%, rgba(255,255,255,0.6) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 68% 92%, rgba(255,255,255,0.8) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 25% 88%, rgba(255,255,255,0.5) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,0.7) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 38% 62%, rgba(255,255,255,0.9) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 85% 8%, rgba(255,255,255,0.6) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 8% 28%, rgba(255,255,255,0.5) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 95% 68%, rgba(255,255,255,0.7) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 58% 48%, rgba(255,255,255,0.8) 0%, transparent 100%)",
            ].join(","),
            zIndex: 0,
          }}
        />

        {/* Nebula glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120px 80px at 10% 50%, rgba(80,20,160,0.25) 0%, transparent 70%), " +
              "radial-gradient(ellipse 100px 60px at 90% 50%, rgba(160,60,0,0.2) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        {/* Purple planet - LEFT */}
        <div
          style={{
            position: "absolute",
            left: "0.3rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #d060ff, #6600cc, #1a0040)",
            boxShadow: "0 0 12px rgba(160,40,255,0.5), inset -3px -3px 8px rgba(0,0,0,0.5)",
            zIndex: 2,
          }}
        />

        {/* Orange planet - RIGHT */}
        <div
          style={{
            position: "absolute",
            right: "0.3rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #ffb840, #e05500, #3a1000)",
            boxShadow: "0 0 12px rgba(255,100,0,0.5), inset -3px -3px 8px rgba(0,0,0,0.5)",
            zIndex: 2,
          }}
        />

        {/* Tilted screen / image frame */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            width: "74%",
            height: "82%",
            borderRadius: "10px",
            overflow: "hidden",
            border: "1.5px solid rgba(255,255,255,0.12)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.8)",
            transform: `perspective(600px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: "transform 0.1s ease-out",
            zIndex: 1,
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* ── Card Body ── */}
      <div style={{ padding: "14px 20px 16px", background: "#1a1730" }}>
        <h2 style={{ fontSize: "19px", fontWeight: 800, color: "white", marginBottom: "8px", lineHeight: "1.2", letterSpacing: "-0.3px" }}>
          {title}
        </h2>
        <p style={{
          fontSize: "13px",
          color: "rgba(200,195,220,0.75)",
          lineHeight: "1.55",
          fontWeight: 300,
          marginBottom: "16px",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical"
        }}>
          {description}
        </p>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {techBadges.map((b) => (
              <div
                key={b.title}
                title={b.title}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: b.fontSize || "14px",
                  fontWeight: b.fontWeight || "normal",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: b.bg,
                  color: b.color,
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
          
          <button style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "rgba(180,170,210,0.8)", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}>
            Details
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 10L10 2M10 2H4M10 2v6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}