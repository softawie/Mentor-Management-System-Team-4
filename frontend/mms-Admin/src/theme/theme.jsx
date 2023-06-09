import { alpha, createTheme, useTheme } from "@mui/material";

const themeColors = {
  primary: "#058B94",
  secondary: "#808080",
  success: "#00ca65",
  error: "#6a1143",
  info: "#222996",
  warning: "#bb4d1d",
  background: "#FFFFFF",
  text: "#FFFFFF",
  main: "#F7FEFF",
  black: "#333333",
};

const theme = createTheme({
  typography: {
    fontFamily: "'Mukta', sans-serif",
  },

  palette: {
    primary: {
      main: themeColors.primary,
      contrastText: themeColors.text,
    },
    common: {
      black: themeColors.black,
      main: themeColors.main,
      white: themeColors.text,
    },
    secondary: {
      main: themeColors.secondary,
      contrastText: themeColors.text,
    },
    error: {
      main: themeColors.error,
      contrastText: themeColors.text,
    },

    warning: {
      main: themeColors.warning,
      contrastText: themeColors.text,
    },
    info: {
      main: themeColors.info,
      contrastText: themeColors.text,
    },
    success: {
      main: themeColors.success,
      contrastText: themeColors.text,
    },
    text: {
      primary: themeColors.primary,
      secondary: themeColors.secondary,
      disabled: alpha(themeColors.secondary, 0.38),
    },
    divider: alpha(themeColors.secondary, 0.12),
    background: {
      paper: themeColors.background,
      default: themeColors.background,
    },
    action: {
      active: alpha(themeColors.primary, 0.54),
      hover: alpha(themeColors.primary, 0.1),
      selected: alpha(themeColors.background, 0.1),
      disabled: alpha(themeColors.primary, 0.26),
      disabledBackground: alpha(themeColors.primary, 0.12),
      focus: alpha(themeColors.primary, 0.12),
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        size: "small",
        // color: "#808080",
        // color: "primary",
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        tag: {
          color: themeColors.black,
        },
      },
    },
  },
  shadows: [
    "none",
    `0px 2px 1px -1px ${alpha(
      themeColors.primary,
      0.2
    )},0px 1px 1px 0px ${alpha(
      themeColors.primary,
      0.14
    )},0px 1px 3px 0px ${alpha(themeColors.primary, 0.12)}`,
    `0px 3px 1px -2px ${alpha(
      themeColors.primary,
      0.2
    )},0px 2px 2px 0px ${alpha(
      themeColors.primary,
      0.14
    )},0px 1px 5px 0px ${alpha(themeColors.primary, 0.12)}`,
    `0px 3px 3px -2px ${alpha(
      themeColors.primary,
      0.2
    )},0px 3px 4px 0px ${alpha(
      themeColors.primary,
      0.14
    )},0px 1px 8px 0px ${alpha(themeColors.primary, 0.12)}`,
    `0px 2px 4px -1px ${alpha(
      themeColors.primary,
      0.2
    )},0px 4px 5px 0px ${alpha(
      themeColors.primary,
      0.14
    )},0px 1px 10px 0px ${alpha(themeColors.primary, 0.12)}`,
    `0px 3px 5px -1px ${alpha(
      themeColors.primary,
      0.2
    )},0px 5px 8px 0px ${alpha(
      themeColors.primary,
      0.14
    )},0px 1px 14px 0px ${alpha(themeColors.primary, 0.12)}`,
    `0px 3px 5px -1px ${alpha(
      themeColors.primary,
      0.2
    )},0px 6px 10px 0px ${alpha(
      themeColors.primary,
      0.14
    )},0px 1px 18px 0px ${alpha(themeColors.primary, 0.12)}`,
    `0px 4px 5px -2px ${alpha(
      themeColors.primary,
      0.2
    )},0px 7px 10px 1px ${alpha(
      themeColors.primary,
      0.14
    )},0px 2px 16px 1px ${alpha(themeColors.primary, 0.12)}`,
    `0px 5px 5px -3px ${alpha(
      themeColors.primary,
      0.2
    )},0px 8px 10px 1px ${alpha(
      themeColors.primary,
      0.14
    )},0px 3px 14px 2px ${alpha(themeColors.primary, 0.12)}`,
    `0px 5px 6px -3px ${alpha(
      themeColors.primary,
      0.2
    )},0px 9px 12px 1px ${alpha(
      themeColors.primary,
      0.14
    )},0px 3px 16px 2px ${alpha(themeColors.primary, 0.12)}`,
    `0px 6px 6px -3px ${alpha(
      themeColors.primary,
      0.2
    )},0px 10px 14px 1px ${alpha(
      themeColors.primary,
      0.14
    )},0px 4px 18px 3px ${alpha(themeColors.primary, 0.12)}`,
    `0px 6px 7px -4px ${alpha(
      themeColors.primary,
      0.2
    )},0px 11px 15px 1px ${alpha(
      themeColors.primary,
      0.14
    )},0px 4px 20px 3px ${alpha(themeColors.primary, 0.12)}`,
    `0px 7px 8px -4px ${alpha(
      themeColors.primary,
      0.2
    )},0px 12px 17px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 5px 22px 4px ${alpha(themeColors.primary, 0.12)}`,
    `0px 7px 8px -4px ${alpha(
      themeColors.primary,
      0.2
    )},0px 13px 19px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 5px 24px 4px ${alpha(themeColors.primary, 0.12)}`,
    `0px 7px 9px -4px ${alpha(
      themeColors.primary,
      0.2
    )},0px 14px 21px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 5px 26px 4px ${alpha(themeColors.primary, 0.12)}`,
    `0px 8px 9px -5px ${alpha(
      themeColors.primary,
      0.2
    )},0px 15px 22px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 6px 28px 5px ${alpha(themeColors.primary, 0.12)}`,
    `0px 8px 10px -5px ${alpha(
      themeColors.primary,
      0.2
    )},0px 16px 24px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 6px 30px 5px ${alpha(themeColors.primary, 0.12)}`,
    `0px 8px 11px -5px ${alpha(
      themeColors.primary,
      0.2
    )},0px 17px 26px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 6px 32px 5px ${alpha(themeColors.primary, 0.12)}`,
    `0px 9px 11px -5px ${alpha(
      themeColors.primary,
      0.2
    )},0px 18px 28px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 7px 34px 6px ${alpha(themeColors.primary, 0.12)}`,
    `0px 9px 12px -6px ${alpha(
      themeColors.primary,
      0.2
    )},0px 19px 29px 2px ${alpha(
      themeColors.primary,
      0.14
    )},0px 7px 36px 6px ${alpha(themeColors.primary, 0.12)}`,
    `0px 10px 13px -6px ${alpha(
      themeColors.primary,
      0.2
    )},0px 20px 31px 3px ${alpha(
      themeColors.primary,
      0.14
    )},0px 8px 38px 7px ${alpha(themeColors.primary, 0.12)}`,
    `0px 10px 13px -6px ${alpha(
      themeColors.primary,
      0.2
    )},0px 21px 33px 3px ${alpha(
      themeColors.primary,
      0.14
    )},0px 8px 40px 7px ${alpha(themeColors.primary, 0.12)}`,
    `0px 10px 14px -6px ${alpha(
      themeColors.primary,
      0.2
    )},0px 22px 35px 3px ${alpha(
      themeColors.primary,
      0.14
    )},0px 8px 42px 7px ${alpha(themeColors.primary, 0.12)}`,
    `0px 11px 14px -7px ${alpha(
      themeColors.primary,
      0.2
    )},0px 23px 36px 3px ${alpha(
      themeColors.primary,
      0.14
    )},0px 9px 44px 8px ${alpha(themeColors.primary, 0.12)}`,
    `0px 11px 15px -7px ${alpha(
      themeColors.primary,
      0.2
    )},0px 24px 38px 3px ${alpha(
      themeColors.primary,
      0.14
    )},0px 9px 46px 8px ${alpha(themeColors.primary, 0.12)}`,
  ],
});

export const usePalette = () => useTheme().palette;
export const drawerWidth = 260;

console.log(createTheme());
export default theme;
