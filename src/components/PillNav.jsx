import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

/**
 * PILL NAV – layout & interaksi persis Figma:
 * [logo bulat kecil] [bar putih berisi: pills menu + CTA hijau]
 * Logo non-klik. Center absolut di container.
 */
export default function PillNav({
  logo,
  logoAlt = "Logo",
  items = [],
  activeHref = "/",
  className = "",
  ease = "power3.easeOut",
  baseColor = "#14b8a6",
  barBg = "#ffffff",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#0f172a",
  initialLoadAnimation = true,
  showCta = true,
  ctaHref = "/about#buy",
  ctaLabel = "Beli Sekarang",
}) {
  const [open, setOpen] = useState(false);

  // refs animasi
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  const logoRef = useRef(null);       // logo non-klik
  const barRef = useRef(null);        // kapsul putih tengah
  const burgerRef = useRef(null);
  const mobileRef = useRef(null);

  // ukuran visual (match Figma)
  const NAV_H = 50;   // tinggi unit bar
  const LOGO_BOX = 50;
  const LOGO_IMG = 50;
  const FONT = "15px";

  /* -------------------- Layout + GSAP -------------------- */
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const { width: w, height: h } = pill.getBoundingClientRect();

        // geometri flood-circle
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        Object.assign(circle.style, {
          width: `${D}px`,
          height: `${D}px`,
          bottom: `-${delta}px`,
        });

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const i = circleRefs.current.indexOf(circle);
        if (i === -1) return;

        tlRefs.current[i]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }
        tlRefs.current[i] = tl;
      });
    };

    layout();
    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    if (document.fonts?.ready) document.fonts.ready.then(layout).catch(() => {});

    // mobile dropdown default hidden
    if (mobileRef.current) gsap.set(mobileRef.current, { visibility: "hidden", opacity: 0, y: 10 });

    // entry anim seperti demo
    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.set(logoRef.current, { scale: 0 });
        gsap.to(logoRef.current, { scale: 1, duration: 0.6, ease });
      }
      if (barRef.current) {
        gsap.set(barRef.current, { opacity: 0, y: 6 });
        gsap.to(barRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.05, ease });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const enter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" });
  };
  const leave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);

    const lines = burgerRef.current?.querySelectorAll(".hamburger-line");
    const menu = mobileRef.current;

    if (lines?.length === 2) {
      gsap.to(lines[0], { rotation: next ? 45 : 0, y: next ? 3 : 0, duration: 0.25, ease });
      gsap.to(lines[1], { rotation: next ? -45 : 0, y: next ? -3 : 0, duration: 0.25, ease });
    }
    if (menu) {
      if (next) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, ease });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => gsap.set(menu, { visibility: "hidden" }),
        });
      }
    }
  };

  // eksternal/hash – pakai <a>
  const isExternal = (href = "") =>
    href.startsWith("http") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("/#");

  const isRouterLink = (href = "") => href && !isExternal(href);

  // cegah reload/blank bila klik item yg sudah aktif
  const preventWhenActive = (e, href) => {
    if (activeHref === href) e.preventDefault();
  };

  /* -------------------- RENDER -------------------- */

  return (
    // wrapper pusat
    <div className="w-full flex justify-center">
      {/* cluster tengah persis Figma: logo + kapsul bar (menu + CTA) */}
      <div className={`inline-flex items-center gap-3 px-2 md:px-0 ${className}`}>

        {/* logo bulat kecil (NON-klik) */}
        <div
          ref={logoRef}
          aria-label="Logo"
          className="rounded-full overflow-hidden grid place-items-center select-none pointer-events-none"
          style={{ width: LOGO_BOX, height: LOGO_BOX, background: baseColor }}
        >
          <img
            src={logo}
            alt={logoAlt}
            className="object-contain rounded-full pointer-events-none"
            style={{ width: LOGO_IMG, height: LOGO_IMG }}
          />
        </div>

        {/* kapsul putih berisi MENU + CTA */}
        <nav
          ref={barRef}
          aria-label="Primary"
          className="hidden md:flex items-center rounded-full border px-2"
          style={{
            height: NAV_H,
            background: barBg,
            borderColor: "#e6f7f3", // tipis hijau muda (sesuai Figma)
            boxShadow: "0 10px 28px rgba(2,18,8,0.08)",
          }}
        >
          {/* MENU PILLS */}
          <ul
            role="menubar"
            className="list-none flex items-center m-0 py-[3px] pr-2"
            style={{ gap: 6 }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle = {
                background: pillColor,
                color: pillTextColor,
                paddingLeft: 18,
                paddingRight: 18,
                height: NAV_H - 6,
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{ background: baseColor, willChange: "transform" }}
                    aria-hidden="true"
                    ref={(el) => (circleRefs.current[i] = el)}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span className="pill-label relative z-[2] inline-block leading-[1]" style={{ willChange: "transform" }}>
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{ color: hoveredPillTextColor, willChange: "transform, opacity" }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>

                  {/* dot aktif kecil di bawah item */}
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: baseColor }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                "relative overflow-hidden inline-flex items-center justify-center rounded-full font-semibold text-[15px] uppercase tracking-[0.2px] whitespace-nowrap leading-none";

              return (
                <li key={item.href} role="none" className="flex">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      to={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.label}
                      onMouseEnter={() => enter(i)}
                      onMouseLeave={() => leave(i)}
                      onClick={(e) => preventWhenActive(e, item.href)}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.label}
                      onMouseEnter={() => enter(i)}
                      onMouseLeave={() => leave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA hijau di kanan dalam bar */}
          {showCta && (
            <Link
              to={ctaHref}
              className="ml-1 inline-flex items-center gap-2 rounded-full font-semibold text-white px-4"
              style={{
                height: NAV_H - 10,
                background: baseColor,
                boxShadow: "0 6px 18px rgba(20,184,166,0.35)",
              }}
            >
              <span>🛍</span>
              <span className="uppercase">{ctaLabel}</span>
            </Link>
          )}
        </nav>

        {/* burger untuk mobile (logo tetap kiri, burger kanan — bar putih disembunyikan) */}
        <button
          ref={burgerRef}
          onClick={toggle}
          className="md:hidden rounded-full border border-transparent grid place-content-center"
          style={{ width: LOGO_BOX, height: LOGO_BOX, background: "#f0fdf4", boxShadow: "0 6px 18px rgba(2,18,8,0.06)" }}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line block w-6 h-[3px] rounded mb-1" style={{ background: baseColor }} />
          <span className="hamburger-line block w-6 h-[3px] rounded" style={{ background: baseColor }} />
        </button>
      </div>

      {/* Dropdown mobile full width (margin 16) */}
      <div
        ref={mobileRef}
        className="md:hidden absolute left-4 right-4 mt-3 rounded-[26px] shadow-[0_12px_34px_rgba(0,0,0,0.14)] origin-top z-[999]"
        style={{ background: barBg }}
      >
        <ul className="list-none m-0 p-3 flex flex-col gap-2">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="block rounded-full px-5 py-3 font-medium"
                style={{ color: pillTextColor, fontSize: FONT, background: pillColor }}
                onClick={() => setOpen(false)}
              >
                {it.label}
              </a>
            </li>
          ))}
          {showCta && (
            <li className="pt-1">
              <Link
                to={ctaHref}
                className="block text-center rounded-full px-5 py-3 font-semibold text-white"
                style={{ background: baseColor, fontSize: FONT }}
                onClick={() => setOpen(false)}
              >
                🛍 {ctaLabel}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
