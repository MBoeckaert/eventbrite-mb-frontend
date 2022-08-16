import {
  Container,
  Grid,
  Typography,
  Paper,
  Skeleton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
// import TicketsButton from "../components/TicketsButton.js";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { backendUrl } from "../lib/functions";
import { useQuery } from "react-query";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const OrderButton = styled(Button)({
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

const ClickedEventInformation = (props) => {
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const { id } = useParams();

  const { isLoading: isLoadingEventInfo, data: events } = useQuery(
    ["eventInfo", id],
    async () => {
      const data = await fetch(
        `${backendUrl}/api/events/${id}?populate=*`
      ).then((r) => r.json());
      console.log(data);
      return data;
    }
  );

  return (
    <>
      {/* {isLoadingEventInfo ? (
        <Skeleton />
      ) : (
        <CardMedia
          component="img"
          alt={events.data.attributes.picture.data.attributes.alternativeText}
          src={`${
            backendUrl + events.data.attributes.picture.data.attributes.url
          }`}
        />
      )} */}

      <Container>
        <Typography
          variant="h2"
          component="h1"
          sx={{ marginY: 5, fontWeight: 900 }}
        >
          {/* {id} */}
          {isLoadingEventInfo ? <Skeleton /> : `${events.data.attributes.name}`}
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ borderBottom: 1, marginBottom: 2, borderColor: "grey.500" }}
        >
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              <CalendarTodayIcon />
            </Typography>
          </Grid>
          <Grid item xs={10}>
            {isLoadingEventInfo ? (
              <Skeleton />
            ) : (
              `${events.data.attributes.date}`
            )}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              <LocationOnIcon />
            </Typography>
          </Grid>
          <Grid item xs={10}>
            {isLoadingEventInfo ? (
              <Skeleton />
            ) : (
              `${events.data.attributes.location}`
            )}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" component="p">
              <ConfirmationNumberOutlinedIcon />
            </Typography>
          </Grid>
          <Grid item xs={10} sx={{ marginBottom: 2 }}>
            €
            {isLoadingEventInfo ? (
              <Skeleton />
            ) : (
              `${events.data.attributes.price}`
            )}
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          square
          sx={{
            marginY: 2,
            paddingY: 2,
            borderBottom: 1,
            borderColor: "grey.500",
          }}
        >
          <Typography variant="h6" component="h3" sx={{ marginBottom: 2 }}>
            Beschrijving
          </Typography>
          {isLoadingEventInfo ? (
            <Skeleton />
          ) : (
            `${events.data.attributes.description}`
          )}
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <ShoppingCartOutlinedIcon />
          </Grid>
          <Grid item sx={{ margin: 2 }} xs={4}>
            <FormControl>
              <InputLabel id="tickets-amount">Tickets</InputLabel>
              <Select
                labelId="tickets-amount"
                id="tickets-amount"
                value={amount}
                label="Tickets"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ float: "right" }}>
            <p>total price</p>
            <p>{console.log(props.price * amount)}</p>
          </Grid>
        </Grid>
        <OrderButton>Koop Tickets</OrderButton>
      </Container>
    </>
  );
};

export default ClickedEventInformation;
