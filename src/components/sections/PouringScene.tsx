/* eslint-disable @next/next/no-img-element */
export default function PouringScene() {
  return (
    <section className="pouring-section" data-aos="fade-up" data-aos-once="true">
      <div className="pouring-title-wrapper">
        <img src="/ff.png" alt="Emberstone" className="pouring-title-img" />
      </div>
      
      <div className="pouring-content">
        <div className="pouring-specs-grid">
          <div className="pouring-spec-box">
            <div className="pouring-spec-top">43%</div>
            <div className="pouring-spec-divider"></div>
            <div className="pouring-spec-label-large">ABV</div>
          </div>
          
          <div className="pouring-spec-box">
            <div className="pouring-spec-top">3X</div>
            <div className="pouring-spec-divider"></div>
            <div className="pouring-spec-label-med">TRIPLE<br />DISTILLED</div>
          </div>
          
          <div className="pouring-spec-box">
            <div className="pouring-spec-divider"></div>
            <div className="pouring-spec-label-med">NON CHILL<br />FILTERED</div>
          </div>
          
          <div className="pouring-spec-box">
            <div className="pouring-spec-divider"></div>
            <div className="pouring-spec-label-med">SMALL BATCH<br />SELECTION</div>
          </div>
        </div>
      </div>
    </section>
  );
}
