/* eslint-disable @next/next/no-img-element */
export default function Story() {
  return (
    <section id="story" className="pure-black-section" data-aos="fade-up">
      <div className="story-layout-wrapper">
        <div className="story-left">
          <img src="/character-emerges.png" alt="A CHARACTER EMERGES" className="story-title-img" />
        </div>

        <div className="story-center">
          <img 
            src="/Adobe Express 2026-04-13 13.44.32.png" 
            alt="Emberstone Bottle" 
            className="bottle-img"
            data-aos="zoom-in"
          />
        </div>

        <div className="story-right">
          <div className="specs-table">
            <div className="spec-row">
              <span className="spec-label">EXPRESSION</span>
              <span className="spec-value">Triple-Distilled Irish Whiskey</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">PROCESS</span>
              <span className="spec-value">Non chill filtered</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">MATURATION</span>
              <span className="spec-value">Ex-Bourbon, Oloroso, Banyuls</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">STRENGTH</span>
              <span className="spec-value">46% ABV</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">VOLUME</span>
              <span className="spec-value">700 ml Product of Ireland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
