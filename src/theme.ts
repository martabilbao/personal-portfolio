import { extendTheme } from "@chakra-ui/react";

const breakpoints: string[] = ["40em", "52em", "64em"];

const theme = extendTheme({
  colors: {
    background: "#101731",
    highlight_color: "#FDC435",
    title: "#00B25A",

    font_high_emphasis: "#101731",
    font_medium_emphasis: "#828282",
    font_low_emphasis: "#9A9FA8",

  },
  fonts: {
    poppins: "Poppins, sans-serif",
  },
  breakpoints,
  styles: {
    global: {
      body: {
        width: "100vw",
        height: "100vh",
      },
      "#__next": {
        width: "100vw",
        height: "100vh",
      },
    },
  },
});

export default theme;
