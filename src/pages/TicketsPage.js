import { Grid } from "@mui/material/";
import { backendUrl } from "../lib/functions";
import InlogButton from "../components/InlogButton";
import EventButton from "../components/EventButton";

import { useStore } from "../store";
import { useQuery } from "react-query";

const Tickets = () => {
  //fetch events from strapi
  const data = fetch(`${backendUrl}/api/events?populate=*`).then((res) =>
    res.json()
  );
  console.log(data);

  //fetch profiles
  const jwt = useStore((state) => state.jwt);
  const username = useStore((state) => state.username);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const qs = require("qs");
  const profileQuery = qs.stringify({
    filters: {
      username: {
        $eq: username,
      },
    },
  });

  const { data: profile } = useQuery(["profile"], async () => {
    const data = await fetch(`${backendUrl}/api/profiles?${profileQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((r) => r.json());
    return data;
  });

  console.log(profile);

  return (
    <>
      <Grid container>
        <Grid container sx={{ height: "15vh" }}>
          <Grid item xs={12}>
            <h1>Op zoek naar je mobiele tickets?</h1>
          </Grid>
          <Grid item xs={12}>
            {isLoggedIn ? (
              ""
            ) : (
              <p>
                Log in om met hetzelfde account waarmee je jouw tickets hebt
                gekocht
              </p>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ height: "63vh" }}></Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InlogButton />
          </Grid>
          <Grid item xs={12}>
            <EventButton />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Tickets;
