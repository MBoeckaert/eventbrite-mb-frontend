import { Card, Grid, Typography, Avatar, Box } from "@mui/material";
import { createTheme, ThemeProvider, Link } from "@mui/material";
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
          <Grid item container spacing={2} component="span">
            <Link to={`/eventInfo/${props.id}`} underline="none">
              <Grid item>
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
              <Grid item>
                <ThemeProvider theme={theme}>
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
                  <Grid item>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: "Grey" }}
                    >
                      {props.location}
                    </Typography>
                  </Grid>
                  {/* end Link here */}
                </ThemeProvider>
              </Grid>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body3" component="span">
              <ShareIcon />
            </Typography>
          </Grid>
          <Grid item xs={2} onClick={handleClick}>
            <Typography variant="body3" component="span">
              {clickedButton ? <FavoriteBorderIcon /> : <FavoriteIcon />}
              {console.log(handleClick)}
            </Typography>
          </Grid>
        </Grid>
        {/* <Box
          display="grid"
          gridTemplateColumns="repeat{ 12, 1fr}"
          gap={2}
          fullWidth
        >
          <Link to={`/eventInfo/${props.id}`} underline="none">
            <Box gridColumn="span 8">
              <Box>
                <Avatar
                  // src={`${backendUrl + props.picture} `}
                  alt="event pic"
                  sx={{ width: 252, height: 102 }}
                  variant="square"
                />
              </Box>
              <Box>
                <ThemeProvider theme={theme}>
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
                  <Grid item>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: "Grey" }}
                    >
                      {props.location}
                    </Typography>
                  </Grid>
                  {/* end Link here */}
        {/* </ThemeProvider>
              </Box>
            </Box>
          </Link>
          <Box gridColumn="span 2">
            <Typography variant="body3" component="span">
              <ShareIcon />
            </Typography>
          </Box>
          <Box gridColumn="span 2" onClick={handleClick}>
            <Typography variant="body3" component="span">
              {clickedButton ? <FavoriteBorderIcon /> : <FavoriteIcon />}
              {console.log(handleClick)}
            </Typography>
          </Box>
        </Box>  */}
      </Card>
    </>
  );
};

export default EventOverview;
