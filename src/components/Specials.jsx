const specials = [
  {
    title: 'Greek Salad',
    description: 'Crisp greens, tomato, feta, olives, and lemon dressing.',
    price: '$12.50'
  },
  {
    title: 'Bruschetta',
    description: 'Grilled bread with tomato, herbs, garlic, and olive oil.',
    price: '$8.00'
  },
  {
    title: 'Lemon Dessert',
    description: 'A light citrus dessert made with our house lemon cream.',
    price: '$7.50'
  }
];

export default function Specials() {
  return (
    <section id="specials" className="section" aria-labelledby="specials-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">This week</p>
            <h2 id="specials-title">Specials</h2>
          </div>
        </div>

        <div className="cards">
          {specials.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-topline">
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
