import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const RegistrationPage2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.registrationPage2}>
      <Pressable
        style={styles.continueButton}
        onPress={() => navigation.navigate("ProfilePage2")}
      >
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      </Pressable>
      <Text style={[styles.createAccount, styles.continueTypo]}>
        Create Account
      </Text>
      <TextInput
        style={[styles.registrationPage2Child, styles.registrationChildLayout]}
        placeholder="Email Address"
      />
      <TextInput
        style={[styles.registrationPage2Item, styles.registrationChildLayout]}
        placeholder="Location"
      />
      <TextInput
        style={[styles.registrationPage2Inner, styles.registrationChildLayout]}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <TextInput
        style={[styles.rectangleTextinput, styles.registrationChildLayout]}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={[styles.registrationPage2Child1, styles.registrationChildLayout]}
        placeholder="Phone Number"
        keyboardType="number-pad"
        secureTextEntry={false}
      />
      <TextInput
        style={[styles.registrationPage2Child2, styles.registrationChildLayout]}
        placeholder="Name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continueTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  registrationChildLayout: {
    height: 35,
    width: 300,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    left: 47,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  continue: {
    fontSize: FontSize.size_base,
  },
  continueButton: {
    top: 699,
    left: 66,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 262,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  createAccount: {
    marginLeft: -115.5,
    top: 214,
    left: "50%",
    fontSize: FontSize.size_11xl,
    position: "absolute",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  registrationPage2Child: {
    top: 342,
  },
  registrationPage2Item: {
    top: 518,
  },
  registrationPage2Inner: {
    top: 474,
  },
  rectangleTextinput: {
    top: 430,
  },
  registrationPage2Child1: {
    top: 386,
  },
  registrationPage2Child2: {
    top: 298,
  },
  registrationPage2: {
    backgroundColor: Color.colorCoral,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default RegistrationPage2;
