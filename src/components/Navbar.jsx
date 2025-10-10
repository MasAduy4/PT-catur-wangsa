// src/components/Navbar.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

/* ================================ */
/*            NAVBAR ROOT           */
/* ================================ */
export default function Navbar() {
  const location = useLocation();
  const activeHref = location.pathname;

  const items = useMemo(
    () => [
      { label: "BERANDA", href: "/" },
      { label: "TENTANG KAMI", href: "/about" },
      { label: "PRODUK", href: "/produk" },
      { label: "KONTAK", href: "/#contact" },
    ],
    []
  );

  return (
    <div className="sticky top-0 z-[1000] bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="w-full flex justify-center py-4">
          <PillBar
            logo="/logo.png"
            logoAlt="PT Catur Wangsa Indah"
            items={items}
            activeHref={activeHref}
            baseColor="#14b8a6"   // teal untuk flood / aksen
            pillBg="#ffffff"      // kapsul putih
            hoveredText="#ffffff" // teks saat hover (di atas flood) -> putih
            textColor="#000000"   // <<-- TEKS DEFAULT HITAM
          />
        </div>
      </div>
    </div>
  );
}

/* ================================ */
/*             PILL BAR             */
/* ================================ */
function PillBar({
  logo,
  logoAlt,
  items,
  activeHref,
  ease = "power3.easeOut",
  baseColor = "#14b8a6",
  pillBg = "#ffffff",
  hoveredText = "#ffffff",
  textColor = "#000000",   // <<-- warna teks default
}) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const tweenRefs = useRef([]);
  const mobileRef = useRef(null);
  const burgerRef = useRef(null);
  const shellRef = useRef(null);

  // ukuran (figma)
  const NAV_H = 76;
  const PILL_H = 54;
  const LOGO_BOX = 72;
  const LOGO_IMG = 60;
  const FONT = "15px";
  const CTA_FONT = "15px";

  const didInit = useRef(false);

  useEffect(() => {
    const layout = () => {
      tlRefs.current.forEach(t => t?.kill());
      tweenRefs.current.forEach(t => t?.kill());
      tlRefs.current = [];
      tweenRefs.current = [];

      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const { width: w, height: h } = pill.getBoundingClientRect();

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector(".pill-label");
        const hover = pill.querySelector(".pill-label-hover");
        if (label) gsap.set(label, { y: 0, opacity: 1 });
        if (hover) gsap.set(hover, { y: h + 12, opacity: 0 });

        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        if (hover) {
          gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hover, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }
        tlRefs.current.push(tl);
      });
    };

    if (!didInit.current) {
      didInit.current = true;
      if (shellRef.current) {
        gsap.fromTo(shellRef.current, { opacity: 0, y: -10, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease });
      }
    }

    if (mobileRef.current) gsap.set(mobileRef.current, { visibility: "hidden", opacity: 0, y: 10 });

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    document.fonts?.ready?.then(layout).catch(() => {});

    return () => {
      window.removeEventListener("resize", onResize);
      tlRefs.current.forEach(t => t?.kill());
      tweenRefs.current.forEach(t => t?.kill());
    };
  }, [ease, items, activeHref]);

  const enter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" });
  };
  const leave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);

    const lines = burgerRef.current?.querySelectorAll(".hamburger-line");
    const menu = mobileRef.current;

    if (lines?.length === 2) {
      gsap.to(lines[0], { rotation: next ? 45 : 0, y: next ? 4 : 0, duration: 0.25, ease });
      gsap.to(lines[1], { rotation: next ? -45 : 0, y: next ? -4 : 0, duration: 0.25, ease });
    }
    if (menu) {
      if (next) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, ease });
      } else {
        gsap.to(menu, { opacity: 0, y: 10, duration: 0.2, ease, onComplete: () => gsap.set(menu, { visibility: "hidden" }) });
      }
    }
  };

  const isExternal = (href) =>
    href?.startsWith("http") || href?.startsWith("//") || href?.startsWith("mailto:") || href?.startsWith("tel:");

  const handleMenuClick = (e, href, i) => {
    leave(i);
    if (activeHref === href) {
      e.preventDefault();
      return;
    }
    if (href.startsWith("/#")) {
      if (window.location.pathname !== "/") {
        e.preventDefault();
        navigate("/" + href.slice(1));
      }
      return;
    }
    e.preventDefault();
    navigate(href);
  };

  const PillItem = ({ item, i }) => {
    const isAct = activeHref === item.href;
    const common =
      "relative overflow-hidden inline-flex items-center justify-center rounded-full px-6 font-semibold uppercase whitespace-nowrap";
    const style = {
      height: PILL_H,
      background: pillBg,
      color: textColor,          // <<-- teks default HITAM
      fontSize: FONT,
      letterSpacing: "0.2px",
      boxShadow: isAct ? `inset 0 0 0 999px ${baseColor}22` : "none",
    };

    const content = (
      <>
        <span
          className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
          style={{ background: baseColor }}
          ref={(el) => (circleRefs.current[i] = el)}
        />
        <span className="label-stack relative inline-block leading-[1] z-[2]">
          {/* label dasar (HITAM) */}
          <span className="pill-label relative z-[2] inline-block leading-[1]">{item.label}</span>
          {/* label atas untuk hover (PUTIH) */}
          <span
            className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
            style={{ color: hoveredText }}
            aria-hidden="true"
          >
            {item.label}
          </span>
        </span>
        {isAct && (
          <span
            className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 w-3.5 h-3.5 rounded-full z-[4]"
            style={{ background: baseColor }}
          />
        )}
      </>
    );

    if (isExternal(item.href) || item.href.startsWith("/#")) {
      return (
        <li role="none" className="flex" style={{ height: PILL_H }}>
          <a
            role="menuitem"
            href={item.href}
            className={common}
            style={style}
            onMouseEnter={() => enter(i)}
            onMouseLeave={() => leave(i)}
            onClick={(e) => {
              if (item.href.startsWith("/#") && window.location.pathname !== "/") {
                e.preventDefault();
                navigate("/" + item.href.slice(1));
              }
            }}
          >
            {content}
          </a>
        </li>
      );
    }

    return (
      <li role="none" className="flex" style={{ height: PILL_H }}>
        <Link
          role="menuitem"
          to={item.href}
          className={common}
          style={style}
          onMouseEnter={() => enter(i)}
          onMouseLeave={() => leave(i)}
          onClick={(e) => handleMenuClick(e, item.href, i)}
        >
          {content}
        </Link>
      </li>
    );
  };

  return (
    <>
      {/* BINGKAI OVAL BESAR */}
      <nav
        ref={shellRef}
        className="w-full max-w-[1000px] flex items-center justify-between rounded-full px-3 md:px-4 shadow-[0_18px_40px_rgba(2,18,8,0.10)]"
        style={{ height: NAV_H, background: pillBg, border: `1px solid ${baseColor}22` }}
        aria-label="Primary"
      >
        {/* Logo besar (non-klik) */}
        <div
          aria-label="Logo"
          className="shrink-0 rounded-full overflow-hidden grid place-items-center select-none"
          style={{ width: LOGO_BOX, height: LOGO_BOX, background: "#f0fdf4" }}
        >
          <img
            src={logo}
            alt={logoAlt}
            className="object-contain rounded-full pointer-events-none"
            style={{ width: LOGO_IMG, height: LOGO_IMG }}
          />
        </div>

        {/* Menu tengah */}
        <div className="hidden md:flex items-center" style={{ height: NAV_H }}>
          <ul className="list-none flex items-center gap-3 m-0 p-0" style={{ height: PILL_H }}>
            {items.map((it, i) => (
              <PillItem key={it.href} item={it} i={i} />
            ))}
          </ul>
        </div>

        {/* CTA kanan */}
        <Link
          to="/about#buy"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 font-semibold text-white"
          style={{ background: baseColor, height: PILL_H, fontSize: CTA_FONT }}
          onClick={(e) => {
            if (activeHref === "/about") {
              e.preventDefault();
              window.location.assign("/about#buy");
            }
          }}
        >
          <span>🛍</span>
          <span className="uppercase">Beli Sekarang</span>
        </Link>

        {/* Burger mobile */}
        <button
          ref={burgerRef}
          onClick={toggle}
          className="md:hidden rounded-full border border-transparent grid place-content-center"
          style={{ width: LOGO_BOX, height: LOGO_BOX, background: "#f0fdf4" }}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line block w-6 h-[3px] rounded mb-1" style={{ background: baseColor }} />
          <span className="hamburger-line block w-6 h-[3px] rounded" style={{ background: baseColor }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        ref={mobileRef}
        className="md:hidden absolute left-4 right-4 mt-3 rounded-[26px] shadow-[0_12px_34px_rgba(0,0,0,0.14)] origin-top z-[999]"
        style={{ background: pillBg }}
      >
        <ul className="list-none m-0 p-3 flex flex-col gap-2">
          {items.map((it, i) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="block rounded-full px-5 py-3 font-medium"
                style={{ color: textColor, fontSize: FONT }}  // <<-- HITAM juga di mobile
                onClick={(e) => {
                  setOpen(false);
                  if (activeHref === it.href) {
                    e.preventDefault();
                    return;
                  }
                  if (!it.href.startsWith("/#")) {
                    e.preventDefault();
                    navigate(it.href);
                  } else if (window.location.pathname !== "/") {
                    e.preventDefault();
                    navigate("/" + it.href.slice(1));
                  }
                }}
                onMouseEnter={() => enter(i)}
                onMouseLeave={() => leave(i)}
              >
                {it.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <Link
              to="/about#buy"
              className="block text-center rounded-full px-5 py-3 font-semibold text-white"
              style={{ background: baseColor, fontSize: CTA_FONT }}
              onClick={() => setOpen(false)}
            >
              🛍 Beli Sekarang
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
