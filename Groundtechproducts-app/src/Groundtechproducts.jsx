import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
];

const SERVICES = [
  {
    icon: "🤝",
    title: "Representation & Support",
    subtitle: "Sales / Services",
    opportunity:
      "Many companies expanding internationally face challenges building reliable local presence. They need partners who represent them on the ground—ensuring accountability, customer engagement, and delivery.",
    value: [
      "Dedicated sales representation to grow market share",
      "After-sales and service support to enhance satisfaction",
      "Single point of contact for international clients",
    ],
    revenue: ["Monthly/annual retainership", "Commission-based revenue share", "Hybrid model (base fee + incentive)"],
    benefits: [
      "Faster market entry with minimal upfront investment",
      "Local accountability with trusted representation",
      "Enhanced customer loyalty through responsive service",
    ],
  },
  {
    icon: "📦",
    title: "Supply Chain Management",
    subtitle: "End-to-End SCM",
    opportunity:
      "Efficient sourcing, warehousing, and logistics are critical in global competitiveness. Companies prefer specialized partners to manage complex, multi-country supply chains.",
    value: [
      "End-to-end sourcing and procurement support",
      "Global warehousing hubs in strategic locations",
      "Logistics coordination to optimize cost and lead times",
    ],
    revenue: ["Management fee for operations", "Margin-based on procurement/logistics savings", "Subscription-based digital SCM"],
    benefits: [
      "Cost savings through efficient sourcing",
      "Improved reliability with optimized logistics",
      "Better decisions via analytics and reporting",
    ],
  },
  {
    icon: "📊",
    title: "Consulting Services",
    subtitle: "Transformation & Strategy",
    opportunity:
      "We help companies build long-term competitiveness through transformation consulting—from strategy to execution.",
    value: [
      "Translate corporate strategy into functional sub-strategies",
      "Drive culture change, leadership & talent retention",
      "Market entry strategies and global expansion support",
    ],
    revenue: ["Project-based consulting fees", "Retainer-based advisory", "Performance-linked engagements"],
    benefits: [
      "Access to specialized expertise without hiring overhead",
      "Faster implementation with proven frameworks",
      "Long-term competitiveness through continuous improvement",
    ],
  },
  {
    icon: "💡",
    title: "E-Commerce Platform",
    subtitle: "Global Trade Marketplace",
    opportunity:
      "Our proprietary platform connects you to global buyers seeking quality parts and machinery—industrial, agri-equipment, and automotive components.",
    value: [
      "Global visibility with trusted supplier base",
      "Integrated logistics and compliance tools",
      "Verified suppliers from Korea, Japan, India, China, EU & US",
    ],
    revenue: ["Listing and subscription fees", "Transaction-based commissions", "Premium visibility packages"],
    benefits: [
      "Access new global markets without heavy investment",
      "Earn recurring revenue from multiple streams",
      "Strengthen brand credibility through a trusted platform",
    ],
  },
];

const TEAM = [
  {
    name: "Sunil Kulkarni",
    img: "sunil.jpg",
    role: "Market Entry (India & Europe)",
    bio: "Senior professional with Market Research, Business Development, and Supply Chain Management expertise. Sunil has led teams in both Indian and multinational companies within the construction equipment, automotive, and market research sectors and brings a global, results-oriented approach. With his Production Engineering and Business Intelligence & Analytics background, he combines corporate insight and entrepreneurial drive.",
    tags: ["Market Entry", "Business Development", "SCM"],
  },
  {
    name: "Maureen Woolshlager",
    img: "Maureen.jpg",
    role: "Operations & Scale (Americas)",
    bio: "Senior SCM and Operations expert who turns plans into processes that scale without chaos — aligning vision, systems, and execution to drive sustainable growth, empower high-performing teams, and transform complex operations into streamlined, data-informed engines of efficiency and impact.",
    tags: ["Operations", "Supply Chain", "Scale"],
  },
  {
    name: "Jochen Adam-Mueller",
    img: "Jochen.jpg",
    role: "Sales & Service (Europe & Africa)",
    bio: "Senior leader from industrial/off-highway markets, unites business development, sales and after-sales into one growth engine. Jochen has built international sales teams and global distribution networks with a practical focus on what is doable. He also supports and ensures the right leadership and talent are in place for companies seeking international expansion.",
    tags: ["Sales & Service", "Distribution", "International Growth"],
  },
];

const WHY = [
  {
    icon: "🌏",
    title: "India Roots + Global Know-how",
    desc: "Deep India market expertise combined with global SCM, Sales, and Service knowledge — giving you the best of both worlds.",
  },
  {
    icon: "⏱️",
    title: "70 Years of Experience",
    desc: "Combined operational experience in senior management roles across industrial, off-highway, automotive, and logistics sectors.",
  },
  {
    icon: "📋",
    title: "Practical Playbooks",
    desc: "We develop individual playbooks, checklists, and templates you can use immediately — no fluff, just tools that work.",
  },
  {
    icon: "💼",
    title: "Flexible Engagement Fees",
    desc: "Fees aligned to your engagement option — whether you need us to Enable your team or Execute as your expansion partner.",
  },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function scrollTo(id) {
  if (id === "#home" || id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const clean = id.replace("#", "");
  const el = document.getElementById(clean);
  if (el) {
    const offset = 72; // header height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const scrollY = useScrollY();
  const scrolled = scrollY > 50;

  return (
    <div style={{ fontFamily: "'DM Sans', 'Outfit', system-ui, sans-serif", background: "#06091F", color: "#E8EAF6", margin: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #06091F; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
        a { color: inherit; text-decoration: none; }

        .nav-link { 
          padding: 8px 14px; border-radius: 8px; color: rgba(232,234,246,0.75);
          font-size: 14px; font-weight: 500; transition: all 0.2s;
          letter-spacing: 0.02em;
        }
        .nav-link:hover { color: #FFFFFF; background: rgba(255,255,255,0.06); }

        .btn-gold {
          background: #FFFFFF;
          color: #06091F; font-weight: 700; font-size: 14px;
          padding: 11px 22px; border-radius: 6px; border: none;
          cursor: pointer; transition: all 0.25s; letter-spacing: 0.02em;
          display: inline-block;
        }
        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,255,255,0.15); background: #F0F4F8; }

        .btn-outline {
          background: transparent; border: 1.5px solid rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.85); font-weight: 500; font-size: 14px;
          padding: 10px 22px; border-radius: 6px; cursor: pointer;
          transition: all 0.25s; display: inline-block; letter-spacing: 0.02em;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.5); }

        .service-tab {
          padding: 14px 20px; border-radius: 12px; cursor: pointer;
          transition: all 0.25s; border: 1px solid transparent;
          text-align: left; background: transparent;
        }
        .service-tab:hover { background: rgba(180,200,220,0.05); }
        .service-tab.active { 
          background: rgba(255,255,255,0.06); 
          border-color: rgba(255,255,255,0.14);
        }

        .tag { 
          display: inline-block; font-size: 11px; font-weight: 600;
          padding: 4px 10px; border-radius: 4px;
          background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.12);
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        .card-hover {
          transition: all 0.3s;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(180,200,220,0.3) !important;
        }

        .form-input {
          width: 100%; padding: 13px 16px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1); 
          background: rgba(255,255,255,0.04);
          color: #E8EAF6; font-family: inherit; font-size: 14px;
          outline: none; transition: border 0.2s;
        }
        .form-input:focus { border-color: rgba(180,200,220,0.5); }
        .form-input::placeholder { color: rgba(232,234,246,0.35); }

        textarea.form-input { min-height: 120px; resize: vertical; }

        .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .grid-2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }

        @media (max-width: 900px) {
          .grid-3 { grid-template-columns: 1fr; }
          .grid-2 { grid-template-columns: 1fr; }
          .hero-grid { flex-direction: column !important; }
          .service-layout { flex-direction: column !important; }
          .contact-grid { flex-direction: column !important; }
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
        }

        .section { padding: 100px 0; }
        .container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

        .glow-dot {
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(180,200,220,0.15) 0%, transparent 70%);
          position: absolute; pointer-events: none;
        }

        .divider {
          width: 40px; height: 2px; border-radius: 0;
          background: rgba(255,255,255,0.35);
          margin: 12px 0 24px;
        }

        .section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: rgba(180,195,215,0.9); margin-bottom: 8px;
        }

        h2.display {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 700; line-height: 1.1;
          color: #fff;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px; font-weight: 700;
          color: #FFFFFF;
          line-height: 1;
        }
      `}</style>

      {/* HEADER */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(6,9,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} style={{ display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <img
              src="GroundTechProducts-02.jpg"
              alt="Ground Tech Products Logo"
              style={{ height: 48, width: "auto", display: "block" }}
              onError={e => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div style={{
              display: "none", alignItems: "center", gap: 10,
            }}>
              <div style={{
                background: "linear-gradient(135deg,rgba(200,215,230,0.85),rgba(220,230,240,0.8))",
                borderRadius: 10, padding: "6px 10px",
                fontWeight: 900, fontSize: 16, color: "#06091F", letterSpacing: 1,
              }}>GTP</div>
              <span style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>Ground Tech Products</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: "flex", gap: 4 }}>
            {NAV_LINKS.map(l => <button key={l.label} onClick={() => scrollTo(l.href)} className="nav-link" style={{background:"none",border:"none",cursor:"pointer"}}>{l.label}</button>)}
          </nav>

          <div className="desktop-cta" style={{ display: "flex", gap: 10 }}>
            <button onClick={() => scrollTo("#contact")} className="btn-outline">Book a Call</button>
            <button onClick={() => scrollTo("#services")} className="btn-gold">Explore Services</button>
          </div>

          {/* Mobile toggle */}
          <button className="mobile-toggle" style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "8px 12px", color: "#fff", cursor: "pointer", fontSize: 16 }}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu" style={{
            background: "rgba(6,9,18,0.98)", padding: "20px 24px 28px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex", flexDirection: "column", gap: 8,
          }}>
            {NAV_LINKS.map(l => (
              <button key={l.label} onClick={() => { scrollTo(l.href); setMenuOpen(false); }} className="nav-link" style={{ padding: "12px 14px", display: "block", fontSize: 15, background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left" }}>{l.label}</button>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <button onClick={() => { scrollTo("#contact"); setMenuOpen(false); }} className="btn-outline" style={{ flex: 1, textAlign: "center" }}>Book a Call</button>
              <button onClick={() => { scrollTo("#services"); setMenuOpen(false); }} className="btn-gold" style={{ flex: 1, textAlign: "center" }}>Services</button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(180,200,220,0.08) 0%, transparent 60%), #06091F",
      }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(180,200,220,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(180,200,220,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div className="glow-dot" style={{ top: "10%", left: "60%", width: 500, height: 500 }} />

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 60 }}>
          <div className="hero-grid" style={{ display: "flex", alignItems: "center", gap: 60 }}>
            <div style={{ flex: 1.1 }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 600,
                  color: "rgba(210,220,235,1)", letterSpacing: "0.05em",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.7)", animation: "pulse 2s infinite" }} />
                  Off-Highway Markets · Global Reach
                </span>
              </div>

              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 700, lineHeight: 1.06, color: "#fff", marginBottom: 20,
              }}>
                Creating Global<br />
                <span style={{ background: "linear-gradient(135deg,rgba(200,215,230,0.85),rgba(220,230,240,0.8))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Off-Highway Markets
                </span><br />
                with International Quality
              </h1>

              <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(232,234,246,0.7)", maxWidth: 520, marginBottom: 24 }}>
                We turn international ambitions in off-highway machines and parts into scalable revenue. Strong products often fail abroad — not due to quality, but due to poor go-to-market execution and weak service structures.
              </p>

              <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(232,234,246,0.6)", maxWidth: 500, marginBottom: 12 }}>We help companies succeed globally by building:</p>
              <div style={{ marginBottom: 32 }}>
                {[["🤝", "Reliable and committed", "sales & service partners"], ["📦", "A", "supply chain and operating model that delivers"], ["📐", "A", "systematic approach that scales without chaos"]].map(([icon, pre, bold], i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ fontSize: 16 }}>{icon}</span>
                    <span style={{ fontSize: 14, color: "rgba(232,234,246,0.75)", lineHeight: 1.6 }}>{pre} <strong style={{ color: "#fff" }}>{bold}</strong></span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button onClick={() => scrollTo("#contact")} className="btn-gold">Let's Talk</button>
                <button onClick={() => scrollTo("#process")} className="btn-outline">How We Work</button>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: 40, marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap" }}>
                {[["70+", "Years Combined Experience"], ["3", "Engagement Regions"], ["3", "Core Pillars"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="stat-number">{n}</div>
                    <div style={{ fontSize: 12, color: "rgba(232,234,246,0.5)", marginTop: 4, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: 0.9, position: "relative" }}>
              <div style={{
                borderRadius: 24, overflow: "hidden",
                border: "1px solid rgba(180,200,220,0.15)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
                position: "relative",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop"
                  alt="Off-highway construction excavator on job site"
                  style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(6,9,31,0.6) 0%, transparent 60%)",
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", bottom: 20, right: 20,
                  background: "rgba(6,9,18,0.85)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(180,200,220,0.3)",
                  borderRadius: 14, padding: "12px 18px",
                }}>
                  <div style={{ fontSize: 12, color: "rgba(180,195,215,0.9)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Locations</div>
                  <div style={{ fontSize: 13, color: "#fff", marginTop: 4 }}>Ireland · India · Germany · USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section" style={{ background: "#0A0E28" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 60 }}>
            <FadeIn>
              <div className="section-label">About Ground Tech Products</div>
              <h2 className="display">We turn international ambitions into scalable revenue</h2>
              <div className="divider" />
              <p style={{ color: "rgba(232,234,246,0.7)", lineHeight: 1.8, marginBottom: 24 }}>
                Strong products often fail abroad — not due to quality, but due to poor go-to-market execution and weak service structures. We fix that. Ground Tech Products specializes in creating global off-highway markets with international quality and support.
              </p>
              <p style={{ color: "rgba(232,234,246,0.7)", lineHeight: 1.8, marginBottom: 20 }}>Our clients gain:</p>
              <div style={{ marginBottom: 32 }}>
                {[["✅", "Faster access to new markets"], ["✅", "Lower ramp-up risk"], ["✅", "Sustainable, profitable growth"]].map(([icon, text], i) => (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                    <span>{icon}</span>
                    <span style={{ color: "rgba(232,234,246,0.8)", fontSize: 14 }}>{text}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Off-Highway Experts", "Global Reach", "Service-Ready"].map(v => (
                  <span key={v} className="tag">{v}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{
                  gridColumn: "1/-1", borderRadius: 20, overflow: "hidden",
                  border: "1px solid rgba(180,200,220,0.1)",
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop"
                    alt="Team collaboration"
                    style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
                  />
                </div>
                {[["🎯", "Our Mission", "Enable companies of all sizes to confidently enter and scale in new markets."],
                  ["🌐", "Our Vision", "A world where ambitious businesses can access any market with confidence and clarity."]].map(([icon, title, desc]) => (
                  <div key={title} style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16, padding: 20,
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "#fff" }}>{title}</div>
                    <div style={{ fontSize: 13, color: "rgba(232,234,246,0.6)", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section" style={{ background: "#06091F" }}>
        <div className="container">
          <FadeIn>
            <div className="section-label">What We Do</div>
            <h2 className="display" style={{ marginBottom: 8 }}>End-to-end services for<br />global growth</h2>
            <div className="divider" />
          </FadeIn>

          <div className="service-layout" style={{ display: "flex", gap: 32, marginTop: 48 }}>
            {/* Tabs */}
            <div style={{ flex: "0 0 260px", display: "flex", flexDirection: "column", gap: 8 }}>
              {SERVICES.map((s, i) => (
                <button key={i} className={`service-tab${activeService === i ? " active" : ""}`}
                  onClick={() => setActiveService(i)}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(232,234,246,0.5)", marginTop: 2 }}>{s.subtitle}</div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              {(() => {
                const s = SERVICES[activeService];
                return (
                  <div key={activeService} style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(180,200,220,0.15)",
                    borderRadius: 20, padding: 36,
                    animation: "fadeInUp 0.4s ease",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                      <span style={{ fontSize: 36 }}>{s.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 22, color: "#fff" }}>{s.title}</div>
                        <div style={{ fontSize: 13, color: "rgba(180,195,215,0.9)" }}>{s.subtitle}</div>
                      </div>
                    </div>
                    <p style={{ color: "rgba(232,234,246,0.7)", lineHeight: 1.75, marginBottom: 28, fontSize: 15 }}>{s.opportunity}</p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                      {[["Value Proposition", s.value], ["Revenue Models", s.revenue], ["Partner Benefits", s.benefits]].map(([title, items]) => (
                        <div key={title}>
                          <div style={{ fontWeight: 600, fontSize: 12, color: "rgba(180,195,215,0.9)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>{title}</div>
                          {items.map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                              <span style={{ color: "rgba(180,195,215,0.9)", marginTop: 2, fontSize: 10 }}>◆</span>
                              <span style={{ fontSize: 13, color: "rgba(232,234,246,0.75)", lineHeight: 1.5 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK - PROCESS */}
      <section id="process" className="section" style={{ background: "#06091F" }}>
        <div className="container">
          <FadeIn>
            <div className="section-label">Our Approach</div>
            <h2 className="display">How we build your<br />global growth engine</h2>
            <div className="divider" />
          </FadeIn>

          <div className="grid-3" style={{ marginTop: 48 }}>
            {[
              {
                num: "01",
                phase: "Plan",
                time: "Days 0–30",
                items: [
                  "Choose target customer segments or region and the best route to market (direct, distributor, key accounts, service partners). Define drafts for contractual agreements.",
                  "Score potential partners by coverage, capabilities, commitment, financial strength and complementary product range. Define target sales and service level.",
                  "Set clear roles, responsibilities, and simple performance KPIs. Define starter kits.",
                ],
              },
              {
                num: "02",
                phase: "Build & Test",
                time: "Days 30–90",
                items: [
                  "Create a shortlist, run company screening, agree terms, and onboard partners with ready-to-use kits.",
                  "Define pricing rules, margins, warranty terms, and tooling & spare-parts basics.",
                  "Map the full-service journey — from installation to maintenance and claims.",
                  "Set pragmatic process roadmap: quoting, deliveries, partner portal, service ticketing.",
                ],
              },
              {
                num: "03",
                phase: "Scale & Improve",
                time: "Day 90+",
                items: [
                  "Run regular business reviews and manage the pipeline.",
                  "Track a small set of health metrics (partner activity, parts availability, first-time fix).",
                  "Train sales and service, audit what works, and keep fine-tuning the playbooks.",
                ],
              },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-hover" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: 28, height: "100%",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(180,200,220,0.15)" }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 700, lineHeight: 1,
                      background: "linear-gradient(135deg,rgba(200,215,230,0.85),rgba(220,230,240,0.8))", 
                    }}>{p.num}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>{p.phase}</div>
                      <div style={{ fontSize: 12, color: "rgba(180,195,215,0.9)", fontWeight: 600 }}>{p.time}</div>
                    </div>
                  </div>
                  {p.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                      <span style={{ color: "rgba(180,195,215,0.9)", fontSize: 10, marginTop: 5, flexShrink: 0 }}>◆</span>
                      <span style={{ fontSize: 13, color: "rgba(232,234,246,0.7)", lineHeight: 1.65 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Engagement Options */}
          <FadeIn delay={0.3}>
            <div style={{
              marginTop: 40,
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, padding: 32,
            }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "rgba(180,195,215,0.9)", marginBottom: 20 }}>Engagement Options</h3>
              <div className="grid-2" style={{ gap: 24 }}>
                {[
                  ["Enable", "We design the model, set up tools and processes, train your team, and hand over a running system."],
                  ["Execute", "We act as your expansion team — find partners, prepare contracts, onboard, drive deals, set up supplies, support sales and level up service."],
                ].map(([label, desc]) => (
                  <div key={label} style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14, padding: 22,
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>
                      <span style={{ color: "rgba(180,195,215,0.9)" }}>{label}:</span>
                    </div>
                    <p style={{ fontSize: 13, color: "rgba(232,234,246,0.7)", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="section" style={{ background: "#0A0E28" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label">Why Ground Tech Products</div>
              <h2 className="display">Three reasons partners choose us</h2>
              <div className="divider" style={{ margin: "12px auto 0" }} />
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {WHY.map((w, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-hover" style={{
                  background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: 32, height: "100%",
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 26, marginBottom: 20,
                  }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ color: "rgba(232,234,246,0.65)", lineHeight: 1.75, fontSize: 14 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section" style={{ background: "#06091F" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label">Our Team</div>
              <h2 className="display">Meet the leaders driving<br />Ground Tech Products' global vision</h2>
              <div className="divider" style={{ margin: "12px auto 0" }} />
            </div>
          </FadeIn>

          <div className="grid-3">
            {TEAM.map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="card-hover" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, overflow: "hidden",
                }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1" }}>
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                      onError={e => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div style={{
                      display: "none", alignItems: "center", justifyContent: "center",
                      width: "100%", height: "100%", background: "linear-gradient(135deg,#0f1830,#1a2a50)",
                      fontSize: 48, color: "rgba(180,195,215,0.9)",
                    }}>
                      {t.name.charAt(0)}
                    </div>
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(6,9,18,0.7) 0%, transparent 50%)",
                    }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 4 }}>{t.name}</h3>
                    <div style={{ fontSize: 13, color: "rgba(180,195,215,0.9)", fontWeight: 600, marginBottom: 10 }}>{t.role}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                      {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <p style={{ fontSize: 13, color: "rgba(232,234,246,0.65)", lineHeight: 1.7 }}>{t.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="section" style={{ background: "#0A0E28" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeIn>
            <div className="section-label">Partners</div>
            <h2 className="display">Our Global Network</h2>
            <div className="divider" style={{ margin: "12px auto 24px" }} />
            <p style={{ color: "rgba(232,234,246,0.6)", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.8 }}>
              We collaborate with trusted global and local partners to strengthen opportunities and deliver results across markets.
            </p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "rgba(180,200,220,0.06)", border: "1px solid rgba(180,200,220,0.15)",
              borderRadius: 16, padding: "20px 32px", color: "rgba(232,234,246,0.5)", fontSize: 14,
            }}>
              🤝 &nbsp; Partner network details coming soon — reach out to explore collaboration opportunities.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* E-COMMERCE */}
      <section id="ecommerce" className="section" style={{ background: "#06091F" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 60, alignItems: "center" }}>
            <FadeIn>
              <div className="section-label">E-Commerce Platform</div>
              <h2 className="display">Global trade,<br />simplified</h2>
              <div className="divider" />
              <p style={{ color: "rgba(232,234,246,0.7)", lineHeight: 1.8, marginBottom: 24 }}>
                Our proprietary platform connects you to global buyers seeking quality industrial parts and machinery. Trusted supplier base from Korea, Japan, India, China, EU, and the US.
              </p>
              {["Industrial machinery & agri-equipment", "Automotive components", "Verified global suppliers & buyers", "Integrated logistics & compliance"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(180,195,215,0.9)", marginTop: 2 }}>◆</span>
                  <span style={{ color: "rgba(232,234,246,0.75)", fontSize: 14 }}>{f}</span>
                </div>
              ))}
              <div style={{ marginTop: 32 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 100, padding: "8px 18px", fontSize: 12, color: "rgba(180,195,215,0.9)", fontWeight: 600,
                }}>
                  🚀 Platform launching soon
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(180,200,220,0.15)",
                borderRadius: 24, overflow: "hidden",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
                  alt="Global trade"
                  style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 28 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[["🌏", "6+ Source Countries"], ["🏭", "3 Industry Verticals"], ["✅", "Verified Network"], ["🔒", "Compliance Built-in"]].map(([icon, label]) => (
                      <div key={label} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={{ fontSize: 18 }}>{icon}</span>
                        <span style={{ fontSize: 13, color: "rgba(232,234,246,0.75)" }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        background: "linear-gradient(135deg, rgba(180,200,220,0.12) 0%, rgba(180,200,220,0.04) 100%)",
        border: "1px solid rgba(180,200,220,0.15)",
        borderLeft: "none", borderRight: "none",
        padding: "64px 0",
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Ready to Build Your Global Growth Engine?
            </h2>
            <p style={{ color: "rgba(232,234,246,0.6)", fontSize: 15 }}>Join companies already scaling internationally with Ground Tech Products.</p>
          </div>
          <button onClick={() => scrollTo("#contact")} className="btn-gold" style={{ fontSize: 15, padding: "14px 32px" }}>Book a Consultation</button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{ background: "#0A0E28" }}>
        <div className="container">
          <div className="contact-grid" style={{ display: "flex", gap: 60 }}>
            <div style={{ flex: 1.2 }}>
              <FadeIn>
                <div className="section-label">Contact</div>
                <h2 className="display" style={{ marginBottom: 8 }}>Let's start a conversation</h2>
                <div className="divider" />
                <p style={{ color: "rgba(232,234,246,0.6)", marginBottom: 32, lineHeight: 1.75 }}>
                  Tell us about your global growth goals and we'll get back to you shortly.
                </p>
                <form action="https://formspree.io/f/meoldqbo" method="POST">
                  {[["name", "Name", "text"], ["email", "Email", "email"]].map(([id, label, type]) => (
                    <div key={id} style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "rgba(232,234,246,0.5)", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</label>
                      <input id={id} name={id} type={type} required className="form-input" placeholder={`Your ${label.toLowerCase()}`} />
                    </div>
                  ))}
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "rgba(232,234,246,0.5)", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>Message</label>
                    <textarea name="message" required className="form-input" placeholder="Tell us about your business goals..." />
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center", padding: "14px", fontSize: 15 }}>Send Message</button>
                </form>
              </FadeIn>
            </div>

            <div style={{ flex: 0.8 }}>
              <FadeIn delay={0.15}>
                <div style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20, padding: 32,
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 24 }}>Ground Tech Products</h3>

                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(210,220,235,1)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Email</div>
                    {["sunil.kulkarni@adisyncsolutions.com", "jochen@adisyncsolutions.com", "maureen@adisyncsolutions.com"].map(e => (
                      <a key={e} href={`mailto:${e}`} style={{ display: "block", fontSize: 13, color: "rgba(232,234,246,0.7)", marginBottom: 4 }}>{e}</a>
                    ))}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(210,220,235,1)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Phone</div>
                    <div style={{ fontSize: 13, color: "rgba(232,234,246,0.7)" }}>+353 870616658</div>
                    <div style={{ fontSize: 13, color: "rgba(232,234,246,0.7)" }}>+91 9765044954</div>
                  </div>

                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(210,220,235,1)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Locations</div>
                    {[["🇮🇪", "Dublin, Ireland"], ["🇮🇳", "Pune, India"], ["🇩🇪", "Cologne Bonn Region, Germany"], ["🇺🇸", "Colorado, United States"]].map(([flag, loc]) => (
                      <div key={loc} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                        <span style={{ fontSize: 18 }}>{flag}</span>
                        <span style={{ fontSize: 13, color: "rgba(232,234,246,0.7)" }}>{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#04061A", borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 0",
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="GroundTechProducts-02.jpg"
              alt="Ground Tech Products"
              style={{ height: 36, width: "auto" }}
              onError={e => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span style={{ display: "none", fontWeight: 700, fontSize: 14, color: "rgba(180,195,215,0.9)" }}>Ground Tech Products</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(232,234,246,0.35)" }}>© 2025 Ground Tech Products Ltd. All rights reserved.</p>
          <div style={{ display: "flex", gap: 16 }}>
            {NAV_LINKS.slice(0, 4).map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: 12, color: "rgba(232,234,246,0.45)", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "rgba(200,215,230,0.9)"}
                onMouseLeave={e => e.target.style.color = "rgba(232,234,246,0.45)"}>{l.label}</a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none} }
      `}</style>
    </div>
  );
}
