import { useState, useEffect } from "react";

const api = "https://dev-api-teste.mandarin.com.br/pokemons";

export function useFetchPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch(api); // Substitua pela URL real da API
        if (!response.ok) {
          throw new Error("Erro ao buscar os pokémons");
        }
        const data = await response.json();
        setPokemons(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    fetchPokemons();
  }, []);

  return { pokemons, isLoading, error };
}
