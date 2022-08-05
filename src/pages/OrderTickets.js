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

const OrderTickets = () => {
  return (
    <>
      <h1>Order Page</h1>
      <OrderButton>Bestellen</OrderButton>
    </>
  );
};

export default OrderTickets;
