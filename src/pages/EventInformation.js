import EventImage from "../components/EventImage";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import Button from "../components/Button.js";

const ClickedEventInformation = (props) => {
  console.log(props.events);
  return (
    <>
      <EventImage />
      <Container>
        <Typography
          variant="h2"
          component="h1"
          sx={{ marginY: 5, fontWeight: 900 }}
        >
          Lake Night 2022
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ borderBottom: 1, marginBottom: 2, borderColor: "grey.500" }}
        >
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              Calender Icon
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <p>Date</p>
            <p>Hour</p>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              Location Icon
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <p>Name Location</p>
            <p>Adress Location</p>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              Tickets Icon
            </Typography>
          </Grid>
          <Grid item xs={10} sx={{ marginBottom: 2 }}>
            <p>Price Range</p>
            <p>Price information</p>
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          square
          sx={{
            marginY: 2,
            paddingY: 2,
            borderBottom: 1,
            borderColor: "grey.500",
          }}
        >
          <Typography variant="h6" component="h3" sx={{ marginBottom: 2 }}>
            Extra
          </Typography>
          <p>Extra Information</p>
        </Paper>

        <Box
          sx={{
            marginY: 2,
            paddingY: 2,
            borderBottom: 1,
            borderColor: "grey.500",
          }}
        >
          <Typography variant="h6" component="h3" sx={{ marginBottom: 2 }}>
            Location
          </Typography>
          <p>Name Loaction</p>
          <p>Google Maps</p>
        </Box>

        <Button />
      </Container>
    </>
  );
};

export default ClickedEventInformation;
