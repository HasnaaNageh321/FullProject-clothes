import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";
function Hero() {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            mt: 2.5,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Swiper
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="src/Imgs/banner-15.jpg" alt="" />
              <Box
                sx={{
                  position: "absolute",
                  left: "10%",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontSize: "26px",
                    fontWeight: "bolder",
                  }}
                >
                  LIFE STYLE COLLECTION
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    color: "#222",
                    fontWeight: 400,
                    my: 1,
                  }}
                >
                  MEN
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontSize: 25,
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  SALE UP TO{" "}
                  <span
                    style={{
                      color: "#ff0000",
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    30% OFF
                  </span>
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#605f5f",
                    fontSize: 17,
                  }}
                >
                  Get Free Shipping On orders Over $99.00
                </Typography>

                <Button
                  sx={{
                    variant: "contained",
                    color: "white",
                    padding: "7px 26px",
                    marginTop: "26px",
                    backgroundColor: "#222",
                    "&:hover": {
                      backgroundColor: "#444",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <img src="src/Imgs/banner-25.jpg" alt="" />
              <Box
                sx={{
                  position: "absolute",
                  left: "10%",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontSize: "26px",
                    fontWeight: "bolder",
                  }}
                >
                  LIFE STYLE COLLECTION
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    color: "#222",
                    my: 1,
                  }}
                >
                  WOMEN
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#222",
                    fontSize: 25,
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  SALE UP TO{" "}
                  <span
                    style={{
                      color: "#ff0000",
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    30% OFF
                  </span>
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#605f5f",
                    fontSize: 17,
                  }}
                >
                  Get Free Shipping On orders Over $99.00
                </Typography>

                <Button
                  sx={{
                    variant: "contained",
                    color: "white",
                    padding: "7px 26px",
                    marginTop: "26px",
                    backgroundColor: "#222",
                    "&:hover": {
                      backgroundColor: "#444",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </SwiperSlide>
          </Swiper>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
                lg: "block",
                xl: "block",
                minWidth: "26.6%",
              },
            }}
          >
            <Box position="relative">
              <img src="../../../src/Imgs/banner-17.jpg" width="100%" />
              <Stack
                sx={{
                  position: "absolute",
                  left: 33,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2b3445",
                    fontSize: "20px",
                  }}
                >
                  NEW ARRIVALS
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2b3445",
                    fontSize: "19px",
                  }}
                >
                  SUMMER
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2b3445",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  SALE 20% Off
                </Typography>
                <Link
                  sx={{
                    gap: "5px",
                    color: "#2b3445",
                    display: "flex",
                    alignItems: "center",
                    transition: "0.2s",
                    fontSize: 18,
                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                  underline="none"
                  href="#"
                >
                  shop Now
                  <ArrowForwardIcon
                    sx={{
                      ml: 2,
                      fontSize: "18px",
                      color: "#2b3445",
                      transition: "0.2s",
                      "&:hover": {
                        color: "#D23F57",
                      },
                    }}
                  />
                </Link>
              </Stack>
            </Box>
            <Box position="relative">
              <img src="../../../src/Imgs/banner-16.jpg" width="100%" />
              <Stack
                sx={{
                  position: "absolute",
                  left: 33,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2b3445",
                    fontSize: "20px",
                  }}
                >
                  GAMING 4K
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2b3445",
                    fontSize: "19px",
                  }}
                >
                  DESKTOPS &
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2b3445",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  LAPTOPS
                </Typography>
                <Link
                  sx={{
                    gap: "5px",
                    color: "#2b3445",
                    display: "flex",
                    alignItems: "center",
                    transition: "0.2s",
                    fontSize: 18,
                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                  underline="none"
                  href="#"
                >
                  shop Now
                  <ArrowForwardIcon
                    sx={{
                      ml: 2,
                      fontSize: "18px",
                      color: "#2b3445",
                      transition: "0.2s",
                      "&:hover": {
                        color: "#D23F57",
                      },
                    }}
                  />
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
        <IconSection />
      </Container>
    </>
  );
}

export default Hero;
