import { NavLink } from "react-router";
import Logo from "../assets/logo.webp";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="link__logo">
        <img src={Logo} alt="logo" className="header__logo" />
      </a>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__link active__link" : "nav__link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/profil"
          className={({ isActive }) =>
            isActive ? "nav__link active__link" : "nav__link"
          }
        >
          Profil
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "nav__link active__link" : "nav__link"
          }
        >
          Réglages
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "nav__link active__link" : "nav__link"
          }
        >
          Community
        </NavLink>
      </nav>
    </header>
  );
}
