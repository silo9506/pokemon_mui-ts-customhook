import {
  AppBar,
  Typography,
  alpha,
  styled,
  InputBase,
  ButtonBase,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as BlackBall } from "asset/svg/blackBall.svg";
import { ReactComponent as ColorBall } from "asset/svg/blackBall.svg";
import { useTheme, useThemeUpdate } from "modules/ThemeContext";
const Topnav = () => {
  const { darkTheme } = useTheme();
  const { toggleTheme } = useThemeUpdate();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography>포켓몬 도감</Typography>
            {darkTheme ? (
              <div>
                <IconButton
                  onClick={toggleTheme}
                  sx={{ padding: "0px", "& svg": { width: "16px" } }}
                >
                  <ColorBall />
                </IconButton>
                <Typography variant="caption" display="inline" sx={{ paddingLeft: "8px" }}>
                  일반모드
                </Typography>
              </div>
            ) : (
              <div>
                <IconButton
                  onClick={toggleTheme}
                  sx={{ padding: "0px", "& svg": { width: "16px" } }}
                >
                  <BlackBall />
                </IconButton>
                <Typography variant="caption" display="inline" sx={{ paddingLeft: "8px" }}>
                  다크모드
                </Typography>
              </div>
            )}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputProps={{ maxLength: 20 }}
              placeholder="이름 또는 도감번호를 입력해주세요"
            ></StyledInputBase>
            <StyledSearchButton>
              <SearchIcon />
            </StyledSearchButton>
          </Search>
        </Toolbar>
      </AppBar>
    </>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flex: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: theme.spacing(3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& input::placeholder": { color: "white" },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const StyledSearchButton = styled(ButtonBase)(({ theme }) => ({
  padding: theme.spacing(1),
  position: "relative",
  color: "inherit",
  backgroundColor: "red",
  borderTopLeftRadius: "45%",
  "&:hover svg": {
    fill: "black",
  },
}));

export default Topnav;
