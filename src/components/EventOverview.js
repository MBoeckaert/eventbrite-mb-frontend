import { Card, Grid, Typography, Avatar, Modal } from "@mui/material";
import { createTheme, ThemeProvider, Link, Box } from "@mui/material";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { backendUrl } from "../lib/functions";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EventOverview = (props) => {
  //test click button
  const [clickedButton, setClickedButton] = useState(true);
  const handleClick = () => {
    setClickedButton((current) => !current);
  };

  console.log(props);
  const frontEndUrl = encodeURIComponent(
    `https://eventbrite-mb.herokuapp.com/eventInfo/${props.id}`
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card variant="outlined" sx={{ cursor: "pointer" }}>
        <Grid container spacing={2}>
          <Grid item spacing={2} xs={8} container>
            <Grid item xs={6}>
              <Link
                to={`/eventInfo/${props.id}`}
                underline="none"
                name={props.name}
              >
                {" "}
                <Avatar
                  // need to get the img from imports!!!!
                  // src={`${backendUrl + props.image} `}
                  alt="event pic"
                  sx={{ width: 252, height: 102 }}
                  variant="square"
                />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link
                to={`/eventInfo/${props.id}`}
                underline="none"
                name={props.name}
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ color: "red", marginTop: "1rem" }}
                  >
                    {props.date}
                  </Typography>
                  <Typography variant="subtitle2" component="h3">
                    {props.name}
                  </Typography>
                  <Grid item>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: "Grey" }}
                    >
                      {props.location}
                    </Typography>
                  </Grid>
                  {/* end Link here */}
                </ThemeProvider>
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body3" component="span">
              <ShareIcon onClick={handleOpen} />
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Share this Event
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <EmailShareButton url={`${frontEndUrl}`} sx={{ mr: 2 }}>
                      <EmailIcon />
                    </EmailShareButton>
                    <FacebookShareButton sx={{ mr: 2 }}>
                      <FacebookIcon />
                    </FacebookShareButton>
                    <TwitterShareButton sx={{ mr: 2 }}>
                      <TwitterIcon />
                    </TwitterShareButton>
                    <WhatsappShareButton>
                      <WhatsappIcon />
                    </WhatsappShareButton>
                  </Typography>
                </Box>
              </Modal>
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={handleClick}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body3" component="span">
              {clickedButton ? <FavoriteBorderIcon /> : <FavoriteIcon />}
              {console.log(handleClick)}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default EventOverview;
