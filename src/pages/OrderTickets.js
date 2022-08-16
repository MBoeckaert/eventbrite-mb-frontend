import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const OrderButton = styled(Button)({
  width: "100%",
  boxShadow: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#f05537",
  color: "white",
  "&:hover": {
    backgroundColor: "#d13719",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
});

const OrderTickets = (props) => {
  return (
    <>
      <h1>Name Event {props.name}</h1>
      <h3>Price Event</h3>
      <p>dropdown Box amount</p>
      <p>ShoppingCart</p>
      <p>TotalPrice</p>
      <OrderButton>Bestellen</OrderButton>
    </>
  );
};

export default OrderTickets;
