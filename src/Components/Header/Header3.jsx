import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import ComputerIcon from "@mui/icons-material/Computer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header3 = () => {
  const theme = useTheme();

  // For controlling the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // For controlling the drawer
  const [drawerState, setDrawerState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "5px",
            padding: "10px 20px",
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          sx={{
            ".MuiPaper-root": {
              width: "220px",
              backgroundColor: theme.palette.myColor.main,
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <BikeScooterIcon
              sx={{
                paddingRight: "5px",
              }}
            />{" "}
            Bikes
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ComputerIcon
              sx={{
                paddingRight: "5px",
              }}
            />{" "}
            Electronic
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <LibraryBooksIcon
              sx={{
                paddingRight: "5px",
              }}
            />
            Books
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <SportsEsportsIcon
              sx={{
                paddingRight: "5px",
              }}
            />
            Games
          </MenuItem>
        </Menu>
      </Box>

      <IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"top"}
        open={drawerState["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 0,
              backgroundColor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
              borderRadius: "50%",
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={toggleDrawer("top", false)}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{}}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Home</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: "grey",
                    },
                  }}
                >
                  Link 1
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: "grey",
                    },
                  }}
                >
                  Link 2
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: "grey",
                    },
                  }}
                >
                  Link 3
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>mega menu</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: "grey",
                    },
                  }}
                >
                  Link 1
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: "grey",
                    },
                  }}
                >
                  Link 2
                </Typography>
                <Typography
                  sx={{
                    padding: "10px 20px",
                    "&:hover": {
                      bgcolor: "grey",
                    },
                  }}
                >
                  Link 3
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>full screen menu</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Pages</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>user account</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Vendor account</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
