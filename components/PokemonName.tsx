"use client";

import {useRouter} from "next/navigation";
import React, {useCallback} from "react";

interface Props {
  pokemon: string;
}

const PokemonName = ({pokemon}: Props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/${pokemon}`);
  }, [pokemon]);

  return (
    <p style={{cursor: "pointer", maxWidth: "fit-content"}} onClick={handleClick}>
      {pokemon}
    </p>
  );
};

export default PokemonName;
