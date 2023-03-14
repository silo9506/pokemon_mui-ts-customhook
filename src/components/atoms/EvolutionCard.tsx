import useAxios from "hooks/useAxios";
import { useEffect, useState } from "react";
import { Card, Box, Paper, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
type EvolutionCardProps = {
  url: string;
};

const EvolutionCard = ({ url }: EvolutionCardProps) => {
  const id = url.split("/")[6];
  const navigate = useNavigate();
  const {
    response: pokemonspeciesRes,
    error: evolutionError,
    loading: evolutionLoading,
    sendData: evolutionSendDate,
  } = useAxios({
    url,
  });
  const {
    response: pokemonRes,
    error: pokemonrror,
    loading: pokemonLoading,
    sendData: pokemonSendDate,
  } = useAxios({
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  });

  const onClick = () => {
    navigate(`/detailePokemon/${id}`, {
      state: { pokemonRes, pokemonspeciesRes },
    });
  };
  return (
    <Box sx={{ flex: "1" }}>
      {pokemonLoading || evolutionLoading ? (
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
              image={pokemonRes.sprites.other.dream_world.front_default}
            />
          </Paper>
          <Box sx={{ position: "absolute" }}>
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
          </Box>
        </>
      )}
    </Box>
  );
};

export default EvolutionCard;
