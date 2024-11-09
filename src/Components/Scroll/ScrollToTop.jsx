import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function ScrollToTop() {
  return (
    <Zoom
      in={useScrollTrigger({
        threshold: 100,
      })}
    >
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        sx={{
          position: "fixed",
          right: 33,
          bottom: 33,
        }}
        size="small"
        color="secondary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
