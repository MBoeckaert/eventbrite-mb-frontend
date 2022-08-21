import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const TicketsButton = styled(Button)({
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

const ButtonTickets = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <TicketsButton
        variant="contained"
        onClick={() => navigate("/orderTickets")}
        eventName={props.name}
        eventPrice={props.price}
      >
        Tickets
      </TicketsButton>
    </>
  );
};

export default ButtonTickets;
