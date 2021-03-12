import { Colors, ThemeManager, Typography, Text } from "react-native-ui-lib";

/**
 * https://wix.github.io/react-native-ui-lib/foundation/colors
 */
Colors.loadColors({
  primary: "#00C3AE",
  secondary: "#57c0e8",
  purple: "#742f8a",
  pink: "#e51a92",
  green: "#94d500",
});

/**
 * https://wix.github.io/react-native-ui-lib/foundation/style
 */
Typography.loadTypographies({
  h1: {
    fontSize: 30,
    fontWeight: "300",
    lineHeight: 35,
  },
  h2: {
    fontSize: 28,
    fontWeight: "300",
    lineHeight: 30,
  },
  h3: {
    fontSize: 24,
    fontWeight: "300",
    lineHeight: 24,
  },
  h4: {
    fontSize: 22,
    fontWeight: "300",
    lineHeight: 22,
  },
  h5: {
    fontSize: 20,
    fontWeight: "300",
    lineHeight: 20,
  },
});

// Spacings.loadSpacings( {
//   page: isSmallScreen
//     ? 16
//     : 20
// } );

/**
 * https://wix.github.io/react-native-ui-lib/foundation/theme-manager
 */
ThemeManager.setComponentTheme("View", (props, context) => ({
  backgroundColor: props.main ? "#ffffff" : "transparent",
}));

ThemeManager.setComponentTheme("TextField", (props, context) => ({
  backgroundColor: props.main ? "#ffffff" : "transparent",
  floatingPlaceholderColor: Colors.menta,
  underlineColor: Colors.menta,
  floatingPlaceholder: true,
  width: 250,
  floatOnFocus: true,
  color: props.light ? "#ffffff" : "#000000",
}));

ThemeManager.setComponentTheme("Text", (props, context) => {
  return {
    text70: true, // will set the text70 typography modifier prop to be true by default
    dark10: true, // will set the dark10 color modifier prop to be true by default
  };
});

ThemeManager.setComponentTheme("Button", (props, context) => {
  let styles = {
    backgroundColor: "#fcbf14",
  };
  if (props.link && props.light) {
    styles.color = Colors.menta;
  }
  return styles;
});

ThemeManager.setComponentTheme("ConnectionStatusBar", {
  text70: true, // will set the text70 typography modifier prop to be true by default
  dark10: true, // will set the dark10 color modifier prop to be true by default
  backgroundColor: "red",
});
