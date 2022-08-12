import React from "react";
import { Container } from "@mui/system";
import { Stack, TextField, Typography, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

const CreateEvent = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
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

      <Stack spacing={4}>
        <TextField id="name" label="Name" required />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Datum"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField id="location" label="Location" required />
        <TextField id="price" label="Price" required />
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
        />
        <CreateButton
          color="inherit"
          component="a"
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
      </Stack>
    </Container>
  );
};

export default CreateEvent;
