import { Grid } from "@mui/material/";
import InlogButton from "../components/InlogButton";
import { useStore } from "../store";

const Likes = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return (
    <>
      <Grid container>
        <Grid container sx={{ height: "15vh" }}>
          <Grid item xs={12}>
            <h1>Bekijk al je favorieten op één plek</h1>
          </Grid>
          <Grid item xs={12}>
            {isLoggedIn ? "" : <p>Log in om je favorieten te bekjken</p>}
          </Grid>
          <Grid item xs={12}>
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
