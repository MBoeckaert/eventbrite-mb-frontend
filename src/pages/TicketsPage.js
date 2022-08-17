import { Grid } from "@mui/material/";
// import LoadingInfo from "../components/LoadingInfo";
import { backendUrl } from "../lib/functions";
// import { useQuery } from "react-query";
import InlogButton from "../components/InlogButton";
import EventButton from "../components/EventButton";

const Tickets = () => {
  //fetch events from strapi
  const data = fetch(`${backendUrl}/api/events?populate=*`).then((res) =>
    res.json()
  );
  console.log(data);

  return (
    <>
      <Grid container>
        <Grid container sx={{ height: "15vh" }}>
          <Grid item xs={12}>
            <h1>Op zoek naar je mobiele tickets?</h1>
          </Grid>
          <Grid item xs={12}>
            <p>
              Log in om met hetzelfde account waarmee je jouw tickets hebt
              gekocht
            </p>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ height: "63vh" }}></Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InlogButton />
          </Grid>
          <Grid item xs={12}>
            {/* <Button>Evenementen</Button> */}
            <EventButton />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Tickets;
