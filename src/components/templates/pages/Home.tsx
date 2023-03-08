import Card from "components/atoms/Card";
import Topnav from "components/molecules/Topnav";
import { Toolbar, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import useAxios from "hooks/useAxios";

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
    url: "pokemon",
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

  console.log(response);
  console.log(resList);
  return (
    <div>
      <Topnav />
      <Toolbar sx={{ marginY: "16px" }} />

      <Grid container spacing={2} columns={{ xs: 12, sm: 16, md: 20 }}>
        {resList.map(({ url, name }) => (
          <Grid key={name} item xs={4} sm={4} md={4}>
            <Card name={name} url={url}></Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
