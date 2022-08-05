import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TicketsButton = styled(Button)({
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

const ButtonTickets = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider>
        <TicketsButton variant="outlined" onClick={() => navigate("/search")}>
          Evenementen
        </TicketsButton>
      </ThemeProvider>
    </>
  );
};

export default ButtonTickets;
