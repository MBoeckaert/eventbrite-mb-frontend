import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import NavBar from "./Navigation";

const Layout = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <Outlet />
      <NavBar />
    </Box>
  );
};

export default Layout;
