import EventOverview from "../components/EventOverview";
import LoadingInfo from "../components/LoadingInfo";
import { Stack, Typography, Input, Alert } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useQuery } from "react-query";
import { backendUrl } from "../lib/functions";

const Search = () => {
  const [searchBar, setSearchBar] = useState("");
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
        <h1>Evenementen</h1>

        <Input
          fullWidth
          placeholder="Beginnen met zoeken..."
          inputProps={{ style: { fontSize: 40, fontWeight: 900 } }}
          sx={{
            marginBottom: 5,
            ":before": { borderBottomColor: "blue" },
            ":after": { borderBottomColor: "blue" },
          }}
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        />
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "initial" }}
        >
          {events.data.length} evenementen
        </Typography>
        {/* <Stack spacing={4}>{overviewEventsAvailable}</Stack> */}
        <Stack spacing={4}>
          {eventsAreLoading && <LoadingInfo />}
          {eventsLoadingError && (
            <Alert severity="error">Could not load the page</Alert>
          )}
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
              .filter((event) => {
                if (searchBar === "") {
                  return event;
                } else if (
                  event.attributes.name
                    .toLowerCase()
                    .includes(searchBar.toLowerCase())
                ) {
                  return event;
                }
              })
              .map((event) => (
                <EventOverview
                  key={event.id}
                  // picture={event.attributes.picture.data.attributes.url}
                  name={event.attributes.name}
                  date={event.attributes.date}
                  location={event.attributes.location}
                />
                // <div key={event.id} className="box">
                //   <p className="nameEvent">{event.attributes.name}</p>
                // </div>
              ))}
        </Stack>
      </Container>
    </>
  );
};

export default Search;
