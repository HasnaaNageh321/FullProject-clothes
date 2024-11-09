import { Box, Typography } from "@mui/material";
import { Button, Stack } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

// استيراد الصور
// @ts-ignore
import image1 from "../../Imgs/2 (5).jpg";
// @ts-ignore
import image2 from "../../Imgs/2 (4).jpg";
// @ts-ignore
import image3 from "../../Imgs/1 (13).jpg";

function ProductDetails() {
  // حالة لتخزين الصورة المعروضة
  const [selectedImage, setSelectedImage] = useState(image1); // تعيين الصورة الافتراضية

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        marginBottom: 2,
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        padding: "1rem 0",
        "& > *": {
          width: "100%",
        },
      }}
    >
      <Box>
        <img width={400} src={selectedImage} alt="Product Image" />
      </Box>
      <Box
        sx={{
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        <Typography variant="h5">WOMEN&apos;s Fashion</Typography>
        <Typography my={0.4} fontSize={"22px"} color="crimson">
          $2000
        </Typography>
        <Typography variant="body1">
          Lizard are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>

        <Stack
          // @ts-ignore
          direction={"row"}
          gap={1}
          my={2}
          sx={{
            justifyContent: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          {[image2, image3].map((item) => {
            return (
              <img
                key={item}
                src={item}
                alt=""
                width={90}
                height={100}
                style={{ borderRadius: 3, cursor: "pointer" }} // إضافة مؤشر للتغيير
                onClick={() => setSelectedImage(item)} // تحديث الصورة عند النقر
              />
            );
          })}
        </Stack>

        <Button
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "#126ED5",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            border: "none",
            justifyContent: "center",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          <ShoppingCartIcon style={{ marginRight: "8px" }} />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
