import useAxios from "hooks/useAxios";
import { useEffect, useState } from "react";
import {
  Card,
  Box,
  Paper,
  CardMedia,
  Typography,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
type EvolutionCardProps = {
  url: string;
};

const EvolutionCard = ({ url }: EvolutionCardProps) => {
  const id = url.split("/")[6];
  const [sprite, setSprite] = useState<string>("");
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

  useEffect(() => {
    if (!pokemonLoading) {
      if (pokemonRes.sprites.other.dream_world.front_default === null) {
        setSprite(
          `${pokemonRes.sprites.other["official-artwork"].front_default}`
        );
      } else {
        setSprite(pokemonRes.sprites.other.dream_world.front_default);
      }
    }
  }, [pokemonRes]);

  const onClick = () => {
    navigate(`/detailePokemon/${id}`, {
      state: { pokemonRes, pokemonspeciesRes },
    });
  };
  return (
    <Box sx={{ flex: "1" }}>
      {pokemonLoading || evolutionLoading ? (
        <Box>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="250px"
            sx={{ padding: "8px" }}
          />
          <Skeleton variant="text">
            <Typography variant="button">No.0000</Typography>
          </Skeleton>
          <Skeleton variant="text">
            <Typography variant="h6">이름입니다.</Typography>
          </Skeleton>
        </Box>
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
