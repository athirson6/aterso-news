function Home() {
  return (
    <div style={styles.container}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 65%; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.name}>Athirson</h1>
          <p style={styles.subtitle}>Full Stack Developer</p>
        </div>

        <div style={styles.status}>
          <div style={styles.constructionIcon}>
            <div style={styles.hammer}></div>
            <div style={styles.nail}></div>
          </div>
          <h2 style={styles.statusTitle}>Portfolio Under Construction</h2>
          <p style={styles.statusText}>
            Building something amazing. Check back soon!
          </p>
        </div>

        <div style={styles.sections}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>About</h3>
            <p style={styles.sectionDesc}>Coming Soon</p>
          </div>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Projects</h3>
            <p style={styles.sectionDesc}>Coming Soon</p>
          </div>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Contact</h3>
            <p style={styles.sectionDesc}>Coming Soon</p>
          </div>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>Built with ❤️ using Next.js</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "0",
    margin: "0",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "90%",
    maxHeight: "90vh",
    overflowY: "auto",
    animation: "fadeIn 1s ease-out",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  name: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0 0 10px 0",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    margin: "0",
    fontWeight: "400",
  },
  status: {
    textAlign: "center",
    marginBottom: "50px",
  },
  constructionIcon: {
    position: "relative",
    width: "60px",
    height: "60px",
    margin: "0 auto 20px",
    animation: "float 3s ease-in-out infinite",
  },
  hammer: {
    position: "absolute",
    width: "40px",
    height: "8px",
    backgroundColor: "#8b5cf6",
    top: "20px",
    left: "10px",
    borderRadius: "4px",
    transform: "rotate(-45deg)",
  },
  nail: {
    position: "absolute",
    width: "4px",
    height: "20px",
    backgroundColor: "#ef4444",
    top: "35px",
    left: "28px",
    borderRadius: "2px",
  },
  statusTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1a1a1a",
    margin: "0 0 10px 0",
  },
  statusText: {
    fontSize: "16px",
    color: "#666",
    margin: "0",
    lineHeight: "1.6",
  },
  progressSection: {
    marginBottom: "50px",
  },
  progressLabel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "14px",
    color: "#666",
    fontWeight: "500",
  },
  progressBar: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e5e7eb",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #8b5cf6 0%, #06b6d4 100%)",
    borderRadius: "4px",
    animation: "progress 2s ease-out",
  },
  sections: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },
  section: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1a1a1a",
    margin: "0 0 8px 0",
  },
  sectionDesc: {
    fontSize: "14px",
    color: "#64748b",
    margin: "0",
    fontStyle: "italic",
  },
  footer: {
    textAlign: "center",
    paddingTop: "30px",
    borderTop: "1px solid #e2e8f0",
  },
  footerText: {
    fontSize: "14px",
    color: "#64748b",
    margin: "0",
  },
};

export default Home;
