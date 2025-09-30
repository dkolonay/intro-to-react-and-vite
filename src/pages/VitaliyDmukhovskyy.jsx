export default function VitaliyDmukhovskyy() {
  return (
    <div style={{ background: "#181818", color: "#fff", minHeight: "100vh", fontFamily: "Inter, sans-serif", padding: 0 }}>
      <div style={{ width: "100vw", minHeight: "100vh", background: "#181818", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", boxSizing: "border-box", padding: "3rem 0 0 0" }}>
        <h2 style={{ marginBottom: "2.5rem", fontWeight: 700, fontSize: "2.2rem", letterSpacing: "0.02em", textAlign: "center" }}>Vitaliy Dmukhovskyy</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2.5rem", width: "80vw", maxWidth: "1200px", marginBottom: "2.5rem" }}>
          {/* Profile Image */}
          <div style={{ background: "#181818", borderRadius: "28px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "400px", height: "400px", boxShadow: "0 6px 32px #0008" }}>
            <img src="https://cataas.com/cat/says/Meow?width=600&height=400" alt="Funny Cat" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }} />
          </div>
          {/* Personality Card */}
          <div style={{ background: "linear-gradient(135deg,#6a5af9,#f857a6)", borderRadius: "28px", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "400px", height: "400px", boxShadow: "0 6px 32px #0008", width: "100%", justifyContent: "flex-start" }}>
            <h3 style={{ fontSize: "2.1rem", fontWeight: "bold", color: "#fff", textAlign: "center", lineHeight: 1.1, margin: 0, marginTop: "0.5rem", marginBottom: "1.2rem" }}>About Me</h3>
            <div style={{ color: "#fff", fontSize: "1.13rem", textAlign: "left", lineHeight: 1.6, maxWidth: "90%" }}>
              My name is Vitaliy Dmukhovskyy. I'm a senior CIS major with a triple minor in Philosophy, IDC Honors, and Film Studies. During an extended leave of absence, I was working in media production and transportation logistics. I'm currently working on a mobile app development project for a non-profit community organization. Born and raised in Ukraine.
            </div>
          </div>
        </div>
        {/* Never Have I Ever Section */}
        <div style={{ width: "80vw", maxWidth: "1200px", margin: "0 auto 0 auto" }}>
          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.6rem", marginBottom: "2rem", textAlign: "center", letterSpacing: "0.01em" }}>Never Have I Ever...</h3>
          <div style={{ display: "flex", gap: "2.5rem", justifyContent: "center" }}>
            <div style={{ flex: "0 0 30%", background: "#f4f3ef", borderRadius: "18px", padding: "2.2rem 1.5rem", boxShadow: "0 4px 18px rgba(0,0,0,0.35)", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "120px", justifyContent: "center" }}>
              <span style={{ color: "#111", fontWeight: 600, fontSize: "1.13rem", textAlign: "center", lineHeight: 1.3 }}>Impressed my barista by doing a backflip</span>
            </div>
            <div style={{ flex: "0 0 30%", background: "#f4f3ef", borderRadius: "18px", padding: "2.2rem 1.5rem", boxShadow: "0 4px 18px rgba(0,0,0,0.35)", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "120px", justifyContent: "center" }}>
              <span style={{ color: "#111", fontWeight: 600, fontSize: "1.13rem", textAlign: "center", lineHeight: 1.3 }}>Did a birthright trip to Israel.</span>
            </div>
            <div style={{ flex: "0 0 30%", background: "#f4f3ef", borderRadius: "18px", padding: "2.2rem 1.5rem", boxShadow: "0 4px 18px rgba(0,0,0,0.35)", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "120px", justifyContent: "center" }}>
              <span style={{ color: "#111", fontWeight: 600, fontSize: "1.13rem", textAlign: "center", lineHeight: 1.3 }}>Bought a dog with cash</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
