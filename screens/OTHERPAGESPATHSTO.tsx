import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const OTHERPAGESPATHSTO = () => {
  return (
    <Text style={styles.otherPagespathsTo}>{`OTHER PAGES/PATHS TO CONNECT
The Various Buttons to show the 
interactions.

it supports vertical scroll O_O pog`}</Text>
  );
};

const styles = StyleSheet.create({
  otherPagespathsTo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default OTHERPAGESPATHSTO;
