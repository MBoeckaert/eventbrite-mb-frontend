import {
  Container,
  Grid,
  Typography,
  Paper,
  Skeleton,
  // CardMedia,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
// import TicketsButton from "../components/TicketsButton.js";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { backendUrl } from "../lib/functions";
import { useQuery } from "react-query";

const TicketsButton = styled(Button)({
  width: "100%",
  boxShadow: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#f05537",
  "&:hover": {
    backgroundColor: "#d13719",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
});

const ClickedEventInformation = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading: isLoadingEventInfo, data: events } = useQuery(
    ["eventInfo", id],
    async () => {
      const data = await fetch(
        `${backendUrl}/api/events/${id}?populate=*`
      ).then((r) => r.json());
      console.log(data);
      return data;
    }
  );

  console.log(events);

  return (
    <>
      {/* {isLoadingEventInfo ? (
        <Skeleton />
      ) : (
        <CardMedia
          component="img"
          alt={events.data.attributes.picture.data.attributes.alternativeText}
          src={`${
            backendUrl + events.data.attributes.picture.data.attributes.url
          }`}
        />
      )} */}

      <Container>
        <Typography
          variant="h2"
          component="h1"
          sx={{ marginY: 5, fontWeight: 900 }}
        >
          {/* {id} */}
          {isLoadingEventInfo ? <Skeleton /> : `${events.data.attributes.name}`}
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ borderBottom: 1, marginBottom: 2, borderColor: "grey.500" }}
        >
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              <CalendarTodayIcon />
            </Typography>
          </Grid>
          <Grid item xs={10}>
            {isLoadingEventInfo ? (
              <Skeleton />
            ) : (
              `${events.data.attributes.date}`
            )}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              <LocationOnIcon />
            </Typography>
          </Grid>
          <Grid item xs={10}>
            {isLoadingEventInfo ? (
              <Skeleton />
            ) : (
              `${events.data.attributes.location}`
            )}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              <ConfirmationNumberOutlinedIcon />
            </Typography>
          </Grid>
          <Grid item xs={10} sx={{ marginBottom: 2 }}>
            €
            {isLoadingEventInfo ? (
              <Skeleton />
            ) : (
              `${events.data.attributes.price}`
            )}
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
            Beschrijving
          </Typography>
          {isLoadingEventInfo ? (
            <Skeleton />
          ) : (
            `${events.data.attributes.description}`
          )}
        </Paper>
        <TicketsButton
          variant="contained"
          // sx={{ backgroundColor: "#f05537", width: "100%", cursor: "pointer" }}
          onClick={() => navigate("/orderTickets")}
          eventName={props.name}
          passData={events.data.attributes.name}
        >
          Tickets
          {console.log(events)}
        </TicketsButton>
      </Container>
    </>
  );
};

export default ClickedEventInformation;
