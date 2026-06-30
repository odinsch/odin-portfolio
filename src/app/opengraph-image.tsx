import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Odin Schwartz — Senior Frontend Engineer";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f4f3ef",
        color: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>ODIN</div>
      <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>
        SCHWARTZ
      </div>
      <div style={{ fontSize: 36, marginTop: 40, opacity: 0.7 }}>
        Senior Frontend Engineer
      </div>
    </div>,
    { ...size },
  );
}
