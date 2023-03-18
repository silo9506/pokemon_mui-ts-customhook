import Card from "components/atoms/Card";
import Topnav from "components/molecules/Topnav";
import { Toolbar, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import useAxios from "hooks/useAxios";
import { Outlet } from "react-router-dom";
interface PokemonListRes {
  count: number;
  next: string;
  previous: null | string;
  results: [];
}
const Layout = () => {
  // const { response, error, loading, sendData } = useAxios<PokemonListRes>({
  //   url: "https://pokeapi.co/api/v2/pokemon",
  //   params: { limite: 20, offset: 1261 },
  // });
  // console.log(response);

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{ minHeight: "calc(100vh - 16px)" }}
    >
      <Topnav />
      <Toolbar sx={{ marginY: "16px" }} />
      <Outlet />
    </Container>
  );
};

export default Layout;
