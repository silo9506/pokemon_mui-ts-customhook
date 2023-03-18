import Card from "components/atoms/Card";
import Topnav from "components/molecules/Topnav";
import { Toolbar, Grid, CircularProgress, Box } from "@mui/material";
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
  const [maxPage, setMaxPage] = useState(875);
  const [resList, setResList] = useState<ResListState[]>([]);
  const [throttle, setThrottle] = useState(false);
  const { response, error, loading, sendData } = useAxios<PokemonListRes>({
    url: "https://pokeapi.co/api/v2/pokemon",
    params: { limite: 20, offset },
  });

  useEffect(() => {
    const handleScroll = () => {
      const { offsetHeight } = document.body;
      if (window.innerHeight + window.scrollY >= offsetHeight) {
        sendOffset();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) {
      setResList((prev) => {
        // 중복 제거 스테틱모드 아닌데도 response값이 자꾸 2번들어가서 중복값생김..
        console.log("리스트에 데이터추가");
        if (response.results !== undefined) {
          const state = [...prev, ...response.results];
          const newState = state.filter((prevdata, index, arr) => {
            return (
              arr.findIndex((data) => prevdata.name === data.name) === index
            );
          });
          return newState;
        } else return prev;
      });
    }
  }, [response]);

  useEffect(() => {
    if (!loading) {
      sendData();
    }
  }, [offset]);

  console.log(loading);
  const useThrottle = (fn: Function, delay: number) => {
    let onThrottle = throttle;
    return function () {
      if (!onThrottle) {
        fn();
        onThrottle = true;
        setThrottle(true);
        setTimeout(() => {
          onThrottle = false;
          setThrottle(false);
        }, delay);
      }
    };
  };

  const sendOffset = useThrottle(() => {
    setOffset((prev) => {
      if (prev === maxPage) {
        return prev;
      }
      if (prev === maxPage - 15) {
        // console.log("+15");
        return prev + 15;
      } else {
        // console.log("+20");
        return prev + 20;
      }
    });
  }, 1000);

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
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Grid>
  );
};

export default Home;
