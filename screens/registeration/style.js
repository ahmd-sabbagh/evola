import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/theme";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F1EDFB",
    gap:17
  },
  imageContainer: {
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    gap: 10,
  },
  textTitle: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  phoneNumContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  phoneNum: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical:7,
    gap: 15,
    borderRadius: 50,
  },
  input: {
    borderLeftWidth: 1,
    borderColor: "#ABABB7",
    paddingLeft: 15,
  },
  label: {
    color: "#ABABB7",
  },
  inputText: {
    maxWidth: "100%",
  },
  country: {
    width: 91,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  codeNum: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  code: {
    fontFamily: FONTS.bold,
  },
  forget: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: "#2D2E49",
  },
  login: {
    backgroundColor: "#935154",
    borderRadius: 50,
    padding: 17,
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap:15
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
