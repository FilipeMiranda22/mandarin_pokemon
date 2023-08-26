import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pokebola from "../assets/icon_pokebola.png";
import "./Search.css";

const allTypes = [
  "Fire",
  "Water",
  "Grass",
  "Ice",
  "Bug",
  "Psychic",
  "Rock",
  "Ground",
  "Electric",
  "Normal",
];

const Search = ({ setSelectedTypes }) => {
  const [search, setSearch] = useState("");
  const [selectedTypesLocal, setSelectedTypesLocal] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar a exibição do dropdown
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedTypes(selectedTypesLocal);
  }, [selectedTypesLocal]);

  const handleTypeChange = (event) => {
    const type = event.target.value;
    if (selectedTypesLocal.includes(type)) {
      setSelectedTypesLocal(selectedTypesLocal.filter((t) => t !== type));
    } else {
      setSelectedTypesLocal([...selectedTypesLocal, type]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?name=${search}`);
    setSearch("");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <h2>Busque pelos seus pokémons favoritos!</h2>
      <div className="search_container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque por um pokémon!"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <img onClick={handleSubmit} src={pokebola} alt="pokebola" />
        </form>
        <div className="filter_dropdown">
          <button onClick={toggleDropdown}>Filtro</button>
          {isDropdownOpen && (
            <div className="dropdown_content">
              {allTypes.map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    value={type.toLowerCase()}
                    checked={selectedTypesLocal.includes(type.toLowerCase())}
                    onChange={handleTypeChange}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
