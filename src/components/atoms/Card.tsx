import { Box, Paper, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useAxios from "hooks/useAxios";
import { useNavigate } from "react-router-dom";
type CardProps = {
  name: string;
  id: string;
};

const Card = ({ name, id }: CardProps) => {
  const {
    response: pokemonRes,
    error: pokemonResError,
    loading: pokemonResLoading,
    sendData: sendPokemonResData,
  } = useAxios({
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  });
  const {
    response: pokemonspeciesRes,
    error: pokemonspeciesResErro,
    loading: pokemonspeciesResLoading,
    sendData: sendPokemonspeciesResData,
  } = useAxios({
    url: `https://pokeapi.co/api/v2/pokemon-species/${id}`,
  });

  const [sprite, setSprite] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonResLoading) {
      setSprite(pokemonRes.sprites.other.dream_world.front_default);
    }
  }, [pokemonRes]);

  const onClick = () => {
    navigate(`/detailePokemon/${id}`, {
      state: { pokemonRes, pokemonspeciesRes },
    });
  };

  return (
    <Box
      sx={{
        "&:hover .MuiPaper-root": {
          transform: "scale( 1.02, 1.02 )",
          transition: "transform 1s ease",
        },
      }}
    >
      {pokemonResLoading || pokemonspeciesResLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              cursor: "pointer",
            }}
            onClick={onClick}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "250px",
                backgroundPosition: "center",
                objectFit: "fill",
              }}
              image={sprite}
            />
          </Paper>
          <Typography variant="button">
            No.{pokemonRes.id.toString().padStart(4, 0)}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "cursive" }}
          >
            {
              pokemonspeciesRes.names.find((names: any) => {
                return names.language.name === "ko";
              }).name
            }
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Card;
