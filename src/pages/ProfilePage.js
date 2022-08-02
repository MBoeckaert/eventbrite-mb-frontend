import { Grid } from "@mui/material/";

import Button from "../components/Button";

const Profile = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ height: "85vh" }}></Grid>
        <Grid item xs={12}>
          <Button>Inloggen</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
