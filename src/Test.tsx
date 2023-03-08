import { Box } from "@mui/material";
import useAxios from "hooks/useAxios";
import { useEffect, useState } from "react";

type TestProps = {
  name: string;
  url: string;
};

const Test = ({ name, url }: TestProps) => {
  const { response, error, loading, sendData } = useAxios({
    url: `pokemon/${name}`,
  });
  const [sprite, setSprite] = useState<string>("");

  console.log(loading);
  useEffect(() => {
    if (!loading) {
      console.log(response);
      setSprite(response.sprites.other.dream_world.front_default);
    }
  }, [response]);

  return (
    <Box sx={{ height: "10vh", textAlign: "center" }}>
      {name}
      <img src={sprite} />
    </Box>
  );
};

export default Test;
