import { Card, Grid, Typography, Box, Avatar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { backendUrl } from "../lib/functions";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const EventOverview = (props) => {
  //test click button
  const [clickedButton, setClickedButton] = useState(true);
  const handleClick = () => {
    setClickedButton((current) => !current);
  };

  return (
    <>
      <Card variant="outlined" sx={{ cursor: "pointer" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ width: "100%" }}>
            {/* <img
              src={`${backendUrl + props.picture} `}
              alt="event pic"
              className="img-small"
            /> */}
            <Avatar
              // src={`${backendUrl + props.picture} `}
              alt="event pic"
              sx={{ width: 252, height: 102 }}
              variant="square"
            />
          </Grid>
          <Grid item xs={8}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ color: "red", marginTop: "1rem" }}
                >
                  {props.date}
                </Typography>
                <Typography variant="subtitle2" component="h3">
                  {props.name}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: "Grey" }}
                    >
                      {props.location}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body3" component="span">
                      <ShareIcon />
                    </Typography>
                  </Grid>
                  {/* end Link here */}
                  <Grid item xs={2} onClick={handleClick}>
                    <Typography variant="body3" component="span">
                      {clickedButton ? (
                        <FavoriteBorderIcon />
                      ) : (
                        <FavoriteIcon />
                      )}
                      {console.log(handleClick)}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default EventOverview;
