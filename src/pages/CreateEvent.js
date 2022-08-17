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
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
// import { useState } from "react";

const defaultValues = {
  categories: [],
  name: "",
  description: "",
};

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

const CreateEvent = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(new Date("2022-01-01T12:00:00"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  //adding new FormData for uploading files
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({ defaultValues });
  const jwt = useStore((state) => state.jwt);
  const queryClient = useQueryClient();

  //where does this get used? nowhere?
  const { isLoading, data: categories } = useQuery("categories", async () => {
    const data = await fetch(`${backendUrl}/api/categories`).then((r) =>
      r.json()
    );
    return data;
  });

  const postEvent = async (data) => {
    return await fetch(`${backendUrl}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        return data;
      });
  };

  const mutation = useMutation(postEvent, {
    onSuccess: (data) => {
      const creatorId = data.id;
      console.log("success");
      queryClient.invalidateQueries("events");
      reset(); //comment this out
      navigate(`/signUp/${creatorId}`);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ data });
  };

  const handleCloseSnackbar = () => {
    mutation.reset();
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

      <Stack spacing={4} as="form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
            // error={!!errors?.name}
            // helperText={errors?.name?.message}
            // {...register("date", {
            //   required: "Date is required",
            // })}
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
        <Typography>Create A File Upload here</Typography>
        <Button variant="contained" component="label">
          Upload Event Image
          <input type="file" hidden />
        </Button>
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
          loading={mutation.isLoading}
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
        >
          Create Event
        </CreateButton>
        <Snackbar
          open={mutation.isSuccess}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Event added
          </Alert>
        </Snackbar>
        <Snackbar
          open={mutation.isError}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            Event could not be added: <br />
            {mutation.error?.message}
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  );
};

export default CreateEvent;
