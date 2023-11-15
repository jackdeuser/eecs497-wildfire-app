import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const InformationSectionTopic = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.informationSectionTopic}>
      <View style={styles.scrollTextWrapper}>
        <View style={[styles.scrollText, styles.wildfiresLayout]}>
          <Text
            style={[
              styles.wildfiresWildfiresAreContainer,
              styles.wildfiresLayout,
            ]}
          >
            <Text style={styles.wildfires}>
              <Text style={[styles.text, styles.textTypo]}>{`

`}</Text>
              <Text
                style={[styles.wildfires1, styles.keyPointsTypo]}
              >{`Wildfires
`}</Text>
            </Text>
            <Text style={styles.wildfiresAreUnplannedAndUn}>
              <Text style={styles.wildfires}>
                <Text style={styles.textTypo}>{`
Wildfires are unplanned and unexpected, so it is important to be prepared.

`}</Text>
                <Text style={styles.keyPointsTypo}>{`Key Points
`}</Text>
                <Text
                  style={styles.textTypo}
                >{`If you are under a wildfire warning get to safety immediately.
Leave if told to by officials.
If trapped, call 911.
Listen for emergency information & alerts.
Wear a N95 mask or better to keep particles in the air. 

`}</Text>
                <Text style={styles.keyPointsTypo}>{`Facts
`}</Text>
                <Text
                  style={styles.textTypo}
                >{`Wildfires can occur throughout the year
Wildfires can occur anywhere in the country

`}</Text>
                <Text style={styles.keyPointsTypo}>{`Protective Actions
`}</Text>
                <Text style={styles.textTypo}>{`Know important information
about your area, such as
When wildfires are likely to occur
Where wildfires are likely to occur
Emergency alerts and services
Resources, tools, and information centers for emergencies
Evacuation plans

For more information, check out the FEMA page:
`}</Text>
              </Text>
              <Text style={styles.textTypo}>
                <Text
                  style={styles.httpscommunityfemagovpro1}
                >{`https://community.fema.gov/ProtectiveActions/s/article/Wildfire
`}</Text>
              </Text>
            </Text>
          </Text>
          <Image
            style={[styles.wildfireIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/wildfire-icon.png")}
          />
        </View>
      </View>
      <View style={styles.iconBar}>
        <View style={styles.iconBarChild} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("LiveMapMain")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  wildfiresLayout: {
    height: 1244,
    width: 372,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  keyPointsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorPosition: {
    height: "32%",
    bottom: "41%",
    top: "27%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_3xl,
  },
  wildfires1: {
    fontSize: FontSize.size_11xl,
  },
  wildfires: {
    color: Color.colorSaddlebrown,
  },
  httpscommunityfemagovpro1: {
    color: Color.colorRoyalblue,
  },
  wildfiresAreUnplannedAndUn: {
    fontSize: FontSize.size_3xl,
  },
  wildfiresWildfiresAreContainer: {
    textAlign: "left",
    left: 0,
  },
  wildfireIcon: {
    height: "5.47%",
    width: "18.15%",
    top: "3.22%",
    right: "36.72%",
    bottom: "91.32%",
    left: "45.13%",
    position: "absolute",
  },
  scrollText: {
    left: 9,
  },
  scrollTextWrapper: {
    height: 752,
    left: 0,
    top: 0,
    position: "absolute",
    width: 393,
  },
  iconBarChild: {
    backgroundColor: Color.colorSaddlebrown,
    width: 396,
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
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  informationSectionTopic: {
    backgroundColor: Color.colorAntiquewhite,
    height: 852,
    width: 393,
  },
});

export default InformationSectionTopic;
