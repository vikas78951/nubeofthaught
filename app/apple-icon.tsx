import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b111c 0%, #06090e 100%)",
          borderRadius: "44px",
          border: "4px solid #10b981",
          fontSize: "96px",
        }}
      >
        🧠
      </div>
    ),
    {
      ...size,
    }
  );
}
