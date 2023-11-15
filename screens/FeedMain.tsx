import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FeedMain = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.feedMain}>
      <View style={styles.postsWrapper}>
        <View style={styles.posts}>
          <View style={[styles.post4Container, styles.containerLayout]}>
            <View style={[styles.post1, styles.post1Border]} />
            <Text style={styles.text}>8</Text>
            <Image
              style={[styles.downvoteIcon, styles.downvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/downvote.png")}
            />
            <Text style={[styles.iJustWanted, styles.iJustWantedLayout]}>
              I just wanted to announce that my family and I have created
              several emergency packages with essential supplies for anyone in
              need in our community. If you are having trouble getting access to
              supplies for the wildfire season or if you know of anyone who is,
              please don't hesitate to contact me. Remember, we are stronger
              together!
            </Text>
            <Text style={[styles.mAgoInContainer, styles.commentPosition]}>
              <Text style={styles.mAgoTypo}>{`9m ago `}</Text>
              <Text style={styles.in}>{`in `}</Text>
              <Text style={styles.mAgoTypo}>Thousand Oaks, CA</Text>
            </Text>
            <Text style={[styles.sarahSmith, styles.commentPosition]}>
              Sarah Smith
            </Text>
            <Image
              style={[styles.upvoteIcon, styles.upvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/upvote.png")}
            />
            <Text style={[styles.comment, styles.commentPosition]}>
              Comment...
            </Text>
            <View style={[styles.replyBox, styles.post1Border]} />
            <Image
              style={styles.statusIcon}
              contentFit="cover"
              source={require("../assets/status.png")}
            />
            <Text style={[styles.comment1, styles.comment1Clr]}>
              Comment...
            </Text>
          </View>
          <View style={[styles.post3Container, styles.containerLayout]}>
            <View style={[styles.post1, styles.post1Border]} />
            <Text style={styles.text}>4</Text>
            <Image
              style={[styles.downvoteIcon1, styles.downvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/downvote.png")}
            />
            <Text style={[styles.iJustWanted, styles.iJustWantedLayout]}>
              Hey, I was wondering if anyone has the latest update on the
              wildfire progression in our locality? I'd like us to share
              up-to-date and verified information to keep our community informed
              and safe. Please, no rumors or misleading information. Thanks in
              advance!
            </Text>
            <Text style={[styles.mAgoInContainer, styles.commentPosition]}>
              <Text style={styles.mAgoTypo}>{`7m ago `}</Text>
              <Text style={styles.in}>{`in `}</Text>
              <Text style={styles.mAgoTypo}>Riverside, CA</Text>
            </Text>
            <Text style={[styles.sarahSmith, styles.commentPosition]}>{`Jane Doe
`}</Text>
            <Image
              style={[styles.upvoteIcon1, styles.upvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/upvote.png")}
            />
            <Text style={[styles.comment, styles.commentPosition]}>
              Comment...
            </Text>
            <View style={[styles.replyBox, styles.post1Border]} />
            <Image
              style={styles.statusIcon}
              contentFit="cover"
              source={require("../assets/status.png")}
            />
            <Text style={[styles.comment1, styles.comment1Clr]}>
              Comment...
            </Text>
          </View>
          <View style={[styles.post2Container, styles.containerLayout]}>
            <View style={[styles.post1, styles.post1Border]} />
            <Text style={styles.text}>6</Text>
            <Image
              style={[styles.downvoteIcon, styles.downvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/downvote.png")}
            />
            <Text style={[styles.iJustWanted, styles.iJustWantedLayout]}>
              As we approach the wildfire season, I thought it would be a good
              idea to share some ready evacuation routes for our neighborhoods.
              It's best to plan ahead, so we won't be caught off guard in case
              of any emergencies. Can anyone share the routes they've prepared
              or any additional tips? Let's help each other stay prepared.
            </Text>
            <Text style={[styles.mAgoInContainer, styles.commentPosition]}>
              <Text style={styles.mAgoTypo}>{`2m ago `}</Text>
              <Text style={styles.in}>{`in `}</Text>
              <Text style={styles.mAgoTypo}>Los Angeles, CA</Text>
            </Text>
            <Text style={[styles.sarahSmith, styles.commentPosition]}>
              John Doe
            </Text>
            <Image
              style={[styles.upvoteIcon, styles.upvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/upvote.png")}
            />
            <Text style={[styles.comment, styles.commentPosition]}>
              Comment...
            </Text>
            <View style={[styles.replyBox, styles.post1Border]} />
            <Image
              style={styles.statusIcon}
              contentFit="cover"
              source={require("../assets/status.png")}
            />
            <Text style={[styles.comment1, styles.comment1Clr]}>
              Comment...
            </Text>
          </View>
          <View style={[styles.post1Container, styles.post1Position]}>
            <View style={[styles.post1, styles.post1Border]} />
            <Text style={styles.text}>3</Text>
            <Image
              style={[styles.downvoteIcon, styles.downvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/downvote.png")}
            />
            <Text style={[styles.iJustWanted, styles.iJustWantedLayout]}>
              I was wondering if anyone can share any resources about emergency
              supplies that are essential to have on hand during wildfire
              season? I'd also appreciate receiving tips about what to do if
              we're asked to evacuate due to an approaching wildfire. Let's keep
              ourselves prepared and safe.
            </Text>
            <Text style={[styles.mAgoInContainer, styles.commentPosition]}>
              <Text style={styles.mAgoTypo}>{`Now `}</Text>
              <Text style={styles.in}>in</Text>
              <Text style={styles.mAgoTypo}> Main St, Los Angeles, CA</Text>
            </Text>
            <Text style={[styles.sarahSmith, styles.commentPosition]}>
              Ezra Jones (you)
            </Text>
            <Image
              style={[styles.upvoteIcon, styles.upvoteIconLayout]}
              contentFit="cover"
              source={require("../assets/upvote.png")}
            />
            <Text style={[styles.comment, styles.commentPosition]}>
              Comment...
            </Text>
            <View style={[styles.replyBox, styles.post1Border]} />
            <Image
              style={styles.statusIcon}
              contentFit="cover"
              source={require("../assets/status.png")}
            />
            <Text style={[styles.comment1, styles.comment1Clr]}>
              Comment...
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.iconBar}>
        <View style={styles.iconBarChild} />
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
            source={require("../assets/group.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.containerPosition]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Pressable
          style={[styles.container, styles.containerPosition]}
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
  containerLayout: {
    height: 359,
    width: 400,
    position: "absolute",
  },
  post1Border: {
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  downvoteIconLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  iJustWantedLayout: {
    width: 356,
    marginLeft: -186,
  },
  commentPosition: {
    height: 30,
    color: Color.colorBlack,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  upvoteIconLayout: {
    width: 37,
    height: 39,
    position: "absolute",
  },
  comment1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  post1Position: {
    top: 0,
    left: 0,
    height: 359,
    width: 400,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  containerPosition: {
    bottom: "41%",
    top: "27%",
    height: "32%",
    position: "absolute",
  },
  post1: {
    backgroundColor: Color.colorAntiquewhite,
    left: 0,
    top: 0,
    height: 359,
    width: 400,
  },
  text: {
    marginLeft: 166,
    color: Color.colorDarkslateblue,
    width: 21,
    height: 29,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    left: "50%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    top: 3,
    position: "absolute",
  },
  downvoteIcon: {
    top: 298,
    left: 74,
  },
  iJustWanted: {
    marginTop: -110.5,
    fontSize: FontSize.size_base,
    height: 194,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
    top: "50%",
    width: 356,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    left: "50%",
  },
  mAgoTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
  },
  in: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
  },
  mAgoInContainer: {
    marginTop: -147.5,
    fontSize: FontSize.size_lg,
    height: 30,
    width: 356,
    marginLeft: -186,
  },
  sarahSmith: {
    marginTop: -177.5,
    width: 213,
    height: 30,
    marginLeft: -186,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
  },
  upvoteIcon: {
    top: 295,
    left: 22,
  },
  comment: {
    marginTop: 124.5,
    marginLeft: -59,
    width: 253,
    fontSize: FontSize.size_lg,
    height: 30,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontStyle: "italic",
  },
  replyBox: {
    top: 290,
    left: 128,
    backgroundColor: Color.colorWhite,
    width: 266,
    height: 49,
  },
  statusIcon: {
    left: 339,
    width: 25,
    height: 25,
    top: 3,
    position: "absolute",
  },
  comment1: {
    top: 302,
    left: 132,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 258,
    height: 26,
  },
  post4Container: {
    top: 1143,
    left: 1,
  },
  downvoteIcon1: {
    top: 980,
    left: 70,
  },
  upvoteIcon1: {
    top: 977,
    left: 18,
  },
  post3Container: {
    top: 762,
    left: 3,
    height: 359,
    width: 400,
  },
  post2Container: {
    top: 381,
    left: 0,
  },
  post1Container: {
    left: 0,
    position: "absolute",
  },
  posts: {
    top: -80,
    left: -7,
    width: 403,
    height: 1502,
    position: "absolute",
  },
  postsWrapper: {
    top: 130,
    width: 395,
    height: 631,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 3,
    position: "absolute",
  },
  iconBarChild: {
    backgroundColor: Color.colorSaddlebrown,
    width: 396,
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
  vectorIcon: {
    width: "8.08%",
    right: "26.77%",
    left: "65.15%",
    zIndex: 4,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  feedMain: {
    backgroundColor: Color.colorCoral,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default FeedMain;
