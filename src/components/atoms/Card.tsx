import { Box, Paper, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useAxios from "hooks/useAxios";
type CardProps = {
  name: string;
  url: string;
};

const Card = ({ name, url }: CardProps) => {
  const { response, error, loading, sendData } = useAxios({
    url: `pokemon/${name}`,
  });
  const [sprite, setSprite] = useState<string>("");

  useEffect(() => {
    if (!loading) {
      setSprite(response.sprites.other.dream_world.front_default);
    }
  }, [response]);

  return (
    <Box>
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          <Paper elevation={3} sx={{ display: "flex", alignItems: "center" }}>
            <CardMedia component="img" width={"100%"} image={sprite} />
          </Paper>
          <Typography>데이터 받아와야함(도감번호)</Typography>
          <Typography>데이터 받아와야함(이름)</Typography>
        </>
      )}
    </Box>
  );
};

export default Card;
