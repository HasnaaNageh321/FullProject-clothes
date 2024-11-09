import { Box, Typography, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  // @ts-ignore
  return (
    <Box
      sx={{
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,

        color: theme.palette.mode === "light" ? "#fff" : "#fff",
        bgcolor: theme.palette.mode === "light" ? "#2A3446" : "#2A3446",
        mt: 3,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        variant="h6"
        sx={{
          fontSize: "18px",
        }}
      >
        Designed and developed by{" "}
        <span style={{ color: "red", marginLeft: "6px" }}>Hasnaa Nageh</span>
        &nbsp;@ 2024
      </Typography>
    </Box>
  );
}

export default Footer;
