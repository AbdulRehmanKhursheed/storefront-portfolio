import { isLive, primaryUrl, type Storefront } from "@/data/storefronts";
import { Icon } from "./Icon";

const EASE_HOVER = "cubic-bezier(0.25,0.46,0.45,0.94)";

export function StorefrontCard({
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
      className="storefront-card"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        border: "1px solid #E8E6E4",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(116,90,252,0.04)",
        transition: `transform 180ms ${EASE_HOVER},box-shadow 180ms ${EASE_HOVER}`,
        animation: "riseIn 320ms cubic-bezier(0.16,1,0.3,1) both",
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
          alignItems: "flex-end",
          justifyContent: "center",
          aspectRatio: "16/10",
          padding: "22px 22px 0",
          background: storefront.mockBg,
          overflow: "hidden",
        }}
      >
        <div
          data-par="-0.04"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -70,
            right: -50,
            width: 220,
            height: 220,
            borderRadius: 9999,
            background: storefront.mockGlow,
            pointerEvents: "none",
          }}
        />
        <div
          data-par="0.035"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "8px 8px 0",
            background: "#FFFFFF",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.8)",
            borderBottom: "none",
            borderRadius: "16px 16px 0 0",
            boxShadow: "0 18px 44px rgba(26,26,31,0.16)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized screenshot */}
          <img
            src={storefront.shot}
            alt={`${storefront.name} storefront`}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: 10,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 4,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 10px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.94)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: live ? "#15803D" : "#5234CC",
            boxShadow: "0 1px 3px rgba(26,26,31,0.08)",
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
          {live ? "LIVE" : "CONCEPT"}
        </div>
      </a>

      <div
        style={{
          padding: "18px 20px 20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: 19,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#1A1A1F",
          }}
        >
          {storefront.name}
        </h3>
        <p
          style={{
            marginTop: 4,
            fontSize: 14,
            lineHeight: 1.45,
            color: "#5A5653",
          }}
        >
          {storefront.tagline}
        </p>
        <div
          style={{
            marginTop: 14,
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          {storefront.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                padding: "5px 10px",
                borderRadius: 9999,
                background: "#F4F2F7",
                color: "#6E6680",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <a
            href={target}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13.5,
              fontWeight: 700,
              color: "#5234CC",
            }}
          >
            {live ? "Open live site" : "Open prototype"}
            <Icon name="arrow-right-up-linear" size={15} />
          </a>
          <button
            type="button"
            title="Copy link"
            aria-label={`Copy the ${storefront.name} link`}
            onClick={() => onCopy(storefront)}
            className="icon-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: 9999,
              border: "1px solid #E8E6E4",
              background: "#FFFFFF",
              color: "#8C849D",
              cursor: "pointer",
              transition: `all 180ms ${EASE_HOVER}`,
            }}
          >
            <Icon name="link-minimalistic-2-linear" size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
