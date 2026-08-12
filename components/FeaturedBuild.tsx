import { isLive, primaryUrl, type Storefront } from "@/data/storefronts";
import { Icon } from "./Icon";

const EASE_HOVER = "cubic-bezier(0.25,0.46,0.45,0.94)";

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        padding: "12px 16px",
        background: "#FAF9FC",
        fontSize: 13,
      }}
    >
      <span style={{ color: "#8E8985" }}>{label}</span>
      <span style={{ fontWeight: 600, color: "#413B50", textAlign: "right" }}>
        {value}
      </span>
    </div>
  );
}

export function FeaturedBuild({
  storefront,
  onCopy,
}: {
  storefront: Storefront;
  onCopy: (s: Storefront) => void;
}) {
  const live = isLive(storefront);
  const target = primaryUrl(storefront);

  return (
    <article
      className="featured-panel"
      style={{
        display: "grid",
        gridTemplateColumns: "1.35fr 1fr",
        gap: 0,
        background: "#FFFFFF",
        border: "1px solid #E8E6E4",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow:
          "0 4px 16px rgba(116,90,252,0.08),0 1px 4px rgba(0,0,0,0.04)",
        marginBottom: 44,
      }}
    >
      <a
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${storefront.name} — opens the ${live ? "live site" : "design"} in a new tab`}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 420,
          padding: 40,
          background: storefront.mockBg,
          overflow: "hidden",
        }}
      >
        <div
          data-par="-0.05"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -90,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: 9999,
            background: storefront.mockGlow,
            pointerEvents: "none",
          }}
        />
        <div
          data-par="0.05"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 520,
            aspectRatio: "16/10",
            padding: 10,
            background: "#FFFFFF",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.8)",
            borderRadius: 22,
            boxShadow: "0 24px 60px rgba(26,26,31,0.18)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized screenshot */}
          <img
            src={storefront.shot}
            alt={`${storefront.name} storefront`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: 14,
            }}
          />
        </div>
      </a>

      <div
        style={{ padding: 40, display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 11px",
              borderRadius: 9999,
              background: live ? "#F0FDF4" : "#F4F2F7",
              color: live ? "#15803D" : "#5234CC",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 9999,
                background: live ? "#22C55E" : "#745AFC",
              }}
            />
            {live ? "Live" : "Concept"}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#8E8985",
            }}
          >
            Featured build
          </span>
        </div>

        <h2
          style={{
            marginTop: 20,
            fontSize: 34,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#1A1A1F",
          }}
        >
          {storefront.name}
        </h2>
        <p
          style={{
            marginTop: 10,
            fontSize: 17,
            lineHeight: 1.5,
            color: "#5A5653",
          }}
        >
          {storefront.tagline}
        </p>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            background: "#E8E6E4",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <SpecRow label="Category" value={storefront.category} />
          <SpecRow label="Location" value={storefront.location} />
          <SpecRow label="Modules" value={storefront.modules} />
        </div>

        <div
          style={{
            marginTop: "auto",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <a
            href={target}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 20px",
              background: "#745AFC",
              color: "#FFFFFF",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              transition: `all 180ms ${EASE_HOVER}`,
              boxShadow: "0 4px 16px rgba(116,90,252,0.18)",
            }}
          >
            {live ? "Open live site" : "Open prototype"}
            <Icon name="arrow-right-up-linear" size={16} />
          </a>
          <button
            type="button"
            onClick={() => onCopy(storefront)}
            className="btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "12px 16px",
              background: "#FFFFFF",
              border: "1px solid #E8E6E4",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              color: "#575065",
              cursor: "pointer",
              transition: `all 180ms ${EASE_HOVER}`,
            }}
          >
            <Icon name="link-minimalistic-2-linear" size={16} />
            Copy link
          </button>
        </div>
      </div>
    </article>
  );
}
