import iconeYoga from "../assets/yoga.svg";
import iconeSwimming from "../assets/swimming.svg";
import iconeBike from "../assets/bike.svg";
import iconeWeight from "../assets/weight.svg";

export default function Aside() {
  return (
    <aside className="aside">
      <nav className="aside__nav">
        <a href="" className="aside__nav__link">
          <img src={iconeYoga} alt="link yoga" className="aside__nav__icone" />
        </a>
        <a href="" className="aside__nav__link">
          <img
            src={iconeSwimming}
            alt="link yoga"
            className="aside__nav__icone"
          />
        </a>
        <a href="" className="aside__nav__link">
          <img src={iconeBike} alt="link yoga" className="aside__nav__icone" />
        </a>
        <a href="" className="aside__nav__link">
          <img
            src={iconeWeight}
            alt="link yoga"
            className="aside__nav__icone"
          />
        </a>
      </nav>
      <small className="copyright">Copiryght, SportSee 2020</small>
    </aside>
  );
}
