import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ProfilePage2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profilePage2}>
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <Text style={[styles.yourProfile, styles.editFlexBox]}>Your Profile</Text>
      <View style={styles.personalInfoBox} />
      <View style={styles.iconBar}>
        <View style={styles.iconBarChild} />
        <Pressable
          style={styles.mapButton}
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
            style={[styles.icon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupIcon1, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
        <Pressable
          style={[styles.vector1, styles.vector1Position]}
          onPress={() => navigation.navigate("FeedMain")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.vector1Position]}
          onPress={() => navigation.navigate("EmergencyContactsPage3")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/group-2.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.gridiconsaddOutline}
        contentFit="cover"
        source={require("../assets/gridiconsaddoutline.png")}
      />
      <Text style={styles.ezraJones}>Ezra Jones</Text>
      <Text style={[styles.ezraJones1, styles.editTypo]}>Ezra Jones</Text>
      <Text style={[styles.ezjonesumichedu, styles.textLayout]}>
        ezjones@umich.edu
      </Text>
      <Text style={[styles.text, styles.textLayout]}>734-123-4567</Text>
      <Text style={[styles.mainStreetLa, styles.mainStreetLaTypo]}>
        Main Street, LA, California
      </Text>
      <Text style={[styles.personalInformation, styles.mainStreetLaTypo]}>
        Personal Information
      </Text>
      <View
        style={[styles.iconamooneditLightParent, styles.iconamooneditLayout]}
      >
        <Image
          style={[styles.iconamooneditLight, styles.iconamooneditLayout]}
          contentFit="cover"
          source={require("../assets/iconamooneditlight.png")}
        />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </View>
      <Image
        style={[styles.groupIcon2, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={[styles.miemailIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/miemail.png")}
      />
      <Image
        style={[styles.iconamoonphoneLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconamoonphonelight.png")}
      />
      <Image
        style={[styles.carbonlocationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/carbonlocation.png")}
      />
      <Pressable
        style={styles.emergencyContactsButton}
        onPress={() => navigation.navigate("EmergencyContactsPage3")}
      >
        <Text style={[styles.householdMembers, styles.mainStreetLaTypo]}>
          Household Members
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  editFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  vector1Position: {
    height: "32%",
    bottom: "41%",
    top: "27%",
    position: "absolute",
  },
  editTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  textLayout: {
    width: 240,
    color: Color.colorSaddlebrown,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginLeft: -109.5,
    height: 27,
    left: "50%",
  },
  mainStreetLaTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  iconamooneditLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: 41,
    width: 41,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "16.02%",
    width: "34.48%",
    top: "11.54%",
    right: "32.88%",
    bottom: "72.44%",
    left: "32.65%",
    position: "absolute",
  },
  yourProfile: {
    marginLeft: -85.5,
    top: 50,
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    textAlign: "left",
  },
  personalInfoBox: {
    top: 293,
    borderRadius: 39,
    backgroundColor: Color.colorWhite,
    width: 393,
    height: 564,
    left: 0,
    position: "absolute",
  },
  iconBarChild: {
    backgroundColor: Color.colorSaddlebrown,
    width: 396,
    height: 100,
    zIndex: 0,
  },
  mapButton: {
    left: 180,
    top: 22,
    width: 36,
    height: 38,
    zIndex: 1,
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  groupIcon1: {
    height: "33.5%",
    width: "8.46%",
    top: "26.3%",
    right: "8.38%",
    bottom: "40.2%",
    left: "83.16%",
    zIndex: 3,
    position: "absolute",
  },
  vector1: {
    left: "65.15%",
    right: "26.77%",
    width: "8.08%",
    zIndex: 4,
  },
  wrapper: {
    left: "7.83%",
    right: "83.33%",
    width: "8.84%",
    zIndex: 5,
  },
  iconBar: {
    top: 752,
    left: 0,
    position: "absolute",
  },
  gridiconsaddOutline: {
    top: 99,
    left: 230,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  ezraJones: {
    marginLeft: -64.5,
    top: 236,
    fontSize: FontSize.size_5xl,
    height: 27,
    width: 129,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  ezraJones1: {
    top: 372,
    color: Color.colorSaddlebrown,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
    marginLeft: -109.5,
    fontWeight: "500",
    height: 27,
    width: 129,
    left: "50%",
  },
  ezjonesumichedu: {
    top: 423,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 475,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
  },
  mainStreetLa: {
    top: 523,
    width: 240,
    color: Color.colorSaddlebrown,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    marginLeft: -109.5,
    height: 27,
    left: "50%",
  },
  personalInformation: {
    top: 319,
    left: 41,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 204,
    height: 20,
    color: Color.colorSaddlebrown,
  },
  iconamooneditLight: {
    top: 0,
    width: 24,
    left: 0,
    overflow: "hidden",
  },
  edit: {
    top: 2,
    left: 26,
    fontSize: FontSize.size_lg,
    width: 40,
    height: 21,
    color: Color.colorSaddlebrown,
    textAlign: "left",
    position: "absolute",
  },
  iconamooneditLightParent: {
    top: 317,
    left: 297,
    width: 66,
  },
  groupIcon2: {
    height: "4.58%",
    width: "9.92%",
    top: "43.19%",
    right: "84.48%",
    bottom: "52.23%",
    left: "5.6%",
    position: "absolute",
  },
  miemailIcon: {
    top: 417,
  },
  iconamoonphoneLight: {
    top: 468,
  },
  carbonlocationIcon: {
    top: 525,
  },
  householdMembers: {
    height: "79.41%",
    width: "78.43%",
    top: "20.59%",
    left: "21.57%",
    color: "#848181",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorIcon: {
    height: "97.06%",
    width: "13.4%",
    top: "0%",
    right: "86.6%",
    bottom: "2.94%",
    left: "0%",
    position: "absolute",
  },
  emergencyContactsButton: {
    top: 578,
    width: 306,
    height: 34,
    left: 21,
    position: "absolute",
  },
  profilePage2: {
    backgroundColor: Color.colorCoral,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePage2;
