import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating,
  Dialog,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Container, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../Redux/Product";

function Main() {
  // @ts-ignore
  const [alignment, setAlignment] = useState("left");

  // const [setAlignment] = useState("left");

  const handleAlignment = (event, newValue) => {
    // Check if the new value is valid before setting it
    if (newValue !== null) {
      setAlignment(newValue); // This line seems unnecessary if you're not using 'alignment' anywhere
      setmyData(newValue); // Update the state to filter products
    }
  };
  
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsApi = "products?populate=*";
  // @ts-ignore
  const MenProductApi = "products?populate=*&filters[productCategory][$eq]=men";
  const WomenProductApi =
    "products?populate=*&filters[productCategory][$eq]=women";

  const [myData, setmyData] = useState(allProductsApi);
  const { data, error, isLoading } = useGetProductByNameQuery(
    // @ts-ignore
    myData
  );

  // "http://localhost:1337/api/products?populate=*&filters[productCategory][$eq]=men";

  if (isLoading) {
    <Typography variant="h6">Loading .....</Typography>;
  }
  if (error) {
    <Typography variant="h6">
      Error :{" "}
      {
        // @ts-ignore
        error.message
      }
    </Typography>;
  }

  // @ts-ignore
  if (data) {
    console.log(data.data);
  }
  if (data) {
    return (
      <Container
        sx={{
          marginTop: 9,
          paddingTop: "15px",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={1}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All Our new arrivals in exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5)!important",
                color: "#e94560!important",
                backgroundColor: "initial!important",
              },
            }}
          >
            <ToggleButton
              className="myButton"
              value={allProductsApi}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>

            <ToggleButton
              className="myButton"
              value={MenProductApi}
              aria-label="centered"
            >
              MEN CATEGORY
            </ToggleButton>

            <ToggleButton
              className="myButton"
              value={WomenProductApi}
              aria-label="right aligned"
            >
              WOMEN CATEGORY
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {" "}
          {/* Add spacing to separate each Card */}
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  borderRadius: "10px",
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.35s",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  // @ts-ignore
                  image={`${import.meta.env.VITE_BASE_URL}${
                    item.productImage && item.productImage[1]
                      ? item.productImage[1].url
                      : "fallback-image.jpg"
                  }`}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      ${item.productPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.productDescription}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={handleClickOpen}
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "20px",
                    }}
                  >
                    <ShoppingCartIcon
                      fontSize="small"
                      sx={{
                        marginRight: "10px",
                      }}
                    />
                    Add To Cart
                  </Button>

                  <Rating
                    name="read-only"
                    defaultValue={4.5}
                    precision={0.1}
                    size="small"
                    readOnly
                    value={item.productRating}
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: {
                xs: "100%",
                md: 800,
              },
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              position: "absolute",
              rotate: "180deg",
              top: 0,
              right: 0,
              borderRadius: "50%",
              fontSize: "24px",
              cursor: "pointer",
              color: "red",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
