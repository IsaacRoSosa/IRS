"use client";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const CompetitionCard = ({ image, title, date, team, description, links, project, images = [], expandDescription = [] }) => {
  const [tilt, setTilt] = useState({ rotateX: 6, rotateY: -3 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = images.length > 0 ? images : [image];

  // Auto-fade images in card preview
  useEffect(() => {
    if (allImages.length <= 1 || isExpanded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [allImages.length, isExpanded]);

  // Auto-play slider in modal
  useEffect(() => {
    if (!isExpanded || allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isExpanded, allImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

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

  const modalContent = isExpanded ? (
    <div
      onClick={() => setIsExpanded(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 3, 25, 0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "1rem",
        animation: "fadeIn 0.3s ease-out",
        overflow: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "85vh",
          borderRadius: "16px",
          overflow: "auto",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "#1a1730",
          boxShadow: "0 0 60px rgba(203, 172, 249, 0.3), 0 32px 120px rgba(0,0,0,0.9)",
          animation: "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          margin: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsExpanded(false)}
          style={{
            position: "sticky",
            top: "1rem",
            right: "1rem",
            float: "right",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            transition: "all 0.2s",
            marginBottom: "-36px",
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

        {/* Content */}
        <div>
          {/* Image Slider Container */}
          <div
            style={{
              position: "relative",
              height: "300px",
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
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 0.5s ease-in-out" }}
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
          <div style={{ padding: "1.5rem", background: "#1a1730" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: "white", marginBottom: "12px", lineHeight: "1.2" }}>
              {title}
            </h2>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <p style={{ fontSize: "16px", color: "#f9d1f5", fontWeight: 500 }}>{team}</p>
              <p style={{ fontSize: "16px", color: "#bbbbbb", fontWeight: 400 }}>{date}</p>
            </div>

            <div style={{ fontSize: "15px", color: "rgba(200,195,220,0.85)", lineHeight: "1.7", fontWeight: 300, marginBottom: "24px" }}>
              {expandDescription.length > 0 ? (
                expandDescription.map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: index < expandDescription.length - 1 ? "16px" : "0" }}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>

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
                        background: "rgba(59, 130, 246, 0.15)",
                        border: "1px solid rgba(59, 130, 246, 0.3)",
                        color: "white",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 600,
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(59, 130, 246, 0.25)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(59, 130, 246, 0.15)";
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
    </div>
  ) : null;

  return (
    <>
      {/* Main Card */}
      <div
        onClick={() => setIsExpanded(true)}
        style={{
          width: "100%",
          maxWidth: "320px",
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

        {/* Image frame */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            width: "90%",
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
            src={allImages[currentImageIndex]}
            alt={`${title} event`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 0.5s ease-in-out" }}
          />
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: "14px 20px 16px", background: "#1a1730" }}>
        <h2 style={{ fontSize: "19px", fontWeight: 800, color: "white", marginBottom: "8px", lineHeight: "1.2", letterSpacing: "-0.3px" }}>
          {title}
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <p style={{ fontSize: "13px", color: "#f9d1f5", fontWeight: 500 }}>{team}</p>
          <p style={{ fontSize: "13px", color: "#bbbbbb", fontWeight: 400 }}>{date}</p>
        </div>

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

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                color: "rgb(96, 165, 250)",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59, 130, 246, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img src={link.logo} alt={`${link.name} logo`} style={{ width: "12px", height: "12px", objectFit: "contain" }} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Render modal using portal */}
    {typeof window !== 'undefined' && modalContent && createPortal(modalContent, document.body)}
  </>
  );
};

export default CompetitionCard;
