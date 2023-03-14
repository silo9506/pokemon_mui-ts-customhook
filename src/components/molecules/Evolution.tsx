import useAxios from "hooks/useAxios";
import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import EvolutionCard from "components/atoms/EvolutionCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ReactComponent as ColorBall } from "asset/svg/colorBall.svg";
type EvolutionProps = {
  url: string;
  name: string;
};

const Evolution = ({ url, name }: EvolutionProps) => {
  const { response, error, loading, sendData } = useAxios({
    url,
  });

  // if (!loading) {
  //   const { url: prevUrl, name: prevName } = response.chain.species;
  //   const { url: nextUrl, name: nextName } =
  //     response.chain.evolves_to[0].species;
  //   const { url: lastUrl, name: lastName } =
  //     response.chain.evolves_to[0].evolves_to[0].species;
  //   // console.log("이전진화" + prevName);
  //   // console.log("다음진화" + nextName);
  //   // console.log("마지막진화" + lastName);
  // }

  return (
    <Box>
      {loading ? (
        <Box>loading</Box>
      ) : (
        <Box sx={{ marginY: "24px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& svg": { width: "24px" },
            }}
          >
            <ColorBall />
            <Typography variant="body1">진화</Typography>
          </Box>
          <Box sx={{ display: "flex", marginY: "16px" }}>
            {/* 처음 */}
            <EvolutionCard url={response.chain.species.url} />
            <Box
              sx={{ display: "flex", alignItems: "center", paddingX: "24px" }}
            >
              <ArrowForwardIosIcon />
            </Box>
            {/* 중간 */}
            <EvolutionCard url={response.chain.evolves_to[0].species.url} />
            {/* 마지막 */}
            {response.chain.evolves_to[0].evolves_to[0] !== undefined ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingX: "24px",
                  }}
                >
                  <ArrowForwardIosIcon />
                </Box>
                <EvolutionCard
                  url={response.chain.evolves_to[0].evolves_to[0].species.url}
                />
              </>
            ) : (
              <>
                <Box sx={{ flex: "1" }} />
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Evolution;
