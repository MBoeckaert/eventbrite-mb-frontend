import { Card, Grid, Typography, Avatar } from "@mui/material";
import { createTheme, ThemeProvider, Link } from "@mui/material";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { backendUrl } from "../lib/functions";

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
          <Grid item spacing={2} xs={8} container>
            <Grid item xs={6}>
              <Link
                to={`/eventInfo/${props.id}`}
                underline="none"
                name={props.name}
              >
                {" "}
                <Avatar
                  src={`${backendUrl + props.image} `}
                  alt="event pic"
                  sx={{ width: 252, height: 102 }}
                  variant="square"
                />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link
                to={`/eventInfo/${props.id}`}
                underline="none"
                name={props.name}
              >
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
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body3" component="span">
              <ShareIcon />
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={handleClick}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body3" component="span">
              {clickedButton ? <FavoriteBorderIcon /> : <FavoriteIcon />}
              {console.log(handleClick)}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default EventOverview;
