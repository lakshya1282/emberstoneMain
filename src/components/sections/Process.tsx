"use client";

export default function Process() {
  return (
    <section id="process" className="process-section" data-aos="fade-up">
      {/* Dedicated background layer for fading effect */}
      <div className="process-bg" data-aos="fade" data-aos-duration="2500"></div>
      
      <div className="process-container">
        <div className="process-content">
          <img 
            src="/set-in-stone.png" 
            alt="SET IN STONE" 
            className="process-title-img"
            data-aos="fade-right"
          />
          <p className="process-description" data-aos="fade-up" data-aos-delay="200">
            In a world that moves quickly and changes often,<br />
            we stand for something steadier — a belief that<br />
            true depth emerges through patience, craft, and<br />
            conviction.
          </p>
        </div>
      </div>
    </section>
  );
}
