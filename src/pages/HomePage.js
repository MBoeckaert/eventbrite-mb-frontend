import EventOverview from "../components/EventOverview";
import LoadingInfo from "../components/LoadingInfo";
import { Stack, Alert } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import { backendUrl } from "../lib/functions";

const Home = () => {
  // console.log(backendUrl);
  //fetch events from strapi
  const {
    isLoading: eventsAreLoading,
    error: eventsLoadingError,
    data: events,
  } = useQuery(["events"], async () => {
    const data = await fetch(`${backendUrl}/api/events`).then((res) =>
      res.json()
    );
    return data;
  });

  return (
    <>
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {/* can use a filter or work with geolocation API */}
        <p>Evenementen zoeken in</p>
        <h1>Oost-Vlaanderen</h1>

        {/* Popular in Oost-Vl niet doen */}
        <Stack spacing={4}>
          {eventsAreLoading && <LoadingInfo />}
          {eventsLoadingError && (
            <Alert severity="error">Could not load the page</Alert>
          )}
          {events &&
            events.data.length !== 0 &&
            events.data.map((event) => (
              <EventOverview
                key={event.id}
                picture={event.attributes.picture}
                name={event.attributes.name}
                date={event.attributes.date}
                location={event.attributes.location}
              />
            ))}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
