import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="container">
      <nav>
        <ul className="nav-link">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/products">Produits</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
