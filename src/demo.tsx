import * as React from "react";
import { ThemeProvider, styled, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    mycompany: {
      primary: string;
    };
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    mycompany: {
      primary: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mycompany: {
      primary: "#003366"
    }
  }
});

const MyComponent = styled("div")(({ theme }) => {
  return {
    backgroundColor: theme.palette.mycompany.primary,
    width: 30,
    height: 30
  };
});

export default function BasicUsage() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" gap={2}>
        <MyComponent />
        <Box sx={{ width: 30, height: 30, bgcolor: "mycompany.primary" }} />
      </Stack>
    </ThemeProvider>
  );
}
