import Pagination from "@/components/Pagination";
import PokemonName from "@/components/PokemonName";
import React, {Suspense} from "react";

interface Props {
  searchParams: Record<string, string | undefined>;
}

interface Pokemon {
  name: string;
}

interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const getPokemons = async (searchParams: Props["searchParams"]) => {
  const {offset, limit} = searchParams;
  let queryString = "";

  if (offset && limit) {
    queryString = `?offset=${offset}&limit=${limit}`;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon${queryString}`, {method: "GET"});

    if (!res.ok) {
      throw new Error("Failed to fetch pokemons");
    }

    return res.json();
  } catch (error) {
    console.log("Error: ", error);
  }
};

const RootPage = async ({searchParams}: Props) => {
  const pokemonsResponse: PokemonsResponse = await getPokemons(searchParams);

  return (
    <div>
      <Suspense fallback={<h3>Loading...</h3>}>
        {pokemonsResponse?.results.length > 0 ? (
          pokemonsResponse?.results.map((pokemon) => (
            <PokemonName key={pokemon.name} pokemon={pokemon.name} />
          ))
        ) : (
          <div>No pokemons found</div>
        )}
      </Suspense>
      <Pagination
        count={pokemonsResponse?.count}
        next={pokemonsResponse?.next}
        previous={pokemonsResponse?.previous}
      />
    </div>
  );
};

export default RootPage;
