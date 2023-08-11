import Image from "next/image";
import React from "react";

interface Props {
  params: {id: string};
}

interface PokemonFull {
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const getPokemon = async (pokemon: string) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {method: "GET"});

    if (!res.ok) {
      throw new Error("Failed to fetch pokemon");
    }

    return res.json();
  } catch (error) {
    console.log("Error: ", error);
  }
};

const PokemonPage = async ({params}: Props) => {
  const pokemonName = params.id;
  const pokemon: PokemonFull = await getPokemon(pokemonName);

  return (
    <div>
      {pokemon ? (
        <div>
          <h1>{pokemonName}</h1>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            height={400}
            width={400}
            alt={pokemonName}
          />
        </div>
      ) : (
        <p>Pokemon not found...</p>
      )}
    </div>
  );
};

export default PokemonPage;
