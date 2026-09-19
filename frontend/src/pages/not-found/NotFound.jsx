import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#f7f8fa", fontFamily: "'Georgia', serif" }}>
      {/* Card */}
      <div
        className="flex flex-col items-center text-center px-10 py-12 rounded-xl"
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          maxWidth: "420px",
          width: "100%",
        }}>
        {/* 404 big number */}
        <h1
          className="font-bold mb-1"
          style={{ fontSize: "72px", color: "#0f2744", lineHeight: 1 }}>
          404
        </h1>

        {/* Tricolor accent bar */}
        <div
          className="w-16 h-1 rounded-full my-4"
          style={{
            background:
              "linear-gradient(90deg, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%)",
            border: "1px solid #e5e7eb",
          }}
        />

        {/* Text */}
        <p
          className="text-xs font-bold tracking-widest uppercase mb-2"
          style={{ color: "#c9a84c" }}>
          Page Not Found
        </p>
        <h2 className="text-xl font-bold mb-2" style={{ color: "#0f2744" }}>
          Oops! Wrong Turn
        </h2>
        <p className="text-sm mb-1" style={{ color: "#6b7280" }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <p className="text-xs mb-8" style={{ color: "#9ca3af" }}>
          Check the URL or navigate back to the dashboard.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-semibold"
            style={{
              borderColor: "#e5e7eb",
              background: "#f9fafb",
              color: "#374151",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f3f4f6";
              e.currentTarget.style.borderColor = "#d1d5db";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#f9fafb";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold"
            style={{ background: "#0f2744", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1a3a5c")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#0f2744")
            }>
            Dashboard
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-xs mt-6" style={{ color: "#9ca3af" }}>
        Treasury & Accounts Department · KAAC
      </p>
    </div>
  );
};

export default NotFound;
