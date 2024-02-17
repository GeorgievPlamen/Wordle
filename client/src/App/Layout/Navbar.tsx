import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import BarChartIcon from "@mui/icons-material/BarChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import { toggleDisplay } from "../../Features/HowToPlay/howToPlaySlice";
import { toggleStatsDisplay } from "../../Features/Statistics/statisticsSlice";
import { toggleDarkMode, toggleLanguage } from "../../Features/Game/gameSlice";

export default function Navbar() {
  const game = useAppSelector((state) => state.game);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const dispatch = useAppDispatch();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="fixed" id="about" sx={{ backgroundColor: "primary" }}>
        <Container maxWidth="xl" sx={{ padding: "0", margin: "auto" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0",
            }}
          >
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: "block",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                  }}
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    window.open(
                      "https://www.nytimes.com/games/wordle/index.html",
                      "_blank"
                    );
                  }}
                >
                  <Typography textAlign="center">Original</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    window.open(
                      "https://github.com/GeorgievPlamen/Wordle",
                      "_blank"
                    );
                  }}
                >
                  <Typography textAlign="center">Source</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h4"
              noWrap
              color={"textPrimary"}
              sx={{
                display: "flex",
                flexGrow: 1,
                fontWeight: "bold",
                letterSpacing: ".3rem",
              }}
            >
              Wordle
            </Typography>

            <Box display={"flex"} justifyContent={"center"}>
              <Button
                onClick={() => dispatch(toggleLanguage())}
                style={{
                  color: "black",
                  textDecoration: "none",
                  width: "50px",
                  height: "50px",
                }}
              >
                <Typography variant="h5" fontWeight={"bold"}>
                  {game.bulgarian ? "BG" : "EN"}
                </Typography>
              </Button>
              <Button
                onClick={() => dispatch(toggleDisplay())}
                style={{
                  color: "black",
                  textDecoration: "none",
                  width: "50px",
                  height: "50px",
                }}
              >
                <HelpOutlineIcon
                  color="action"
                  sx={{
                    margin: { xs: "0.35em", md: "0.7em" },
                    width: { xs: "1em", md: "1.7em" },
                    height: { xs: "1em", md: "1.7em" },
                  }}
                />
              </Button>
              <Button
                onClick={() => dispatch(toggleStatsDisplay())}
                style={{
                  color: "black",
                  textDecoration: "none",
                  width: "50px",
                  height: "50px",
                }}
              >
                <BarChartIcon
                  color="action"
                  sx={{
                    margin: { xs: "0.35em", md: "0.7em" },
                    width: { xs: "1em", md: "1.7em" },
                    height: { xs: "1em", md: "1.7em" },
                  }}
                />
              </Button>
              <Button
                onClick={() => dispatch(toggleDarkMode())}
                style={{
                  color: "black",
                  textDecoration: "none",
                  width: "50px",
                  height: "50px",
                }}
              >
                <DarkModeIcon
                  color="action"
                  sx={{
                    margin: { xs: "0.35em", md: "0.7em" },
                    width: { xs: "1em", md: "1.7em" },
                    height: { xs: "1em", md: "1.7em" },
                  }}
                />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
