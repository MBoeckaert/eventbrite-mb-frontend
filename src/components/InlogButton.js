import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <>
      {/* <ThemeProvider> */}
      <LoginButton
        variant="contained"
        // sx={{ backgroundColor: "#f05537", width: "100%", cursor: "pointer" }}
        onClick={() => navigate("/signUp")}
      >
        Inloggen
      </LoginButton>
      {/* </ThemeProvider> */}
    </>
  );
};

export default ButtonLogIn;
