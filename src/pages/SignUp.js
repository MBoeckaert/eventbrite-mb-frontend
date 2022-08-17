import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { useStore } from "../store";
import { backendUrl } from "../lib/functions";
import { useQuery } from "react-query";

import GoogleIcon from "@mui/icons-material/Google";

const LoginButton = styled(Button)({
  width: "100%",
  boxShadow: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#f05537",
  "&:hover": {
    backgroundColor: "#d13719",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
});

const theme = createTheme();

export default function SignIn() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const logout = useStore((state) => state.logout);
  const username = useStore((state) => state.username);
  const jwt = useStore((state) => state.jwt);

  const qs = require("qs");
  const profileQuery = qs.stringify({
    filters: {
      username: {
        $eq: username,
      },
      events: {
        $eq: events,
      },
    },
  });
  const {
    isLoading: profileIsLoading,
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

    console.log(data);

    return data;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {isLoggedIn ? (
          ""
        ) : (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#f05537" }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Or Sign In"}
                  </Link>
                </Grid>
                <Grid
                  item
                  sx={{ mt: 3, mb: 2, textAlign: "center", width: "100%" }}
                >
                  <p>OR</p>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}

        {isLoggedIn ? (
          <>
            <Box
              sx={{
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "initial",
                  mt: 3,
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                Welcome {username}
              </Typography>
              <Button
                variant="contained"
                fullWidth
                color="inherit"
                href={`/create`}
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#f05537",
                  color: "#FFFFFF",
                }}
              >
                Create Event
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="inherit"
                onClick={logout}
                sx={{
                  position: "sticky",
                  bottom: 0,
                  borderColor: "#000000",
                  borderWidth: ".1rem",
                }}
              >
                Logout
              </Button>
            </Box>
          </>
        ) : (
          <LoginButton
            color="inherit"
            component="a"
            href={`${backendUrl}/api/connect/google`}
            sx={{
              mt: 3,
              mb: 2,
              borderColor: "#f05537",
              color: "#ffffff",
            }}
            startIcon={
              <GoogleIcon
                sx={{
                  height: "2rem",
                  width: "auto",
                  color: "darkred",
                  paddingBottom: ".2rem",
                  paddingRight: ".5rem",
                }}
              />
            }
          >
            Login with Google
          </LoginButton>
        )}
      </Container>
    </ThemeProvider>
  );
}
