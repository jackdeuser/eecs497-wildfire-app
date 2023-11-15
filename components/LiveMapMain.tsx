import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";

const LiveMapMain = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.liveMapMain}>
      <View style={[styles.iconBar, styles.iconPosition]}>
        <View style={styles.iconBarChild} />
        <Image
          style={[styles.iconBarItem, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("InformationSectionMain")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.group}
          onPress={() => navigation.navigate("ProfilePage2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector1, styles.vector1Position]}
          onPress={() => navigation.navigate("FeedMain")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.vector1Position]}
          onPress={() => navigation.navigate("EmergencyContactsPage3")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-2.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.mingcutefireLineIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/mingcutefireline.png")}
      />
      <Image
        style={[styles.liveMapMainChild, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Image
        style={styles.liveMapMainItem}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Image
        style={[styles.liveMapMainInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 38,
    position: "absolute",
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
  iconBarChild: {
    backgroundColor: Color.colorSaddlebrown,
    width: 396,
    height: 100,
    zIndex: 0,
  },
  iconBarItem: {
    top: 22,
    left: 180,
    width: 36,
    zIndex: 1,
  },
  icon: {
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
  wrapper: {
    left: "7.83%",
    right: "83.33%",
    width: "8.84%",
    zIndex: 5,
  },
  iconBar: {
    top: 752,
  },
  image1Icon: {
    top: 0,
    height: 752,
    width: 393,
  },
  mingcutefireLineIcon: {
    top: 653,
    left: 13,
    width: 40,
    overflow: "hidden",
  },
  liveMapMainChild: {
    top: 546,
    width: 61,
    height: 206,
  },
  liveMapMainItem: {
    top: 699,
    left: 340,
    borderRadius: Border.br_3xs,
    width: 53,
    height: 53,
    position: "absolute",
  },
  liveMapMainInner: {
    height: "4.21%",
    width: "7.18%",
    top: "83.04%",
    right: "3.26%",
    bottom: "12.75%",
    left: "89.57%",
    position: "absolute",
  },
  liveMapMain: {
    backgroundColor: Color.colorWhite,
    height: 852,
    overflow: "hidden",
    width: 393,
  },
});

export default LiveMapMain;
