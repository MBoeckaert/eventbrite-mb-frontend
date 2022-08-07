import { Grid } from "@mui/material/";
// import { useQuery } from "react-query";
import InlogButton from "../components/InlogButton";
// import EventOverview from "../components/EventOverview";

const Likes = () => {
  return (
    <>
      <Grid container>
        <Grid container sx={{ height: "15vh" }}>
          <Grid item xs={12}>
            <h1>Bekijk al je favorieten op één plek</h1>
          </Grid>
          <Grid item xs={12}>
            <p>Log in om je favorieten te bekjken</p>
          </Grid>
          <Grid item xs={12}>
            {/* Link to search page */}
            <p>Evenementen doorkijken</p>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ height: "70vh" }}></Grid>
        <Grid item xs={12}>
          <InlogButton />
        </Grid>
      </Grid>
    </>
  );
};

export default Likes;
