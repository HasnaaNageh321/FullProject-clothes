import { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

// Options for the menu
const options = ["AR", "EN"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const toggleColorMode = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    colorMode.toggleColorMode();
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#2B3445",
          color: theme.palette.mode === "light" ? "#FFFFFF" : "#000000",
          borderRadius: "10px",
          marginTop: "0px",
        }}
      >
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ paddingLeft: "8px", paddingTop: "5px" }}
          >
            {/* Hot Badge */}
            <Typography
              sx={{
                mr: 2,
                p: "3px 10px",
                bgcolor: "#D23F57",
                borderRadius: "12px",
                fontSize: "10px",
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
              variant="body2"
            >
              HOT
            </Typography>

            {/* Free Express Shipping */}
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "300",
                color: "#FFFFFF",
              }}
              variant="body2"
            >
              Free Express Shipping
            </Typography>

            <Box flexGrow={1} />
            {/* Color Mode Toggle */}
            <IconButton
              onClick={toggleColorMode}
              color="inherit"
              sx={{ ml: 2 }}
            >
              {theme.palette.mode === "light" ? (
                <LightModeOutlinedIcon sx={{ color: "#FFFFFF" }} />
              ) : (
                <DarkModeOutlinedIcon sx={{ color: "#FFFFFF" }} />
              )}
            </IconButton>

            {/* Social Media Icons */}
            <FacebookIcon sx={{ color: "#FFFFFF", ml: 2 }} />
            <TwitterIcon sx={{ color: "#FFFFFF", fontSize: "35px", ml: 2 }} />
            <InstagramIcon sx={{ color: "#FFFFFF", fontSize: "35px", ml: 2 }} />

            {/* Dropdown List */}
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ m: "0", p: "0" }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "20px",
                      color: "#FFFFFF",
                    },
                  }}
                  // primary="lang"
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "20px", color: "white" }} />
              </ListItem>
            </List>

            {/* Dropdown Menu */}
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "19px", p: "3px 10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header1;
