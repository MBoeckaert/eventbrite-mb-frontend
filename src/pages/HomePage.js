import EventOverview from "../components/EventOverview";
import LoadingInfo from "../components/LoadingInfo";
import { Stack, Alert, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import { backendUrl } from "../lib/functions";
import { useStore } from "../store";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Home = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const username = useStore((state) => state.username);

  //fetch events from strapi
  const {
    isLoading: eventsAreLoading,
    error: eventsLoadingError,
    data: events,
  } = useQuery(["events"], async () => {
    const data = await fetch(`${backendUrl}/api/events?populate=*`).then(
      (res) => res.json()
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
        <Typography variant="h1" component="h1">
          Eventbrite
        </Typography>
        {isLoggedIn ? <h2>Welcome {username}</h2> : ""}
        <h3>Opkomende evenementen</h3>

        <Stack spacing={4}>
          {eventsAreLoading && <LoadingInfo />}
          {eventsLoadingError && (
            <Alert severity="error">Could not load the data</Alert>
          )}
          <Splide
            options={{
              height: "65vh",
              perPage: 5,
              pagination: false,
              direction: "ttb",
              wheel: true,
              releaseWheel: true,
              waitForTransition: true,
              wheelSleep: 5,
            }}
          >
            {events &&
              events.data.length !== 0 &&
              events.data
                .filter((date) => {
                  return (
                    date.attributes.date &&
                    new Date(date.attributes.date).getTime() > new Date()
                  );
                })
                .sort((a, b) => {
                  return (
                    new Date(a.attributes.date) - new Date(b.attributes.date)
                  );
                })
                .map((event) => (
                  <SplideSlide key={event.id}>
                    <EventOverview
                      imageUrl={
                        event.attributes && event.attributes.image.data
                          ? backendUrl +
                            event.attributes.image.data.attributes.url
                          : ""
                      }
                      id={event.id}
                      name={event.attributes.name}
                      date={event.attributes.date}
                      location={event.attributes.location}
                    />
                  </SplideSlide>
                ))}
          </Splide>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
