import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

import "./PokemonGrid.css";
import "./SearchedPokemons.css";

const SearchedPokemons = () => {
  const [searchParams] = useSearchParams();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("name");

  const [favoritePokemons, setFavoritePokemons] = useState(
    localStorage.getItem("favoritePokemons")
      ? JSON.parse(localStorage.getItem("favoritePokemons"))
      : []
  );

  const getSearchedPokemons = async (url) => {
    setLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();

    setPokemons(data);
    setLoading(false);
  };

  useEffect(() => {
    const searchWithQueryURL = `https://dev-api-teste.mandarin.com.br/pokemons?name=${query}`;

    getSearchedPokemons(searchWithQueryURL);
  }, [query]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="searched_container">
      <h2>
        Resultados da busca: <span>{query}</span>
      </h2>
      <div className="pokemons_container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              favoritePokemons={favoritePokemons}
              setFavoritePokemons={setFavoritePokemons}
              pokemon={pokemon}
            />
          ))}
      </div>
      {pokemons.length === 0 && <p>Nenhum resultado foi encontrado!</p>}
    </div>
  );
};

export default SearchedPokemons;
