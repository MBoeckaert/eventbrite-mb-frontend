import React from "react";
import { Container } from "@mui/system";
import {
  Stack,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { backendUrl } from "../lib/functions";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useStore } from "../store";
// import { useNavigate } from "react-router-dom";
// import LoadingInfo from "../components/LoadingInfo";

import { styled } from "@mui/material/styles";
// import { useState } from "react";

const CreateButton = styled(Button)({
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

const Input = styled("input")({
  display: "none",
});

const defaultValues = {
  name: "",
  location: "",
  price: "",
  image: "",
  description: "",
};

const CreateEvent = () => {
  // const navigate = useNavigate();
  const [value, setValue] = React.useState(new Date("2022-01-01T12:00:00"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const jwt = useStore((state) => state.jwt);
  const username = useStore((state) => state.username);

  const qs = require("qs");
  const profileQuery = qs.stringify({
    filters: {
      username: {
        $eq: username,
      },
    },
  });

  const {
    // isLoading: profileLoading,
    // error: profileError,
    data: profile,
  } = useQuery(["profile"], async () => {
    const data = await fetch(`${backendUrl}/api/profiles?${profileQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((r) => r.json());
    return data;
  });
  // console.log(profile);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    watch,
    getValues: getEventValues,
  } = useForm({ defaultValues });

  const queryClient = useQueryClient();

  const postEvent = async (data) => {
    // const formData = new FormData();
    // if (data.image.length > 0) {
    //   //tried a lot with data.event.image.length
    //   formData.append("files.cover", data.image[0], data.image[0].name);
    // }
    // formData.append("data", JSON.stringify({ ...data, image: null }));
    // parseInt(data.price);

    console.log(data);
    return await fetch(`${backendUrl}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({ data: data }), // missing "data" payload in the request body ERROR
    }).then((r) => r.json());
  };

  const createMutation = useMutation(postEvent, {
    onSuccess: (data) => {
      //data = null here...
      console.log(`succes`, data);
      queryClient.invalidateQueries("events");
      reset();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSaveEvent = () => {
    const eventData = getEventValues();
    eventData.profile = profile.data[0].id;
    console.log(eventData.profile);
    console.log(eventData);
    createMutation.mutate(eventData);
    // createMutation.mutate(eventData.profile);
  };

  const handleCloseSnackbar = () => {
    createMutation.reset();
  };

  return (
    <Container
      sx={{
        marginY: 5,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Create your Event!
      </Typography>

      <Stack
        spacing={4}
        as="form"
        noValidate
        onSubmit={handleSubmit(handleSaveEvent)}
      >
        <TextField
          id="name"
          label="Name"
          required
          error={!!errors?.name}
          helperText={errors?.name?.message}
          {...register("name", {
            required: "Name is required",
          })}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Datum"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            //error={!!errors?.name}
            //helperText={errors?.name?.message}
            //{...register("date", {
            //  required: "Date is required",
            //})}
          />
        </LocalizationProvider>
        <TextField
          id="location"
          label="Location"
          required
          error={!!errors?.name}
          helperText={errors?.name?.message}
          {...register("location", {
            required: "Location is required",
          })}
        />
        <TextField
          id="price"
          label="Price"
          required
          error={!!errors?.name}
          helperText={errors?.name?.message}
          {...register("price", {
            required: "Price is required",
          })}
        />
        {/* <Typography>Upload Event Image</Typography>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" type="file" />
        </Button> */}

        <Stack direction="row" spacing={2} alignItems="center">
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              {...register("image")}
            />
            <Button
              variant="contained"
              component="span"
              disabled={createMutation.isLoading}
            >
              Select photo
            </Button>
          </label>
          <Typography>
            {watch("image") &&
              watch("image").length > 0 &&
              watch("image")[0].name}
          </Typography>
        </Stack>
        <TextField
          id="description"
          label="Event Description"
          multiline
          rows={4}
          maxRows={6}
          error={!!errors?.name}
          helperText={errors?.name?.message}
          {...register("description", {
            required: "Description is required",
          })}
        />
        <CreateButton
          loading={createMutation.isLoading}
          loadingIndicator="Adding event"
          type="submit"
          color="inherit"
          // component="a"
          // href={`${backendUrl}/api/connect/google`}
          sx={{
            mt: 3,
            mb: 2,
            borderColor: "#f05537",
            color: "#ffffff",
          }}
          // onClick={() => {
          //   handleSaveEvent();
          // }}
        >
          Create Event
        </CreateButton>
        <Snackbar
          open={createMutation.isSuccess}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Event added
          </Alert>
        </Snackbar>
        <Snackbar
          open={createMutation.isError}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            Event could not be added: <br />
            {createMutation.error?.message}
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  );
};

export default CreateEvent;
