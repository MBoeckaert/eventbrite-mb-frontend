import EventOverview from "../components/EventOverview";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";

const Home = (props) => {
  /* Check if there are events available close to you with a ternary operator */
  let overviewEventsAvailable = <p>There are no events close to you</p>;

  if (props.events.length > 0) {
    overviewEventsAvailable = props.events.map((event) => (
      <EventOverview
        key={event.id}
        img={event.img}
        name={event.name}
        date={event.date}
        location={event.location}
      />
    ));
  }

  return (
    <>
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {/* use a filter or work with geolocation API */}
        <p>Evenementen zoeken in</p>
        <h1>Oost-Vlaanderen</h1>
        {/* Popular in Oost-Vl niet doen */}
        <Stack spacing={4}>{overviewEventsAvailable}</Stack>
      </Container>
    </>
  );
};

export default Home;
