import { NavLink } from "react-router-dom";
import logo from "../assets/poke_logo.svg";
import { GiSchoolBag } from "react-icons/gi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./NavBar.css";
import { useState } from "react";

const Navbar = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleLightTheme = () => {
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);

    // Obtém o elemento HTML raiz
    const htmlElement = document.documentElement;

    // Adiciona ou remove a classe "light_theme" com base no estado
    if (isLightTheme) {
      htmlElement.classList.remove("light_theme");
    } else {
      htmlElement.classList.add("light_theme");
    }
  };
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <img src={logo} alt="logo_pokemon" />
      </NavLink>
      <ul className="nav_links">
        <li>
          <NavLink to="/favorites">
            PokéBag
            <GiSchoolBag />
          </NavLink>
        </li>
        <li onClick={toggleLightTheme}>
          {!isLightTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
