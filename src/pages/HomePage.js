import EventOverview from "../components/EventOverview";
import LoadingInfo from "../components/LoadingInfo";
import { Stack, Alert, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import { backendUrl } from "../lib/functions";
import { useStore } from "../store";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import useFetch from "../hooks/useFetch";

const Home = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const username = useStore((state) => state.username);

  //test click button
  const [clickedButton, setClickedButton] = useState(true);
  const handleClick = () => {
    setClickedButton(false);
  };
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

  // const { loading, error, data } = useFetch(`http://localhost:1337/events`);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>error sadFace</p>;

  console.log(`${backendUrl}/api/events`);

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
        {/* can use a filter or work with geolocation API */}
        <h3>Opkomende evenementen</h3>

        {/* Popular in Oost-Vl niet doen */}
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
              // arrows: false,
              direction: "ttb",
              wheel: true,
              releaseWheel: true,
              waitForTransition: true,
              wheelSleep: 5,
              // padding: { left: 10, right: 20 },
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
                    <Link to={`/eventInfo/${event.id}`} underline="none">
                      {console.log(event.id)}
                      <EventOverview
                        // picture={event.attributes.picture.data.attributes.url}
                        name={event.attributes.name}
                        date={event.attributes.date}
                        location={event.attributes.location}
                      />
                    </Link>
                  </SplideSlide>
                ))}
          </Splide>
        </Stack>
        <div onClick={handleClick}>
          <Typography variant="body3" component="span">
            {clickedButton ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            {console.log(handleClick)}
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Home;
