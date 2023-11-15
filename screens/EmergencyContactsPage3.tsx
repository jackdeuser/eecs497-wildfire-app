import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const EmergencyContactsPage3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.emergencyContactsPage3}>
      <View style={[styles.iconBar, styles.iconBarPosition]}>
        <View style={[styles.iconBarChild, styles.iconBarChildLayout]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("LiveMapMain")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("InformationSectionMain")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.group}
          onPress={() => navigation.navigate("ProfilePage2")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector1, styles.vector1Position]}
          onPress={() => navigation.navigate("FeedMain")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconBarItem, styles.vector1Position]}
          contentFit="cover"
          source={require("../assets/group-22.png")}
        />
      </View>
      <View
        style={[
          styles.emergencyContactsPage3Child,
          styles.rectangleViewShadowBox,
        ]}
      />
      <View
        style={[styles.emergencyContactsPage3Item, styles.emergencyShadowBox1]}
      />
      <Text style={[styles.email, styles.emailTypo]}>Email*</Text>
      <View
        style={[styles.emergencyContactsPage3Inner, styles.emergencyShadowBox]}
      />
      <Text style={[styles.phoneNumber, styles.phoneTypo1]}>Phone Number</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.primaryContactName, styles.phoneTypo1]}>
        Primary Contact Name*
      </Text>
      <View
        style={[
          styles.emergencyContactsPage3Child1,
          styles.emergencyShadowBox1,
        ]}
      />
      <View
        style={[styles.emergencyContactsPage3Child2, styles.emergencyShadowBox]}
      />
      <Text style={[styles.phoneNumber1, styles.phoneTypo1]}>
        Phone Number*
      </Text>
      <View
        style={[
          styles.emergencyContactsPage3Child3,
          styles.emergencyChildShadowBox2,
        ]}
      />
      <View
        style={[
          styles.emergencyContactsPage3Child4,
          styles.emergencyChildShadowBox1,
        ]}
      />
      <Text style={[styles.email1, styles.emailTypo]}>Email</Text>
      <View
        style={[
          styles.emergencyContactsPage3Child5,
          styles.emergencyChildShadowBox,
        ]}
      />
      <Text style={[styles.phoneNumber2, styles.phoneTypo]}>Phone Number</Text>
      <View
        style={[
          styles.emergencyContactsPage3Child6,
          styles.emergencyChildShadowBox2,
        ]}
      />
      <Text
        style={[styles.secondaryContactName, styles.phoneTypo1]}
      >{`Secondary Contact Name `}</Text>
      <View
        style={[
          styles.emergencyContactsPage3Child7,
          styles.emergencyChildShadowBox1,
        ]}
      />
      <View
        style={[
          styles.emergencyContactsPage3Child8,
          styles.emergencyChildShadowBox,
        ]}
      />
      <Text style={[styles.phoneNumber3, styles.phoneTypo]}>Phone Number</Text>
      <Pressable
        style={styles.carbonaddAlt}
        onPress={() => navigation.navigate("ProfilePage2")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/carbonaddalt.png")}
        />
      </Pressable>
      <View
        style={[styles.iconamooneditLightParent, styles.iconamooneditLayout]}
      >
        <Image
          style={[styles.iconamooneditLight, styles.iconamooneditLayout]}
          contentFit="cover"
          source={require("../assets/iconamooneditlight.png")}
        />
        <Text style={[styles.edit, styles.editFlexBox]}>Edit</Text>
      </View>
      <View style={[styles.emergencyContactsBox, styles.iconBarChildLayout]} />
      <Text style={[styles.emergencyContacts, styles.editFlexBox]}>
        Emergency Contacts
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBarPosition: {
    left: -3,
    position: "absolute",
  },
  iconBarChildLayout: {
    width: 396,
    backgroundColor: Color.colorSaddlebrown,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector1Position: {
    height: "32%",
    bottom: "41%",
    top: "27%",
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 37,
    width: 308,
    borderWidth: 1,
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
    left: 46,
    top: 134,
    position: "absolute",
  },
  emergencyShadowBox1: {
    left: 45,
    top: 256,
    height: 37,
    width: 308,
    borderWidth: 1,
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
    position: "absolute",
  },
  emailTypo: {
    height: 12,
    width: 305,
    fontSize: FontSize.size_base,
    left: 47,
    textAlign: "left",
    color: Color.colorSaddlebrown,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  emergencyShadowBox: {
    top: 195,
    height: 37,
    width: 308,
    borderWidth: 1,
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
    left: 46,
    position: "absolute",
  },
  phoneTypo1: {
    left: 48,
    height: 12,
    width: 305,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  emergencyChildShadowBox2: {
    top: 371,
    height: 37,
    width: 308,
    borderWidth: 1,
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
    left: 46,
    position: "absolute",
  },
  emergencyChildShadowBox1: {
    top: 493,
    left: 45,
    height: 37,
    width: 308,
    borderWidth: 1,
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
    position: "absolute",
  },
  emergencyChildShadowBox: {
    top: 432,
    height: 37,
    width: 308,
    borderWidth: 1,
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
    left: 46,
    position: "absolute",
  },
  phoneTypo: {
    top: 414,
    left: 48,
    height: 12,
    width: 305,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconamooneditLayout: {
    height: 24,
    position: "absolute",
  },
  editFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconBarChild: {
    height: 100,
    zIndex: 0,
  },
  wrapper: {
    left: 180,
    top: 22,
    width: 36,
    height: 38,
    zIndex: 1,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "27.02%",
    top: "26%",
    right: "65.66%",
    bottom: "40%",
    width: "7.32%",
    height: "34%",
    zIndex: 2,
    position: "absolute",
  },
  group: {
    left: "83.16%",
    top: "26.3%",
    right: "8.38%",
    bottom: "40.2%",
    width: "8.46%",
    height: "33.5%",
    zIndex: 3,
    position: "absolute",
  },
  vector1: {
    left: "65.15%",
    right: "26.77%",
    width: "8.08%",
    zIndex: 4,
  },
  iconBarItem: {
    width: "8.84%",
    right: "83.33%",
    left: "7.83%",
    zIndex: 5,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconBar: {
    top: 752,
  },
  emergencyContactsPage3Child: {
    borderColor: Color.colorWhite,
  },
  emergencyContactsPage3Item: {
    borderColor: Color.colorWhite,
  },
  email: {
    top: 238,
  },
  emergencyContactsPage3Inner: {
    borderColor: Color.colorWhite,
  },
  phoneNumber: {
    color: Color.colorSilver_100,
    top: 177,
    left: 48,
  },
  rectangleView: {
    borderColor: Color.colorSaddlebrown,
  },
  primaryContactName: {
    top: 116,
    color: Color.colorSaddlebrown,
  },
  emergencyContactsPage3Child1: {
    borderColor: Color.colorSaddlebrown,
  },
  emergencyContactsPage3Child2: {
    borderColor: Color.colorSaddlebrown,
  },
  phoneNumber1: {
    top: 177,
    left: 48,
    color: Color.colorSaddlebrown,
  },
  emergencyContactsPage3Child3: {
    borderColor: Color.colorWhite,
  },
  emergencyContactsPage3Child4: {
    borderColor: Color.colorWhite,
  },
  email1: {
    top: 475,
  },
  emergencyContactsPage3Child5: {
    borderColor: Color.colorWhite,
  },
  phoneNumber2: {
    color: Color.colorSilver_100,
  },
  emergencyContactsPage3Child6: {
    borderColor: Color.colorSaddlebrown,
  },
  secondaryContactName: {
    top: 353,
    color: Color.colorSaddlebrown,
  },
  emergencyContactsPage3Child7: {
    borderColor: Color.colorSaddlebrown,
  },
  emergencyContactsPage3Child8: {
    borderColor: Color.colorSaddlebrown,
  },
  phoneNumber3: {
    color: Color.colorSaddlebrown,
  },
  icon4: {
    overflow: "hidden",
  },
  carbonaddAlt: {
    left: 174,
    top: 579,
    width: 44,
    height: 44,
    position: "absolute",
  },
  iconamooneditLight: {
    top: 0,
    left: 0,
    width: 24,
    overflow: "hidden",
  },
  edit: {
    top: 2,
    left: 26,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 40,
    height: 21,
    color: Color.colorSaddlebrown,
  },
  iconamooneditLightParent: {
    top: 344,
    left: 288,
    width: 66,
  },
  emergencyContactsBox: {
    top: 40,
    height: 56,
    left: -3,
    position: "absolute",
  },
  emergencyContacts: {
    marginLeft: -153.5,
    top: 48,
    left: "50%",
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  emergencyContactsPage3: {
    backgroundColor: Color.colorAntiquewhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default EmergencyContactsPage3;
