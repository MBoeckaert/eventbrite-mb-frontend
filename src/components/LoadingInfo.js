import { CircularProgress, Box } from "@mui/material";

const LoadingInfo = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{ marginTop: "15vh" }} />
    </Box>
  );
};

export default LoadingInfo;
