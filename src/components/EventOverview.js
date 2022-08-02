import EventImage from "./EventImage";
import { Card, Grid, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const daywritten = props.date.toLocaleString("en-US", { weekday: "short" });
  const month = props.date.toLocaleString("en-US", { month: "long" });

  const navigate = useNavigate();

  return (
    <>
      <Card
        variant="outlined"
        onClick={() => navigate("/eventInfo")}
        sx={{ cursor: "pointer" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <EventImage img={props.img} />
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
                <Typography variant="h6" component="h2" sx={{ color: "red" }}>
                  {daywritten + ", " + month + " " + day}
                </Typography>
                <Typography variant="subtitle2" component="h3">
                  {props.name}
                </Typography>
                {/* Make this grid container a component as well, otherwise too much grids nested */}
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
                  <Grid item xs={2}>
                    <Typography variant="body3" component="span">
                      {/* <FavoriteBorder /> */}
                      {/* <svg data-testid="DeleteIcon"></svg> */}
                      <FavoriteBorderIcon />
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
