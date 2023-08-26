import "./PokemonCard.css";

import pokebola from "../assets/icon_pokebola.png";
import ice from "../assets/icon_ice.png";
import fire from "../assets/icon_fire.png";
import water from "../assets/icon_water.png";
import psy from "../assets/icon_psy.png";
import grass from "../assets/icon_grass.png";
import bug from "../assets/icon_bug.png";
import rock from "../assets/icon_rock.png";
import ground from "../assets/icon_ground.png";
import electric from "../assets/icon_electric.png";
import normal from "../assets/icon_normal.png";
import { useEffect } from "react";

const typeIcons = {
  ice,
  fire,
  water,
  psychic: psy,
  grass,
  bug,
  rock,
  ground,
  electric,
  normal,
};

const PokemonCard = ({ pokemon, favoritePokemons, setFavoritePokemons }) => {
  const backgroundClassName = `background_${pokemon.category.toLowerCase()}`;

  const isPokemonFavorite =
    favoritePokemons && favoritePokemons.some((p) => p.id === pokemon.id);

  const handleFavoriteClick = () => {
    const updatedFavorites = isPokemonFavorite
      ? favoritePokemons.filter((p) => p.id !== pokemon.id)
      : [...favoritePokemons, pokemon];

    setFavoritePokemons(updatedFavorites);
    localStorage.setItem("favoritePokemons", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    if (favoritePokemons && favoritePokemons.length === 0) {
      localStorage.removeItem("favoritePokemons");
    }
  }, [favoritePokemons]);

  return (
    <div className={`pokemon_card ${backgroundClassName}`}>
      <div className="pokemon_container">
        <img
          className="background_pokemon"
          src={pokemon.background_image_url}
          alt={pokemon.category}
        />
        <img
          className="gif_pokemon"
          src={pokemon.image_url}
          alt={pokemon.name}
        />
      </div>
      <h2>{pokemon.name}</h2>
      <div className={`poke_infos ${backgroundClassName}`}>
        <div className="type_group">
          <img
            src={typeIcons[pokemon.category.toLowerCase()]}
            alt={pokemon.category}
          />
          <span>{pokemon.category}</span>
        </div>
        <img
          title="Capturar Pokémon"
          className={`poke_fav ${isPokemonFavorite ? "active" : ""}`}
          src={pokebola}
          alt="favorito_pokebola"
          onClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
