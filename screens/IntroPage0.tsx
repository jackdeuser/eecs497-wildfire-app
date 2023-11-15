import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IntroPage0 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.introPage0}>
      <View style={styles.reliefLogosTransparent1} />
      <Image
        style={styles.reliefLogosTransparent2Icon}
        contentFit="cover"
        source={require("../assets/relieflogos-transparent-2.png")}
      />
      <Pressable
        style={[styles.signInButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("ProfilePage2")}
      >
        <View style={styles.boxShadowBox} />
        <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
      </Pressable>
      <Pressable
        style={[styles.createAccountButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("RegistrationPage1")}
      >
        <View style={styles.boxShadowBox} />
        <Text style={[styles.createAccount, styles.signInTypo]}>
          Create Account
        </Text>
      </Pressable>
      <Image
        style={[styles.google1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/google-1.png")}
      />
      <Image
        style={[styles.facebook1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/facebook-1.png")}
      />
      <Image
        style={[styles.apple1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/apple-1.png")}
      />
      <Image
        style={[styles.github1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/github-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 37,
    width: 262,
    left: 65,
    position: "absolute",
  },
  signInTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: "24.32%",
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    top: 610,
    width: 35,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    width: 35,
    position: "absolute",
    overflow: "hidden",
  },
  reliefLogosTransparent1: {
    top: 147,
    left: 113,
    width: 166,
    height: 160,
    position: "absolute",
  },
  reliefLogosTransparent2Icon: {
    top: 170,
    left: 96,
    width: 201,
    height: 201,
    position: "absolute",
  },
  boxShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  signIn: {
    left: "39.69%",
  },
  signInButton: {
    top: 426,
  },
  createAccount: {
    left: "26.72%",
  },
  createAccountButton: {
    top: 500,
  },
  google1Icon: {
    left: 80,
  },
  facebook1Icon: {
    left: 146,
  },
  apple1Icon: {
    top: 605,
    left: 212,
    height: 45,
  },
  github1Icon: {
    top: 609,
    left: 278,
    height: 36,
  },
  introPage0: {
    backgroundColor: Color.colorCoral,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default IntroPage0;
