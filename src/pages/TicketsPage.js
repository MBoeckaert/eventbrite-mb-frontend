import { Grid } from "@mui/material/";
// import LoadingInfo from "../components/LoadingInfo";
import { backendUrl } from "../lib/functions";
// import { useQuery } from "react-query";
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
  console.log(isLoggedIn);
  const qs = require("qs");
  const profileQuery = qs.stringify({
    filters: {
      username: {
        $eq: username,
      },
    },
  });

  const {
    isLoading: profileLoading,
    error: profileError,
    data: profile,
  } = useQuery(["profile"], async () => {
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
  // const {
  //   isLoading: setLoading,
  //   error: setError,
  //   data: set,
  // } = useQuery(["set", setId], async () => {
  //   const data = await fetch(
  //     `${backendUrl}/api/sets/${setId}?populate=*&_limit=-1`
  //   ).then((r) => r.json());
  //   return data.data.attributes;
  // });

  return (
    <>
      <Grid container>
        <Grid container sx={{ height: "15vh" }}>
          <Grid item xs={12}>
            <h1>Op zoek naar je mobiele tickets?</h1>
          </Grid>
          <Grid item xs={12}>
            {isLoggedIn ? (
              <p>
                Log in om met hetzelfde account waarmee je jouw tickets hebt
                gekocht
              </p>
            ) : (
              ""
            )}
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
