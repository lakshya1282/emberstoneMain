export default function CraftShowcase() {
  return (
    <section id="craft-showcase" className="craft-section">
      <div className="craft-content-wrapper">
        <div className="craft-left-container">
          <img src="/shaped-by-craft.png" alt="SHAPED BY CRAFT" className="craft-title-img" />
        </div>
        
        <div className="craft-right-container">
          <div className="craft-spec-block">
            <div className="craft-spec-header">
              <span className="craft-spec-number">3x</span>
              <span className="craft-spec-subtitle">TRIPLE<br/>DISTILLED</span>
            </div>
            <div className="craft-divider"></div>
            <p className="craft-spec-description">
              A hallmark of Irish whiskey tradition,<br/>
              triple distillation refines the spirit,<br/>
              creating exceptional smoothness while<br/>
              preserving depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
