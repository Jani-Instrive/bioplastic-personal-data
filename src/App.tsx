import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import bagImage from "../src/assets/bag.png";

const App: React.FC = () => {
  const user = {
    name: "Shaik Intiyaz",
    email: "shaikintiyaz@gmail.com",
    phone: "9885725168",
    image: bagImage,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          image={user.image}
          alt="User Image"
          sx={{
            width: "150px",
            height: "150px",
            margin: "20px auto 10px auto",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Email: {user.email}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Phone No: {user.phone}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={() => window.open(`tel:${user.phone}`, "_self")}
          >
            Call
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="success"
            onClick={() =>
              window.open(
                `https://wa.me/${user.phone}?text=Hello%20${user.name}`,
                "_blank"
              )
            }
          >
            WhatsApp
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default App;
