import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import PokemonDetaile from "components/molecules/PokemonDetaile";
import Evolution from "components/molecules/Evolution";
import useAxios from "hooks/useAxios";
const DetailPage = () => {
  const location = useLocation();

  const { pokemonRes, pokemonspeciesRes, inputValue } = location.state;

  console.log(pokemonRes);
  // const {
  //   response: searchPokemonRes,
  //   error: searchPokemonError,
  //   loading: searchPokemonLoading,
  //   sendData: searchPokemonSend,
  // } = useAxios({
  //   url: `https://pokeapi.co/api/v2/pokemon/${inputValue}`,
  // });
  // const {
  //   response: searchPokemonspeciesRes,
  //   error: pokemonspeciesError,
  //   loading: pokemonspeciesLoading,
  //   sendData: pokemonspeciesSend,
  // } = useAxios({
  //   url: `https://pokeapi.co/api/v2/pokemon/${inputValue}`,
  // });

  console.log(pokemonspeciesRes);
  return (
    <Container>
      {pokemonRes || pokemonspeciesRes ? (
        <>
          <PokemonDetaile
            pokemonRes={pokemonRes}
            pokemonspeciesRes={pokemonspeciesRes}
          />
          <Evolution url={pokemonspeciesRes.evolution_chain.url} />
        </>
      ) : (
        <>
          {/* {searchPokemonLoading || pokemonspeciesLoading ? (
            <>로딩</>
          ) : (
            <>
              <PokemonDetaile
                pokemonRes={searchPokemonRes}
                pokemonspeciesRes={searchPokemonspeciesRes}
              />
              <Evolution url={searchPokemonspeciesRes.evolution_chain.url} />
            </>
          )} */}
        </>
      )}
    </Container>
  );
};

export default DetailPage;
