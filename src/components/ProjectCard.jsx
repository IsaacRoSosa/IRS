"use client";
import { useState, useEffect } from "react";

const techBadgeStyles = {
  // JavaScript Frameworks & Libraries
  "React": { label: "⚛", bg: "rgba(56, 189, 248, 0.15)", color: "rgb(125, 211, 252)" },
  "React.js": { label: "⚛", bg: "rgba(56, 189, 248, 0.15)", color: "rgb(125, 211, 252)" },
  "Next.js": { label: "▲", bg: "rgba(255,255,255,0.08)", color: "white" },
  "NextJs": { label: "▲", bg: "rgba(255,255,255,0.08)", color: "white" },
  "Vue": { label: "V", bg: "rgba(52, 211, 153, 0.15)", color: "rgb(110, 231, 183)", fontWeight: "bold" },
  "Angular": { label: "A", bg: "rgba(239, 68, 68, 0.15)", color: "rgb(252, 165, 165)", fontWeight: "bold" },
  "Vite": { label: "⚡", bg: "rgba(168, 85, 247, 0.15)", color: "rgb(196, 181, 253)" },

  // Languages
  "JavaScript": { label: "JS", bg: "rgba(251, 191, 36, 0.15)", color: "rgb(253, 224, 71)", fontSize: "9px", fontWeight: 900 },
  "javascript": { label: "JS", bg: "rgba(251, 191, 36, 0.15)", color: "rgb(253, 224, 71)", fontSize: "9px", fontWeight: 900 },
  "TypeScript": { label: "TS", bg: "rgba(59, 130, 246, 0.15)", color: "rgb(96, 165, 250)", fontSize: "9px", fontWeight: 900 },
  "Python": { label: "Py", bg: "rgba(59, 130, 246, 0.15)", color: "rgb(147, 197, 253)", fontSize: "9px", fontWeight: 900 },
  "C#": { label: "C#", bg: "rgba(139, 92, 246, 0.15)", color: "rgb(196, 181, 253)", fontSize: "9px", fontWeight: 900 },
  "PHP": { label: "PHP", bg: "rgba(139, 92, 246, 0.15)", color: "rgb(167, 139, 250)", fontSize: "8px", fontWeight: 900 },
  "Swift": { label: "🦅", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)" },

  // Styling
  "CSS": { label: "~", bg: "rgba(34, 211, 238, 0.15)", color: "rgb(103, 232, 249)" },
  "Tailwind": { label: "~", bg: "rgba(34, 211, 238, 0.15)", color: "rgb(103, 232, 249)" },
  "HTML": { label: "<>", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)", fontSize: "11px" },

  // Databases & Backend
  "PostgreSQL": { label: "🐘", bg: "rgba(59, 130, 246, 0.15)", color: "rgb(96, 165, 250)" },
  "MySQL": { label: "DB", bg: "rgba(34, 211, 238, 0.15)", color: "rgb(103, 232, 249)", fontSize: "9px", fontWeight: 900 },
  "My SQL": { label: "DB", bg: "rgba(34, 211, 238, 0.15)", color: "rgb(103, 232, 249)", fontSize: "9px", fontWeight: 900 },
  "Supabase": { label: "S", bg: "rgba(52, 211, 153, 0.15)", color: "rgb(110, 231, 183)", fontWeight: "bold" },
  "Oracle": { label: "🔴", bg: "rgba(239, 68, 68, 0.15)", color: "rgb(252, 165, 165)" },
  "Oracle APEX": { label: "⚡", bg: "rgba(239, 68, 68, 0.15)", color: "rgb(252, 165, 165)" },
  "APEX": { label: "⚡", bg: "rgba(239, 68, 68, 0.15)", color: "rgb(252, 165, 165)" },

  // Other Tools
  "Unity": { label: "U", bg: "rgba(71, 85, 105, 0.15)", color: "rgb(148, 163, 184)", fontWeight: "bold" },
  "Three.js": { label: "3D", bg: "rgba(255,255,255,0.08)", color: "white", fontSize: "9px", fontWeight: 900 },
  "Flask": { label: "F", bg: "rgba(71, 85, 105, 0.15)", color: "rgb(148, 163, 184)", fontWeight: "bold" },
  "FastAPI": { label: "⚡", bg: "rgba(52, 211, 153, 0.15)", color: "rgb(110, 231, 183)" },
  "TensorFlow": { label: "TF", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)", fontSize: "9px", fontWeight: 900 },
  "Matplotlib": { label: "📊", bg: "rgba(59, 130, 246, 0.15)", color: "rgb(96, 165, 250)" },
  "Numpy": { label: "N", bg: "rgba(59, 130, 246, 0.15)", color: "rgb(147, 197, 253)", fontWeight: "bold" },
  "Motion": { label: "M", bg: "rgba(168, 85, 247, 0.2)", color: "rgb(216, 180, 254)", fontWeight: "bold" },
  "Vercel": { label: "▲", bg: "rgba(255,255,255,0.08)", color: "white" },
  "TanStack Query": { label: "TQ", bg: "rgba(239, 68, 68, 0.15)", color: "rgb(252, 165, 165)", fontSize: "9px", fontWeight: 900 },
  "TanStack Router": { label: "TR", bg: "rgba(239, 68, 68, 0.15)", color: "rgb(252, 165, 165)", fontSize: "9px", fontWeight: 900 },
  "Spotify API": { label: "🎵", bg: "rgba(52, 211, 153, 0.15)", color: "rgb(110, 231, 183)" },
  "Google Gemini AI": { label: "✨", bg: "rgba(59, 130, 246, 0.15)", color: "rgb(147, 197, 253)" },
  "SQLite": { label: "DB", bg: "rgba(148, 163, 184, 0.15)", color: "rgb(203, 213, 225)", fontSize: "9px", fontWeight: 900 },
  "Chart.js": { label: "📈", bg: "rgba(251, 191, 36, 0.15)", color: "rgb(253, 224, 71)" },

  // Swift/iOS Tools
  "RealityKit": { label: "🥽", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)" },
  "CreateML": { label: "🧠", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)" },
  "CoreML": { label: "🤖", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)" },
  "WidgetKit": { label: "📱", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)" },

  // 3D & Design
  "Blender": { label: "🎨", bg: "rgba(249, 115, 22, 0.15)", color: "rgb(251, 146, 60)" },

  // Default fallback
  "default": { label: "•", bg: "rgba(148, 163, 184, 0.15)", color: "rgb(203, 213, 225)" }
};

// Helper function to get badge style for a technology
const getTechBadgeStyle = (techName) => {
  return techBadgeStyles[techName] || techBadgeStyles["default"];
};

const planetColors = [
  {
    gradient: "radial-gradient(circle at 35% 35%, #d060ff, #6600cc, #1a0040)",
    glow: "rgba(160,40,255,0.5)"
  },
  {
    gradient: "radial-gradient(circle at 35% 35%, #ffb840, #e05500, #3a1000)",
    glow: "rgba(255,100,0,0.5)"
  },
  {
    gradient: "radial-gradient(circle at 35% 35%, #40d4ff, #0066cc, #001a40)",
    glow: "rgba(40,160,255,0.5)"
  },
  {
    gradient: "radial-gradient(circle at 35% 35%, #ff4060, #cc0033, #400010)",
    glow: "rgba(255,40,80,0.5)"
  },
  {
    gradient: "radial-gradient(circle at 35% 35%, #40ffb8, #00cc66, #00401a)",
    glow: "rgba(40,255,160,0.5)"
  },
  {
    gradient: "radial-gradient(circle at 35% 35%, #ffff40, #cccc00, #404000)",
    glow: "rgba(255,255,40,0.5)"
  },
  {
    gradient: "radial-gradient(circle at 35% 35%, #ff80d4, #cc0099, #400033)",
    glow: "rgba(255,80,200,0.5)"
  }
];

export default function ProjectCard({
  imageSrc,
  imageAlt = "Project preview",
  title = "Project Title",
  description = "Description not provided.",
  expandDescription = [],
  technologies = [],
  links = [],
  images = [],
}) {
  const [tilt, setTilt] = useState({ rotateX: 6, rotateY: -3 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generate random planets for this card (only once, using useState for stability)
  const [planets] = useState(() => {
    const shuffled = [...planetColors].sort(() => Math.random() - 0.5);
    return {
      left: shuffled[0],
      right: shuffled[1]
    };
  });

  const allImages = images.length > 0 ? images : [imageSrc];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Auto-play slider every 4 seconds when expanded
  useEffect(() => {
    if (!isExpanded || allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isExpanded, allImages.length]);

  const handleMouseMove = (e) => {
    if (isExpanded) return;
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <>
      {/* Main Card */}
      <div
        onClick={() => setIsExpanded(true)}
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "#1a1730",
          boxShadow: "0 0 20px rgba(203, 172, 249, 0.15), 0 32px 80px rgba(0,0,0,0.6)",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        {/* Image Container */}
        <div
          style={{
            position: "relative",
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "radial-gradient(ellipse at 20% 50%, #0d0826 0%, #060414 60%, #000 100%)",
            objectFit: "contain",
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
                `radial-gradient(ellipse 120px 80px at 10% 50%, ${planets.left.glow.replace('0.5', '0.25')} 0%, transparent 70%), ` +
                `radial-gradient(ellipse 100px 60px at 90% 50%, ${planets.right.glow.replace('0.5', '0.2')} 0%, transparent 70%)`,
              zIndex: 0,
            }}
          />

          {/* Left planet */}
          <div
            style={{
              position: "absolute",
              left: "0.3rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: planets.left.gradient,
              boxShadow: `0 0 12px ${planets.left.glow}, inset -3px -3px 8px rgba(0,0,0,0.5)`,
              zIndex: 2,
            }}
          />

          {/* Right planet */}
          <div
            style={{
              position: "absolute",
              right: "0.3rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: planets.right.gradient,
              boxShadow: `0 0 12px ${planets.right.glow}, inset -3px -3px 8px rgba(0,0,0,0.5)`,
              zIndex: 2,
            }}
          />

          {/* Image frame */}
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
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>

        {/* Card Body */}
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
              {technologies.slice(0, 5).map((tech, idx) => {
                const badgeStyle = getTechBadgeStyle(tech.name);
                return (
                  <div
                    key={idx}
                    title={tech.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: badgeStyle.fontSize || "14px",
                      fontWeight: badgeStyle.fontWeight || "normal",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: badgeStyle.bg,
                      color: badgeStyle.color,
                      padding: "4px",
                    }}
                  >
                    {tech.logo ? (
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          filter: "brightness(1.1)"
                        }}
                      />
                    ) : (
                      badgeStyle.label
                    )}
                  </div>
                );
              })}
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

      {/* Expanded Modal */}
      {isExpanded && (
        <div
          onClick={() => setIsExpanded(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 3, 25, 0.75)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "2rem",
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "900px",
              maxHeight: "90vh",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "#1a1730",
              boxShadow: "0 0 60px rgba(203, 172, 249, 0.3), 0 32px 120px rgba(0,0,0,0.9)",
              animation: "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ×
            </button>

            {/* Scrollable content */}
            <div style={{ overflowY: "auto", overflowX: "hidden" }}>
              {/* Image Slider Container */}
              <div
                style={{
                  position: "relative",
                  height: "400px",
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
                      "radial-gradient(2px 2px at 15% 20%, rgba(255,255,255,0.9) 0%, transparent 100%)",
                      "radial-gradient(1.5px 1.5px at 35% 75%, rgba(255,255,255,0.7) 0%, transparent 100%)",
                      "radial-gradient(2px 2px at 50% 35%, rgba(255,255,255,1) 0%, transparent 100%)",
                      "radial-gradient(1px 1px at 68% 88%, rgba(255,255,255,0.6) 0%, transparent 100%)",
                      "radial-gradient(1.5px 1.5px at 80% 25%, rgba(255,255,255,0.8) 0%, transparent 100%)",
                      "radial-gradient(2px 2px at 90% 60%, rgba(255,255,255,0.9) 0%, transparent 100%)",
                      "radial-gradient(1px 1px at 8% 65%, rgba(255,255,255,0.5) 0%, transparent 100%)",
                      "radial-gradient(1.5px 1.5px at 42% 12%, rgba(255,255,255,0.7) 0%, transparent 100%)",
                      "radial-gradient(1px 1px at 95% 45%, rgba(255,255,255,0.6) 0%, transparent 100%)",
                      "radial-gradient(2px 2px at 25% 85%, rgba(255,255,255,0.8) 0%, transparent 100%)",
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
                      `radial-gradient(ellipse 200px 120px at 15% 50%, ${planets.left.glow.replace('0.5', '0.25')} 0%, transparent 70%), ` +
                      `radial-gradient(ellipse 180px 100px at 85% 50%, ${planets.right.glow.replace('0.5', '0.2')} 0%, transparent 70%)`,
                    zIndex: 0,
                  }}
                />

                {/* Larger planets */}
                <div
                  style={{
                    position: "absolute",
                    left: "2rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: planets.left.gradient,
                    boxShadow: `0 0 30px ${planets.left.glow}, inset -6px -6px 15px rgba(0,0,0,0.5)`,
                    zIndex: 2,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    right: "2rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: planets.right.gradient,
                    boxShadow: `0 0 30px ${planets.right.glow}, inset -6px -6px 15px rgba(0,0,0,0.5)`,
                    zIndex: 2,
                  }}
                />

                {/* Image with slider controls */}
                <div
                  style={{
                    position: "relative",
                    width: "70%",
                    height: "80%",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "2px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 10px 50px rgba(0,0,0,0.9)",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={allImages[currentImageIndex]}
                    alt={`${title} - Image ${currentImageIndex + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />

                  {/* Navigation arrows */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        style={{
                          position: "absolute",
                          left: "1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "rgba(0,0,0,0.5)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          color: "white",
                          fontSize: "20px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.8)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.5)"}
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        style={{
                          position: "absolute",
                          right: "1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "rgba(0,0,0,0.5)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          color: "white",
                          fontSize: "20px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.8)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.5)"}
                      >
                        ›
                      </button>

                      {/* Image indicator dots */}
                      <div style={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px" }}>
                        {allImages.map((_, idx) => (
                          <div
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            style={{
                              width: currentImageIndex === idx ? "24px" : "8px",
                              height: "8px",
                              borderRadius: "4px",
                              background: currentImageIndex === idx ? "rgba(203, 172, 249, 0.9)" : "rgba(255,255,255,0.3)",
                              cursor: "pointer",
                              transition: "all 0.3s",
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "2rem", background: "#1a1730" }}>
                <h2 style={{ fontSize: "28px", fontWeight: 800, color: "white", marginBottom: "12px", lineHeight: "1.2" }}>
                  {title}
                </h2>
                <div style={{ fontSize: "15px", color: "rgba(200,195,220,0.85)", lineHeight: "1.7", fontWeight: 300, marginBottom: "24px" }}>
                  {Array.isArray(expandDescription) ? (
                    expandDescription.map((paragraph, index) => (
                      <p key={index} style={{ marginBottom: index < expandDescription.length - 1 ? "16px" : "0" }}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p>{expandDescription}</p>
                  )}
                </div>

                {/* Technologies */}
                {technologies.length > 0 && (
                  <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#CBACF9", marginBottom: "12px" }}>
                      Technologies
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 16px",
                            borderRadius: "10px",
                            background: "rgba(203, 172, 249, 0.1)",
                            border: "1px solid rgba(203, 172, 249, 0.2)",
                          }}
                        >
                          {tech.logo && (
                            <img src={tech.logo} alt={tech.name} style={{ width: "20px", height: "20px" }} />
                          )}
                          <span style={{ fontSize: "14px", color: "rgba(200,195,220,0.9)", fontWeight: 500 }}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {links.length > 0 && (
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#CBACF9", marginBottom: "12px" }}>
                      Links
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            background: "rgba(203, 172, 249, 0.15)",
                            border: "1px solid rgba(203, 172, 249, 0.3)",
                            color: "white",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: 600,
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(203, 172, 249, 0.25)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(203, 172, 249, 0.15)";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          {link.logo && (
                            <img src={link.logo} alt={link.name} style={{ width: "18px", height: "18px" }} />
                          )}
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
