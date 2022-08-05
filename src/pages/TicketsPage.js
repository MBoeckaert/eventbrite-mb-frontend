import { Grid } from "@mui/material/";

import InlogButton from "../components/InlogButton";
import EventButton from "../components/EventButton";

const Tickets = () => {
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
