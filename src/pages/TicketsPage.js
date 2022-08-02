import { Grid } from "@mui/material/";

import Button from "../components/Button";

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
            <Button>Inloggen</Button>
          </Grid>
          <Grid item xs={12}>
            <Button>Evenementen</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Tickets;
