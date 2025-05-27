// /**
//  * Images are now imported from src/assets/breakthrough/
//  */
import React, { useEffect } from "react";
import "../styles/breakthroughPage.css";
import img1 from '../assets/breakthrough/img1.jpeg';
import img2 from '../assets/breakthrough/img2.jpeg';
import img3 from '../assets/breakthrough/img3.jpeg';

const BreakthroughPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="breakthrough-root">
      {/* Hero Banner */}
      <section className="breakthrough-hero">
        <div className="breakthrough-hero-overlay">
          <h1>What's Next in AI: 2025 Breakthroughs</h1>
          <p className="breakthrough-hero-sub">Autonomous agent teams, multimodal reasoning, and edge-ready chips are about to reshape everything.</p>
          <button className="breakthrough-cta">Dive In</button>
        </div>
        <img
          src={img1}
          alt="Abstract AI concept background for 2025 breakthroughs"
          className="breakthrough-hero-bg"
        />
      </section>

      {/* Feature Grid */}
      <section className="breakthrough-features">
        <div className="breakthrough-feature-grid">
          <div className="breakthrough-feature-card">
            <img src={img2} alt="Team of AI agents collaborating" className="breakthrough-feature-img" style={{objectPosition:'0% 50%'}} />
            <h2>Autonomous Agent Teams</h2>
            <p>AI squads that write, test, and deploy code without human hand-offs are moving from research to real products.</p>
          </div>
          <div className="breakthrough-feature-card">
            <img src={img2} alt="Multimodal LLM interface" className="breakthrough-feature-img" style={{objectPosition:'50% 50%'}} />
            <h2>Multimodal LLMs</h2>
            <p>New models reason across text, images, and audio in one coherent conversation—unlocking richer interfaces.</p>
          </div>
          <div className="breakthrough-feature-card">
            <img src={img2} alt="Edge AI chip and IoT devices" className="breakthrough-feature-img" style={{objectPosition:'100% 50%'}} />
            <h2>Edge AI & TinyML</h2>
            <p>Ultra-compact neural nets bring real-time intelligence to phones, drones, and IoT devices without the cloud.</p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="breakthrough-workflow">
        <div className="breakthrough-workflow-content">
          <h2>From Prototype to Real-World Impact</h2>
          <p>Research breakthroughs feed production models, which miniaturize into edge deployments—completing the loop.</p>
        </div>
        <img
          src={img3}
          alt="Workflow from research to edge deployment"
          className="breakthrough-workflow-img"
        />
      </section>
    </main>
  );
};

export default BreakthroughPage; 