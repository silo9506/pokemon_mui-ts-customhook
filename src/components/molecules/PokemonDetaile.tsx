import { Card, Box, CardMedia, Typography, Grid } from "@mui/material";
import { ReactComponent as Normal } from "asset/svg/Normal.svg";
import { ReactComponent as Fire } from "asset/svg/Fire.svg";
import { ReactComponent as Water } from "asset/svg/Water.svg";
import { ReactComponent as Grass } from "asset/svg/Grass.svg";
import { ReactComponent as Electric } from "asset/svg/Electric.svg";
import { ReactComponent as Ice } from "asset/svg/Ice.svg";
import { ReactComponent as Fighting } from "asset/svg/Fighting.svg";
import { ReactComponent as Poison } from "asset/svg/Poison.svg";
import { ReactComponent as Ground } from "asset/svg/Ground.svg";
import { ReactComponent as Flying } from "asset/svg/Flying.svg";
import { ReactComponent as Psychic } from "asset/svg/Psychic.svg";
import { ReactComponent as Bug } from "asset/svg/Bug.svg";
import { ReactComponent as Rock } from "asset/svg/Rock.svg";
import { ReactComponent as Ghost } from "asset/svg/Ghost.svg";
import { ReactComponent as Dark } from "asset/svg/Dark.svg";
import { ReactComponent as Dragon } from "asset/svg/Dragon.svg";
import { ReactComponent as Steel } from "asset/svg/Steel.svg";
import { ReactComponent as Fairy } from "asset/svg/Fairy.svg";

type PokemonDetaileProps = {
  pokemonspeciesRes: any;
  pokemonRes: any;
};

const PokemonDetaile = ({
  pokemonspeciesRes,
  pokemonRes,
}: PokemonDetaileProps) => {
  return (
    <Card
      elevation={3}
      sx={{
        padding: "16px",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "300px",
            objectFit: "fill",
            flex: "1",
          }}
          image={pokemonRes.sprites.other.dream_world.front_default}
        />

        <Box sx={{ flex: "1", paddingX: "8px" }}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="button">
                  No.{pokemonRes.id.toString().padStart(4, 0)}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Noto Sans,Noto Sans KR,Apple SD Gothic Neo",
                  }}
                >
                  {
                    pokemonspeciesRes.names.find((names: any) => {
                      return names.language.name === "ko";
                    }).name
                  }
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>
                  {
                    pokemonspeciesRes.genera.find((generas: any) => {
                      return generas.language.name === "ko";
                    }).genus
                  }
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ wordBreak: "keep-all", paddingY: "16px" }}>
              {
                pokemonspeciesRes.flavor_text_entries.find((names: any) => {
                  return names.language.name === "ko";
                }).flavor_text
              }
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}
            sx={{
              "& .MuiGrid-item": { paddingLeft: "10px", paddingY: "24px" },
              marginTop: "16px",
              marginLeft: "0",
              width: "100%",
              border: "1px solid gray",
            }}
          >
            <Grid item sx={{ textAlign: "center" }} xs={4}>
              <Typography sx={{ paddingBottom: "8px" }}>타입</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "& svg": { width: "24px", marginX: "4px" },
                }}
              >
                {pokemonRes.types.map((types: any) => {
                  if (types.type.name === "normal") {
                    return <Normal key={types.type.name} />;
                  }
                  if (types.type.name === "fire") {
                    return <Fire key={types.type.name} />;
                  }
                  if (types.type.name === "water") {
                    return <Water key={types.type.name} />;
                  }
                  if (types.type.name === "grass") {
                    return <Grass key={types.type.name} />;
                  }
                  if (types.type.name === "electric") {
                    return <Electric key={types.type.name} />;
                  }
                  if (types.type.name === "ice") {
                    return <Ice key={types.type.name} />;
                  }
                  if (types.type.name === "fighting") {
                    return <Fighting key={types.type.name} />;
                  }
                  if (types.type.name === "ground") {
                    return <Ground key={types.type.name} />;
                  }
                  if (types.type.name === "poison") {
                    return <Poison key={types.type.name} />;
                  }
                  if (types.type.name === "flying") {
                    return <Flying key={types.type.name} />;
                  }
                  if (types.type.name === "psychic") {
                    return <Psychic key={types.type.name} />;
                  }
                  if (types.type.name === "bug") {
                    return <Bug key={types.type.name} />;
                  }
                  if (types.type.name === "rock") {
                    return <Rock key={types.type.name} />;
                  }
                  if (types.type.name === "ghost") {
                    return <Ghost key={types.type.name} />;
                  }
                  if (types.type.name === "dark") {
                    return <Dark key={types.type.name} />;
                  }
                  if (types.type.name === "dragon") {
                    return <Dragon key={types.type.name} />;
                  }
                  if (types.type.name === "steel") {
                    return <Steel key={types.type.name} />;
                  }
                  if (types.type.name === "fairy") {
                    return <Fairy key={types.type.name} />;
                  }
                })}
              </Box>
            </Grid>
            <Grid item sx={{ textAlign: "center" }} xs={4}>
              <Typography sx={{ paddingBottom: "8px" }}>키</Typography>
              <Typography>{pokemonRes.height / 10}m</Typography>
            </Grid>
            <Grid item sx={{ textAlign: "center" }} xs={4}>
              <Typography sx={{ paddingBottom: "8px" }}>몸무개</Typography>
              <Typography>{pokemonRes.weight / 10}Kg</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
};

export default PokemonDetaile;
