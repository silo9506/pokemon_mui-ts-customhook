import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import PokemonDetaile from "components/molecules/PokemonDetaile";
import Evolution from "components/molecules/Evolution";
const DetailPage = () => {
  const location = useLocation();

  const { pokemonRes, pokemonspeciesRes } = location.state;

  return (
    <Container>
      <PokemonDetaile
        pokemonRes={pokemonRes}
        pokemonspeciesRes={pokemonspeciesRes}
      />
      <Evolution
        url={pokemonspeciesRes.evolution_chain.url}
        name={pokemonRes.name}
      />
    </Container>
  );
};

export default DetailPage;
