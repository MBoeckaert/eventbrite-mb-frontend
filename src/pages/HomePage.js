import EventOverview from "../components/EventOverview";
import LoadingInfo from "../components/LoadingInfo";
import { Stack, Alert } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "react-query";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Home = (props) => {
  //fetch events from strapi
  const {
    isLoading: eventLoading,
    error: eventError,
    data: events,
  } = useQuery(["events"], async () => {
    const data = await fetch(`${backendUrl}/api/events`).then((res) =>
      res.json()
    );
    return data;
  });
  /* Check if there are events available close to you with a ternary operator */
  // let overviewEventsAvailable = <p>There are no events close to you</p>;

  // if (props.events.length > 0) {
  //   overviewEventsAvailable = props.events.map((event) => (
  // <EventOverview
  //   key={event.id}
  //   img={event.img}
  //   name={event.name}
  //   date={event.date}
  //   location={event.location}
  // />
  //   ));
  // }

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
        {/* <Stack spacing={4}>{overviewEventsAvailable}</Stack> */}
        <Stack>
          {eventLoading && <LoadingInfo />}
          {eventError && (
            <Alert severity="error">Could not load the page</Alert>
          )}
          {events &&
            events.data.length !== 0 &&
            events.data.map((event) => (
              // <EventOverview
              //   key={event.id}
              //   img={event.img}
              //   name={event.name}
              //   date={event.date}
              //   location={event.location}
              // />
              <h2>{event.id}</h2>
            ))}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
