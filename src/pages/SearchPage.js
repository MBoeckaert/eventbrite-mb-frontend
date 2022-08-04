import EventOverview from "../components/EventOverview";
import LoadingInfo from "../components/LoadingInfo";
import { Stack, Typography, Input, Alert } from "@mui/material";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import { backendUrl } from "../lib/functions";

const Search = (props) => {
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

  /* Check if there are events available close to you with a ternary operator */
  // let overviewEventsAvailable = <p>There are no events close to you</p>;

  // if (props.events.length > 0) {
  //   overviewEventsAvailable = props.events.map((event) => (
  //     <EventOverview
  //       key={event.id}
  //       img={event.img}
  //       name={event.name}
  //       date={event.date}
  //       location={event.location}
  //     />
  //   ));
  // }

  return (
    <>
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {/* dropdown */}
        <h1>Oost-Vlaanderen</h1>

        <Input
          fullWidth
          placeholder="Beginnen met zoeken..."
          inputProps={{ style: { fontSize: 40, fontWeight: 900 } }}
          sx={{
            marginBottom: 5,
            ":before": { borderBottomColor: "blue" },
            ":after": { borderBottomColor: "blue" },
          }}
        />
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={{ fontWeight: "initial" }}
        >
          {props.events.length} evenementen
        </Typography>
        {/* <Stack spacing={4}>{overviewEventsAvailable}</Stack> */}
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
                img={event.attributes.img}
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
