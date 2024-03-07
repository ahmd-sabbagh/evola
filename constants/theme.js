import { PixelRatio } from "react-native";
// SIZES
const fontScale = PixelRatio.getFontScale();
export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};
// SIZES
// COLORS
export const COLORS = {
  bg: "#111827",
  main:"#172B4D",
  cardBg: "#1F2937",
  second: "#4F46E5",
  white: "#FFF",
  black: "#000",
  gray: "#ddd",
};
// COLORS
// FONTS
export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};
// FONTS
// Padding
export const paddingSafeArea = 10
// Padding
