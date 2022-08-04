import { Grid } from "@mui/material/";

import InlogButton from "../components/InlogButton";

const Profile = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ height: "85vh" }}></Grid>
        <Grid item xs={12}>
          <InlogButton />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
