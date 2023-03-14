import Card from "components/atoms/Card";
import Topnav from "components/molecules/Topnav";
import { Toolbar, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import useAxios from "hooks/useAxios";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
