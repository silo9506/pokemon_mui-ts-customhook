import useAxios from "hooks/useAxios";
import { useState } from "react";
import { Box, Container, Typography, Skeleton } from "@mui/material";
import EvolutionCard from "components/atoms/EvolutionCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ReactComponent as ColorBall } from "asset/svg/colorBall.svg";
type EvolutionProps = {
  url: string;
};

const Evolution = ({ url }: EvolutionProps) => {
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
  if (!loading) {
    console.log(response.chain.evolves_to[0]);
  }
  return (
    <Box>
      {loading ? (
        <Box sx={{ marginY: "24px" }}>
          <Skeleton>
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
          </Skeleton>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="250px"
            sx={{ padding: "8px", marginY: "16px" }}
          />
          <Skeleton variant="text">
            <Typography variant="button">No.0000</Typography>
          </Skeleton>
          <Skeleton variant="text">
            <Typography variant="h6">이름입니다.</Typography>
          </Skeleton>
        </Box>
      ) : (
        <Box sx={{ marginY: "24px" }}>
          {response.chain.evolves_to[0] === undefined ? null : (
            <>
              {" "}
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
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingX: "24px",
                  }}
                >
                  <ArrowForwardIosIcon />
                </Box>
                {/* 중간 */}
                {response.chain.evolves_to[0] !== undefined ? (
                  <EvolutionCard
                    url={response.chain.evolves_to[0].species.url}
                  />
                ) : null}
                {/* <EvolutionCard url={response.chain.evolves_to[0].species.url} /> */}
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
                      url={
                        response.chain.evolves_to[0].evolves_to[0].species.url
                      }
                    />
                  </>
                ) : (
                  <>
                    <Box sx={{ flex: "1" }} />
                  </>
                )}
              </Box>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Evolution;
