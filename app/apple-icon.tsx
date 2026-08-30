import { ImageResponse } from "next/og";

// Icône pour l'écran d'accueil iOS (générée en PNG au build).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c0b0a",
          color: "#f4f2ef",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial",
          fontWeight: 900,
          fontSize: 74,
          lineHeight: 1,
          letterSpacing: -6,
        }}
      >
        <div style={{ display: "flex" }}>
          <span>B</span>
          <span style={{ color: "#c1272d" }}>X</span>
        </div>
        <div style={{ display: "flex" }}>LM</div>
      </div>
    ),
    { ...size },
  );
}
