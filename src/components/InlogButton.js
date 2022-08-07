import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useQuery } from "react-query";
import { useStore } from "../store";
import { backendUrl } from "../lib/functions";

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

const ButtonLogIn = (props) => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const logout = useStore((state) => state.logout);

  return (
    <Box>
      {isLoggedIn ? (
        <>
          <LoginButton color="inherit" onClick={logout}>
            Logout
          </LoginButton>
        </>
      ) : (
        <LoginButton
          color="inherit"
          component="a"
          href={`${backendUrl}/api/connect/google`}
        >
          Login
        </LoginButton>
      )}
    </Box>
  );
};

export default ButtonLogIn;
