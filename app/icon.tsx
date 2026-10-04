import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          border: "1.5px solid #10b981",
          fontSize: "18px",
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
