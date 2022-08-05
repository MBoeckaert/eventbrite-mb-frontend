import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EventsButton = styled(Button)({
  width: "100%",
  boxShadow: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  "&:hover": {
    backgroundColor: "#dbcecc",
    boxShadow: "none",
  },
});

const ButtonEvents = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <ThemeProvider> */}
      <EventsButton variant="outlined" onClick={() => navigate("/search")}>
        Evenementen
      </EventsButton>
      {/* </ThemeProvider> */}
    </>
  );
};

export default ButtonEvents;
