import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const InformationSectionMain = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.informationSectionMain}>
      <View style={[styles.wildfireBox, styles.wildfireLayout1]} />
      <View style={[styles.wildfireBox1, styles.wildfireLayout]} />
      <View style={[styles.wildfireBox2, styles.wildfireLayout1]} />
      <View style={[styles.wildfireBox3, styles.wildfireLayout]} />
      <View style={styles.iconBar}>
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
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Pressable
          style={styles.group}
          onPress={() => navigation.navigate("ProfilePage2")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
          onPress={() => navigation.navigate("FeedMain")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.vectorPosition]}
          onPress={() => navigation.navigate("EmergencyContactsPage3")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-2.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.hurricaneIcon}
        contentFit="cover"
        source={require("../assets/hurricane-icon.png")}
      />
      <Image
        style={[styles.tornadoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/tornado-icon.png")}
      />
      <Image
        style={[styles.floodIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/flood-icon.png")}
      />
      <View style={[styles.disasterInfoBox, styles.iconBarChildLayout]} />
      <Text style={styles.disasterInformation}>Disaster Information</Text>
      <Pressable
        style={styles.wildfireButtonClickable}
        onPress={() => navigation.navigate("InformationSectionTopic")}
      >
        <Image
          style={[styles.wildfireIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wildfire-icon1.png")}
        />
        <Text style={styles.wildfire}>Wildfire</Text>
      </Pressable>
      <Text style={[styles.flood, styles.floodTypo]}>Flood</Text>
      <Text style={[styles.tornado, styles.floodTypo]}>Tornado</Text>
      <Text style={[styles.hurricane, styles.floodTypo]}>Hurricane</Text>
      <Text style={[styles.readMoreAbout, styles.readMoreAboutTypo]}>
        Read more about different types of disasters to stay prepared
      </Text>
      <Text
        style={[styles.visitTheOfficialContainer, styles.readMoreAboutTypo]}
      >
        <Text style={styles.visitTheOfficial}>{`Visit the official FEMA sources:
`}</Text>
        <Text style={styles.wwwfemagov}>www.fema.gov</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wildfireLayout1: {
    height: 185,
    width: 161,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorCoral,
    borderRadius: Border.br_21xl,
    left: 10,
    position: "absolute",
  },
  wildfireLayout: {
    left: 210,
    height: 185,
    width: 161,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorCoral,
    borderRadius: Border.br_21xl,
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
  vectorPosition: {
    height: "32%",
    bottom: "41%",
    top: "27%",
    position: "absolute",
  },
  iconPosition: {
    top: 482,
    height: 110,
    position: "absolute",
  },
  floodTypo: {
    height: 30,
    top: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    width: 132,
    position: "absolute",
  },
  readMoreAboutTypo: {
    width: 330,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  wildfireBox: {
    top: 225,
  },
  wildfireBox1: {
    top: 464,
  },
  wildfireBox2: {
    top: 464,
  },
  wildfireBox3: {
    top: 225,
  },
  iconBarChild: {
    height: 100,
    zIndex: 0,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 180,
    top: 22,
    width: 36,
    height: 38,
    zIndex: 1,
    position: "absolute",
  },
  vectorIcon: {
    height: "34%",
    width: "7.32%",
    top: "26%",
    right: "65.66%",
    bottom: "40%",
    left: "27.02%",
    zIndex: 2,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
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
  vector: {
    left: "65.15%",
    right: "26.77%",
    width: "8.08%",
    zIndex: 4,
  },
  container: {
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
  hurricaneIcon: {
    left: 225,
    height: 110,
    width: 132,
    top: 235,
    position: "absolute",
  },
  tornadoIcon: {
    left: 36,
    width: 111,
  },
  floodIcon: {
    left: 230,
    width: 121,
  },
  disasterInfoBox: {
    top: 40,
    left: -3,
    height: 56,
    position: "absolute",
  },
  disasterInformation: {
    marginLeft: -153.5,
    top: 48,
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  wildfireIcon: {
    height: "66.27%",
    width: "81.82%",
    top: "0%",
    right: "9.09%",
    bottom: "33.73%",
    left: "9.09%",
    position: "absolute",
  },
  wildfire: {
    height: "18.07%",
    top: "81.93%",
    left: "0%",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: "100%",
    position: "absolute",
  },
  wildfireButtonClickable: {
    left: 24,
    height: 166,
    width: 132,
    top: 235,
    position: "absolute",
  },
  flood: {
    marginLeft: 28.5,
    height: 30,
    top: "50%",
    marginTop: 192,
  },
  tornado: {
    marginLeft: -172.5,
    marginTop: 192,
  },
  hurricane: {
    marginTop: -55,
    marginLeft: 28.5,
    height: 30,
    top: "50%",
  },
  readMoreAbout: {
    top: 116,
    left: 32,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    height: 56,
  },
  visitTheOfficial: {
    color: Color.colorBlack,
  },
  wwwfemagov: {
    color: Color.colorRoyalblue,
  },
  visitTheOfficialContainer: {
    top: 697,
    left: 30,
    fontSize: FontSize.size_base,
    height: 40,
  },
  informationSectionMain: {
    backgroundColor: Color.colorAntiquewhite,
    width: 393,
    height: 852,
    overflow: "hidden",
  },
});

export default InformationSectionMain;
