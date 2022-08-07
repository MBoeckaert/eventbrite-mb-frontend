import EventOverview from "../components/EventOverview";
import LoadingInfo from "../components/LoadingInfo";
import { Stack, Alert } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import { backendUrl } from "../lib/functions";
import { useStore } from "../store";

const Home = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const username = useStore((state) => state.username);
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
        {isLoggedIn ? <h2>Welcome {username}</h2> : ""}
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
            events.data
              .sort((a, b) => {
                return (
                  new Date(a.attributes.date) - new Date(b.attributes.date)
                );
              })
              .map((event) => (
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
