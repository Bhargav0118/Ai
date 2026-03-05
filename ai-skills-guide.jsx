import { useState } from "react";

const skills = [
  {
    id: 1,
    title: "Generative AI Engineer",
    emoji: "🤖",
    tagline: "Build & deploy AI models",
    time: "6–8 months",
    difficulty: "Hard",
    needsCoding: true,
    usSalary: "$132K – $200K+",
    indiaSalary: "₹20L – ₹50L",
    why: "Massive talent shortage globally. Companies can't find enough people.",
    learn: ["Python + Math basics (Month 1–2)", "Neural networks & deep learning (Month 3)", "LLMs & Transformers (Month 4)", "Deploy on Cloud (Month 5)", "Build real projects (Month 6–8)"],
    tools: ["Python", "PyTorch", "LangChain", "Docker", "AWS/GCP"],
    color: "#FF6B35",
  },
  {
    id: 2,
    title: "Agentic AI Orchestrator",
    emoji: "🕸️",
    tagline: "Build autonomous AI systems",
    time: "6–9 months",
    difficulty: "Hard",
    needsCoding: true,
    usSalary: "$150K – $210K+",
    indiaSalary: "₹25L – ₹55L",
    why: "Brand new role. AI agents that work on their own — hot frontier right now.",
    learn: ["Understand LLMs first (Month 1–3)", "Learn agent frameworks (Month 4–5)", "Build multi-agent pipelines (Month 6–7)", "Deploy autonomous systems (Month 8–9)"],
    tools: ["LangChain", "CrewAI", "AutoGPT", "Python", "APIs"],
    color: "#7B2FBE",
  },
  {
    id: 3,
    title: "MLOps Engineer",
    emoji: "⚙️",
    tagline: "Deploy AI to production at scale",
    time: "3–6 months",
    difficulty: "Medium",
    needsCoding: true,
    usSalary: "$127K – $180K",
    indiaSalary: "₹15L – ₹30L",
    why: "Every company building AI needs this. Bridges science and real-world systems.",
    learn: ["Linux & Git basics (Month 1)", "Docker & Kubernetes (Month 2)", "CI/CD pipelines for ML (Month 3–4)", "Cloud certifications (Month 5–6)"],
    tools: ["Docker", "Kubernetes", "AWS/Azure/GCP", "Git", "MLflow"],
    color: "#0EA5E9",
  },
  {
    id: 4,
    title: "AI Product Manager",
    emoji: "🎯",
    tagline: "Lead AI products without coding",
    time: "12 months",
    difficulty: "Medium",
    needsCoding: false,
    usSalary: "$140K – $190K",
    indiaSalary: "₹18L – ₹40L",
    why: "No coding required! Bridge between business and AI teams. Huge demand.",
    learn: ["AI basics & vocabulary (Month 1–3)", "Prototype with no-code tools (Month 4–6)", "Learn to measure AI quality (Month 7–9)", "Lead full AI product launch (Month 10–12)"],
    tools: ["Cursor", "Notion AI", "Figma", "LLM APIs", "Analytics tools"],
    color: "#10B981",
  },
  {
    id: 5,
    title: "AI Ethics & Governance",
    emoji: "⚖️",
    tagline: "Keep AI safe & legal",
    time: "4–6 months",
    difficulty: "Easy–Medium",
    needsCoding: false,
    usSalary: "$105K – $195K",
    indiaSalary: "₹12L – ₹28L",
    why: "Governments worldwide passing AI laws. Every company needs compliance now.",
    learn: ["Study EU AI Act & global regulations (Month 1–2)", "Learn bias auditing methods (Month 3)", "Risk management frameworks (Month 4)", "Get certified (CAEGP or ISACA) (Month 5–6)"],
    tools: ["Bias audit tools", "Legal frameworks", "Risk matrices", "Policy writing"],
    color: "#F59E0B",
  },
  {
    id: 6,
    title: "Prompt Engineer",
    emoji: "✍️",
    tagline: "Master talking to AI",
    time: "2–4 months",
    difficulty: "Easy",
    needsCoding: false,
    usSalary: "$95K – $300K+",
    indiaSalary: "₹10L – ₹30L",
    why: "Lowest barrier to entry. Domain experts (doctors, lawyers, finance) earn most.",
    learn: ["Understand how LLMs think (Month 1)", "Learn Chain-of-Thought prompting (Month 2)", "Specialize in one domain (Month 3)", "Build a portfolio of prompt systems (Month 4)"],
    tools: ["ChatGPT", "Claude", "GPT-4 API", "LangSmith", "Domain expertise"],
    color: "#EC4899",
  },
];

const stats = [
  { label: "New jobs by 2030", value: "170M", sub: "AI will create" },
  { label: "Jobs displaced", value: "92M", sub: "AI will replace" },
  { label: "Net job gain", value: "78M", sub: "More jobs overall" },
  { label: "AI salary premium", value: "43%", sub: "More than peers" },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "nocoding"
    ? skills.filter(s => !s.needsCoding)
    : filter === "coding"
    ? skills.filter(s => s.needsCoding)
    : skills;

  const skill = skills.find(s => s.id === selected);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0A0A0F", minHeight: "100vh", color: "#E8E8F0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0A0F; }
        .card { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .card:hover { transform: translateY(-4px); }
        .tag { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-family: 'DM Sans', sans-serif; font-weight: 500; letter-spacing: 0.5px; }
        .modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .pill { padding: 6px 16px; border-radius: 30px; font-size: 13px; font-family: 'DM Sans', sans-serif; cursor: pointer; border: 1px solid; transition: all 0.15s; }
        .step { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 10px; }
        .step-num { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-family: 'DM Sans', sans-serif; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #1a0a2e 50%, #0A0A0F 100%)", borderBottom: "1px solid #1e1e35", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 3, color: "#7B2FBE", textTransform: "uppercase", marginBottom: 16 }}>
            2026 Market Research Report
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            High-Income AI Skills<br/>
            <span style={{ color: "#FF6B35" }}>That Actually Pay</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#888", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.6 }}>
            AI is replacing jobs AND creating new ones. Here are the 6 skills that put you on the <strong style={{color:"#ccc"}}>creation</strong> side, not the replacement side.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #2a2a45", borderRadius: 12, padding: "16px 24px", textAlign: "center", minWidth: 130 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#FF6B35" }}>{s.value}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#666", marginTop: 2 }}>{s.sub}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#aaa", marginTop: 1 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Big Insight */}
      <div style={{ background: "#FF6B35", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#fff", maxWidth: 700, margin: "0 auto" }}>
          💡 <strong>The key insight:</strong> AI skills earn you a <strong>43% higher salary</strong> than peers in the same role. And the talent shortage is severe — companies can't find enough people.
        </p>
      </div>

      {/* Filter */}
      <div style={{ maxWidth: 900, margin: "32px auto 0", padding: "0 24px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#666", alignSelf: "center", marginRight: 4 }}>Filter:</span>
          {[["all","All Skills"], ["coding","Needs Coding"], ["nocoding","No Coding Required ✨"]].map(([val, label]) => (
            <button key={val} onClick={() => setFilter(val)} className="pill"
              style={{ background: filter === val ? "#FF6B35" : "transparent", color: filter === val ? "#fff" : "#888", borderColor: filter === val ? "#FF6B35" : "#333" }}>
              {label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, paddingBottom: 60 }}>
          {filtered.map(s => (
            <div key={s.id} className="card" onClick={() => setSelected(s.id)}
              style={{ background: "#111118", border: `1px solid #1e1e35`, borderRadius: 16, padding: 24, borderTop: `3px solid ${s.color}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 32 }}>{s.emoji}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
                  <span className="tag" style={{ background: s.needsCoding ? "rgba(123,47,190,0.2)" : "rgba(16,185,129,0.2)", color: s.needsCoding ? "#9B59F4" : "#10B981" }}>
                    {s.needsCoding ? "Coding" : "No Coding"}
                  </span>
                  <span className="tag" style={{ background: "rgba(255,255,255,0.05)", color: "#888" }}>
                    {s.difficulty}
                  </span>
                </div>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#666", marginBottom: 16 }}>{s.tagline}</p>

              <div style={{ borderTop: "1px solid #1e1e35", paddingTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#555" }}>⏱ Time to learn</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#ccc", fontWeight: 500 }}>{s.time}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#555" }}>🇺🇸 US Salary</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: s.color, fontWeight: 600 }}>{s.usSalary}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#555" }}>🇮🇳 India Salary</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: s.color, fontWeight: 600 }}>{s.indiaSalary}</span>
                </div>
              </div>

              <div style={{ marginTop: 16, padding: "10px 12px", background: "rgba(255,255,255,0.03)", borderRadius: 8, borderLeft: `2px solid ${s.color}` }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#888", lineHeight: 1.5 }}>{s.why}</p>
              </div>

              <div style={{ marginTop: 14, fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: s.color, display: "flex", alignItems: "center", gap: 4 }}>
                See learning roadmap →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && skill && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <div onClick={e => e.stopPropagation()}
            style={{ background: "#111118", border: `1px solid #2a2a45`, borderTop: `4px solid ${skill.color}`, borderRadius: 20, padding: 32, maxWidth: 560, width: "100%", maxHeight: "85vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <span style={{ fontSize: 40 }}>{skill.emoji}</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, marginTop: 8 }}>{skill.title}</h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#666" }}>{skill.tagline}</p>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#555", fontSize: 24, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>

            {/* Salary box */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
              {[["⏱ Learn in", skill.time], ["🇺🇸 US Pay", skill.usSalary], ["🇮🇳 India Pay", skill.indiaSalary]].map(([label, val]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#555", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: skill.color }}>{val}</div>
                </div>
              ))}
            </div>

            {/* Why */}
            <div style={{ marginBottom: 20, padding: "14px 16px", background: "rgba(255,255,255,0.03)", borderRadius: 10, borderLeft: `3px solid ${skill.color}` }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#555", marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Why this skill</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#bbb", lineHeight: 1.6 }}>{skill.why}</p>
            </div>

            {/* Roadmap */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Step-by-step roadmap</div>
              {skill.learn.map((step, i) => (
                <div key={i} className="step">
                  <div className="step-num" style={{ background: `rgba(${skill.color.slice(1).match(/../g).map(x=>parseInt(x,16)).join(",")}, 0.2)`, color: skill.color }}>
                    {i + 1}
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#ccc", lineHeight: 1.5, paddingTop: 2 }}>{step}</p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Tools you'll use</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skill.tools.map(t => (
                  <span key={t} className="tag" style={{ background: "rgba(255,255,255,0.06)", color: "#aaa", border: "1px solid #2a2a45" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
