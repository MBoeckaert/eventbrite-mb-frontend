import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

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
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  return (
    <>
      {isLoggedIn ? (
        ""
      ) : (
        <EventsButton variant="outlined" onClick={() => navigate("/search")}>
          Evenementen
        </EventsButton>
      )}
    </>
  );
};

export default ButtonEvents;
