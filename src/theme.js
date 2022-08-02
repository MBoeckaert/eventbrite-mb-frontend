import { createTheme } from "@mui/material/styles";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  //Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#0E0E0E",
      light: "#F7F7F7",
      dark: "#aaaaaa",
    },
    secondary: {
      main: "#EB521D",
      light: "#FFF6F1",
    },
  },
  shape: {
    borderRadius: 2,
    borderWidth: 0.3,
  },
  typography: {
    body: {
      fontWeight: "initial",
      fontSize: "initial",
    },
    body2: {
      fontWeight: "initial",
      fontSize: 14,
    },
    h1: {
      fontSize: 28,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 18,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 16,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 12,
    },
  },
});

export default theme;
