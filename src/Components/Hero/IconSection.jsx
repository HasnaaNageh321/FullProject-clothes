import {
  Container,
  Stack,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"; // Use MUI components
import PaymentIcon from "@mui/icons-material/Payment";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function IconSection() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        marginTop: 3,
        color: theme.palette.mode === "light" ? "#000" : "#fff",
        bgcolor: theme.palette.mode === "light" ? "##F6F6F6" : "#000",
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        sx={{
          flexWrap: "wrap",
        }}
      >
        {" "}
        {/* MUI's Stack with spacing */}
        <MyBox
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumIcon />}
          title={"Money Guarantee"}
          subTitle={"7 Days back"}
        />
        <MyBox
          icon={<AlarmOnIcon />}
          title={"365 Days"}
          subTitle={"For Free return"}
        />
        <MyBox
          icon={<PaymentIcon />}
          title={"Payment"}
          subTitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
}

export default IconSection;

// eslint-disable-next-line react/prop-types
function MyBox({ icon, title, subTitle }) {
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        gap: 3,
        padding: "5px",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
      }}
    >
      {icon}

      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "300",
            lineHeight: "1.6",
            margin: "10px 0",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            display: "block",
            transition: "color 0.3s ease-in-out",
            justifyContent: useMediaQuery("(min-width:600px)")
              ? "center"
              : "flex-start",
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}
