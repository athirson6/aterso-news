function Home() {
  return (
    <div style={styles.container}>
      <style>{`
        @keyframes jump {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-30px);
          }
        }
        
        @keyframes hammerSwing {
          0%, 100% { 
            transform: rotateZ(-45deg) rotateY(0deg);
          }
          50% { 
            transform: rotateZ(45deg) rotateY(5deg);
          }
        }
        
        @keyframes legWalk {
          0%, 100% { 
            transform: scaleY(1);
          }
          50% { 
            transform: scaleY(0.8) translateY(3px);
          }
        }
        
        @keyframes legWalkAlt {
          0%, 100% { 
            transform: scaleY(0.8) translateY(3px);
          }
          50% { 
            transform: scaleY(1);
          }
        }
        
        @keyframes blink {
          0%, 19%, 21%, 100% { 
            opacity: 1;
          }
          20% { 
            opacity: 0.3;
          }
        }
        
        @keyframes dotsAnimation {
          0%, 33% { content: '.'; }
          34%, 66% { content: '..'; }
          67%, 100% { content: '...'; }
        }
      `}</style>

      <div style={styles.content}>
        <h1 style={styles.title}>Work in Progress</h1>

        <div style={styles.worker}>
          {/* Olhos */}
          <div style={{ ...styles.eye, left: "8px" }}></div>
          <div style={{ ...styles.eye, right: "8px" }}></div>

          {/* Cabeça */}
          <div style={styles.head}></div>

          {/* Corpo */}
          <div style={styles.body}></div>

          {/* Braço esquerdo parado */}
          <div style={styles.armLeft}></div>

          {/* Braço direito com martelo */}
          <div style={styles.armRight}>
            <div style={styles.hammer}></div>
          </div>

          {/* Pernas */}
          <div style={{ ...styles.leg, ...styles.legLeft }}></div>
          <div style={{ ...styles.leg, ...styles.legRight }}></div>
        </div>

        <p style={styles.message}>Estamos construindo algo incrível</p>
        <div style={styles.dots}>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
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
    minHeight: "100vh",
    background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
    fontFamily: '"Press Start 2P", cursive, monospace',
    overflow: "hidden",
  },
  content: {
    textAlign: "center",
    backgroundColor: "#1a1a2e",
    padding: "60px 80px",
    borderRadius: "0px",
    boxShadow: "0 0 20px rgba(255, 0, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)",
    border: "4px solid #00ffff",
    maxWidth: "600px",
  },
  title: {
    color: "#00ff00",
    marginBottom: "40px",
    fontSize: "32px",
    textShadow: "4px 4px 0px #ff00ff, 8px 8px 0px #00ffff, 12px 12px 0px #ff0000",
    animation: "blink 1.5s infinite",
    letterSpacing: "4px",
  },
  worker: {
    position: "relative",
    width: "100px",
    height: "160px",
    margin: "0 auto 50px",
    animation: "jump 0.6s infinite",
  },
  head: {
    position: "absolute",
    width: "32px",
    height: "32px",
    backgroundColor: "#ffcc99",
    top: "0",
    left: "34px",
    border: "2px solid #000",
    boxShadow: "inset -2px -2px 0 rgba(0,0,0,0.2)",
  },
  eye: {
    position: "absolute",
    width: "6px",
    height: "6px",
    backgroundColor: "#000",
    top: "10px",
    border: "1px solid #000",
    zIndex: 10,
  },
  body: {
    position: "absolute",
    width: "28px",
    height: "40px",
    backgroundColor: "#ff3333",
    top: "34px",
    left: "36px",
    border: "2px solid #000",
    boxShadow: "inset -2px 0 0 rgba(0,0,0,0.3)",
  },
  armLeft: {
    position: "absolute",
    width: "10px",
    height: "48px",
    backgroundColor: "#ffcc99",
    top: "36px",
    left: "20px",
    border: "2px solid #000",
    transformOrigin: "5px 0",
  },
  armRight: {
    position: "absolute",
    width: "10px",
    height: "48px",
    backgroundColor: "#ffcc99",
    top: "36px",
    right: "20px",
    border: "2px solid #000",
    transformOrigin: "5px 0",
    animation: "hammerSwing 0.4s infinite",
  },
  hammer: {
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundColor: "#666666",
    bottom: "-10px",
    right: "-7px",
    border: "2px solid #000",
    boxShadow: "inset -2px -2px 0 rgba(0,0,0,0.4), 2px 2px 0 rgba(255,255,255,0.3)",
  },
  leg: {
    position: "absolute",
    width: "10px",
    height: "36px",
    backgroundColor: "#333333",
    border: "2px solid #000",
    transformOrigin: "5px 0",
    top: "76px",
  },
  legLeft: {
    left: "30px",
    animation: "legWalk 0.6s infinite",
  },
  legRight: {
    right: "30px",
    animation: "legWalkAlt 0.6s infinite",
  },
  message: {
    color: "#ffff00",
    marginTop: "30px",
    fontSize: "14px",
    letterSpacing: "3px",
    textShadow: "2px 2px 0px #ff00ff",
  },
  dots: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  dot: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    backgroundColor: "#00ffff",
    border: "2px solid #00ff00",
    animation: "blink 0.6s infinite",
    boxShadow: "0 0 5px #00ffff",
  },
};

export default Home;
