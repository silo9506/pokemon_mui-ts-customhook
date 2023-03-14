import Card from "components/atoms/Card";
import Topnav from "components/molecules/Topnav";
import { Toolbar, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import useAxios from "hooks/useAxios";
import { Outlet } from "react-router-dom";

interface PokemonListRes {
  count: number;
  next: string;
  previous: null | string;
  results: [];
}

type ResListState = {
  name: string;
  url: string;
};

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [resList, setResList] = useState<ResListState[]>([]);
  const { response, error, loading, sendData } = useAxios<PokemonListRes>({
    // url: "pokemon",
    url: "https://pokeapi.co/api/v2/pokemon",
    params: { limite: 151, offset },
  });

  useEffect(() => {
    if (!loading) {
      setResList((prev) => {
        // 중복 제거 스테틱모드 아닌데도 response값이 자꾸 2번들어가서 중복값생김..
        console.log("리스트에 데이터추가");
        const state = [...prev, ...response.results];
        const newState = state.filter((prevdata, index, arr) => {
          return arr.findIndex((data) => prevdata.name === data.name) === index;
        });
        return newState;
      });
    }
  }, [response]);

  useEffect(() => {
    sendData();
  }, [offset]);

  const sendOffset = () => {
    setOffset((prev) => prev + 20);
  };

  return (
    <Grid
      container
      spacing={3}
      columns={{ xs: 12, sm: 16, md: 20 }}
      sx={{ paddingX: "16px" }}
    >
      {resList.map(({ url, name }) => (
        <Grid key={name} item xs={4} sm={4} md={4}>
          <Card name={name} id={url.substring(34).replace("/", "")}></Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
