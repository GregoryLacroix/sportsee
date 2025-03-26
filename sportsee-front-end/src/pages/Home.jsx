import { NavLink } from "react-router";
import Header from "../components/Header";
import Aside from "../components/SideBar";
import { getUserPerformance } from "../utils/mock";

const Home = () => {
  const data = getUserPerformance(18);
  console.log(data);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Aside />
        <section className="section__home">
          <div className="section__content">
            <h1 className="title__home">Séléctionner un utilisateur</h1>
            <nav className="nav__home">
              <NavLink to="/profil/12" className="nav__home__link">
                Karl Dovineau
              </NavLink>
              <NavLink to="/profil/18" className="nav__home__link">
                Cecilia Ratorez
              </NavLink>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
