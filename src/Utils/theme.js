const theme = {
  colors: {
    base: "#222831",
    highEmphasis: "#e6e6e6",
    mediumEmphasis: "#999999",
    lowEmphasis: "#666666",
    elevation: "rgba(255, 255, 255, 0)",
    elavationLess: "rgba(255, 255, 255, 0.2)",
    elevation0: "rgba(255, 255, 255, 0.03)",
    elevation1: "rgba(255, 255, 255, 0.06)",
    elevation2: "rgba(255, 255, 255, 0.12)",
    elevation3: "rgba(255, 255, 255, 0.18)",
    elevation4: "rgba(255, 255, 255, 0.24)",
    blackMatteAlt: "#3f3f3f",
    MoreBlack: "#1b1b1b",
    whiteColor: "#fff",
    shadow: "#rgba(0,0,0,.2)",
    boxGradient: "#b4e9df",
  },

  MediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: "only screen and (max-width: 31.25em)",
    small: "only screen and (max-width: 37.5em)",
    medium: "only screen and (max-width: 56.25em)",
    large: "only screen and (max-width: 80em)",
    larger: "only screen and (max-width: 90em)",
    largest: "only screen and (max-width: 97em)",
    // smallest: `only screen and (max-width: 1080px)`,
    // smaller: `only screen and (max-width: 1440px)`,
    // small: "only screen and (max-width: 1280px)",
    // medium: "only screen and (max-width: 1920px)",
    // large: "only screen and (max-width: 2560px)",
    // largest: "only screen and (max-width: 3840px)",
  },
};

export default theme;

// import { createMuiTheme } from "@material-ui/core/styles";

// const colorPreset = {
//   base: "#222831",
//   highEmphasis: "#e6e6e6",
//   mediumEmphasis: "#999999",
//   lowEmphasis: "#666666",
//   elevation: "rgba(255, 255, 255, 0)",
//   elavationLess: "rgba(255, 255, 255, 0.2)",
//   elevation0: "rgba(255, 255, 255, 0.03)",
//   elevation1: "rgba(255, 255, 255, 0.06)",
//   elevation2: "rgba(255, 255, 255, 0.12)",
//   elevation3: "rgba(255, 255, 255, 0.18)",
//   elevation4: "rgba(255, 255, 255, 0.24)",
// };

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: "Poppins",
//   },

//   breakpoints: {
//     values: {
//       xs: 1080,
//       sm: 1280,
//       sd: 1440,
//       MacScaled: 1680,
//       md: 1920,
//       lg: 2560,
//       xl: 3840,
//     },
//   },

//   colorPreset: {
//     base: colorPreset.base,
//     highEmphasis: colorPreset.highEmphasis,
//     mediumEmphasis: colorPreset.mediumEmphasis,
//     lowEmphasis: colorPreset.lowEmphasis,
//     elevation: colorPreset.elevation,
//     elavationLess: colorPreset.elavationLess,
//     elevation0: colorPreset.elevation0,
//     elevation1: colorPreset.elevation1,
//     elevation2: colorPreset.elevation2,
//     elevation3: colorPreset.elevation3,
//     elevation4: colorPreset.elevation4,
//   },

//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         "@font-face": "poppins",

//         html: {
//           fontSize: "10px",
//           letterSpacing: "0",
//         },

//         body: {
//           fontFamily: "poppins",
//           letterSpacing: "0",
//           fontSize: "unset",
//         },
//       },
//     },
//   },
// });
