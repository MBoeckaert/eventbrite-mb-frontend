import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiButton: {
      backgroundColor: "#FFA500",
    },
  },
});

const ButtonTickets = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f05537", width: "100%", cursor: "pointer" }}
          onClick={() => navigate("/orderTickets")}
        >
          Tickets
        </Button>
      </ThemeProvider>
    </>
  );
};

export default ButtonTickets;
