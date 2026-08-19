import { Catalog } from "@/components/Catalog";
import { Icon } from "@/components/Icon";
import { KeenuLogo } from "@/components/KeenuLogo";
import { countLive, featuredStorefront, primaryUrl, STOREFRONTS } from "@/data/storefronts";

const EASE_HOVER = "cubic-bezier(0.25,0.46,0.45,0.94)";

export default function Home() {
  const total = STOREFRONTS.length;
  const live = countLive();
  const featured = featuredStorefront();

  return (
    <div style={{ minHeight: "100vh", background: "#FAF9FC", overflowX: "hidden" }}>
      <header
        className="page-pad"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "14px 48px",
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E8E6E4",
        }}
      >
        <KeenuLogo style={{ height: 22, width: "auto", display: "block" }} />
        <span style={{ width: 1, height: 18, background: "#E8E6E4" }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: "#413B50" }}>
          Storefronts
        </span>
        <span
          style={{
            marginLeft: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            color: "#8E8985",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: 9999,
              background: "#22C55E",
              boxShadow: "0 0 0 3px rgba(34,197,94,0.15)",
            }}
          />
          <span
            style={{
              fontFamily: "'IBM Plex Mono',monospace",
              fontVariantNumeric: "tabular-nums",
              color: "#413B50",
            }}
          >
            {live}
          </span>{" "}
          live now
        </span>
      </header>

      <section
        className="page-pad"
        style={{
          position: "relative",
          padding: "76px 48px 60px",
          background:
            "radial-gradient(1100px 520px at 12% -10%,#EDE7FF 0%,rgba(237,231,255,0) 60%),radial-gradient(760px 420px at 88% 0%,#FFE9D8 0%,rgba(255,233,216,0) 62%),linear-gradient(180deg,#FBFAFE 0%,#FAF9FC 100%)",
          borderBottom: "1px solid #EDE8FF",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -90,
            left: 0,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at 40% 40%,rgba(183,160,255,0.26),rgba(214,203,255,0.12) 55%,rgba(214,203,255,0) 75%)",
            filter: "blur(48px)",
            pointerEvents: "none",
            animation: "orbitA 26s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -160,
            left: 0,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at 50% 50%,rgba(255,224,140,0.26),rgba(255,238,186,0.12) 55%,rgba(255,238,186,0) 75%)",
            filter: "blur(52px)",
            pointerEvents: "none",
            animation: "orbitB 34s ease-in-out infinite",
          }}
        />

        <div style={{ position: "relative", maxWidth: 1440 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 56,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 660 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#FFFFFF",
                  border: "1px solid #FFD6B8",
                  color: "#C14B12",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                  padding: "7px 13px",
                  borderRadius: 9999,
                  boxShadow: "0 1px 3px rgba(116,90,252,0.04)",
                }}
              >
                <Icon name="shop-2-bold" size={14} color="#F87830" />
                Built on Keenu One
              </span>

              <h1
                style={{
                  marginTop: 22,
                  fontSize: 60,
                  fontWeight: 800,
                  lineHeight: 1.03,
                  letterSpacing: "-0.035em",
                  color: "#1A1A1F",
                  textWrap: "balance",
                }}
              >
                Real storefronts,
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(96deg,#745AFC 0%,#9B7BFF 44%,#F87830 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ready to walk through.
                </span>
              </h1>

              <p
                style={{
                  marginTop: 20,
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "#5A5653",
                  textWrap: "pretty",
                  maxWidth: 560,
                }}
              >
                Every branded ordering site we&rsquo;ve shipped on the platform
                — concept designs and production sites already taking orders.
                Open any one and demo it live.
              </p>

              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={primaryUrl(featured)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 22px",
                    background: "#745AFC",
                    color: "#FFFFFF",
                    borderRadius: 12,
                    fontSize: 14.5,
                    fontWeight: 600,
                    boxShadow: "0 4px 16px rgba(116,90,252,0.18)",
                    transition: `all 180ms ${EASE_HOVER}`,
                  }}
                >
                  Open the featured build
                  <Icon name="arrow-right-up-linear" size={17} />
                </a>
                <a
                  href="#grid"
                  className="btn-ghost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 20px",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid #E8E6E4",
                    color: "#575065",
                    borderRadius: 12,
                    fontSize: 14.5,
                    fontWeight: 600,
                    transition: `all 180ms ${EASE_HOVER}`,
                  }}
                >
                  <Icon name="widget-4-linear" size={17} />
                  Browse all {total}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Catalog />

      <footer
        className="page-pad"
        style={{
          padding: "0 48px 40px",
          fontSize: 12.5,
          color: "#8E8985",
        }}
      >
        made by Bazaar
      </footer>
    </div>
  );
}
