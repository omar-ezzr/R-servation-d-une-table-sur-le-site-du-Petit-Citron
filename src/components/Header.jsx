export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a className="brand" href="#home" aria-label="Little Lemon home">
          Little Lemon
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#specials">Menu</a></li>
            <li><a href="#booking">Reservations</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
