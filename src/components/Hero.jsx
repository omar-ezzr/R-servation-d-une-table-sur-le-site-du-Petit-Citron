export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Mediterranean restaurant</p>
          <h1 id="hero-title">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Fresh Mediterranean dishes, friendly service, and a relaxed
            neighborhood atmosphere.
          </p>
          <a className="btn" href="#booking">Reserve a table</a>
        </div>

        <div className="hero-card" aria-label="Featured dining experience">
          <span className="hero-card-icon" aria-hidden="true">🍋</span>
          <p>Seasonal food, simple ingredients, memorable evenings.</p>
        </div>
      </div>
    </section>
  );
}
