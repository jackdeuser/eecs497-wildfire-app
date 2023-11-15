const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IntroPage0 from "./screens/IntroPage0";
import ProfilePage2 from "./screens/ProfilePage2";
import EmergencyContactsPage3 from "./screens/EmergencyContactsPage3";
import LiveMapMain from "./components/LiveMapMain";
import FeedMain from "./screens/FeedMain";
import InformationSectionMain from "./components/InformationSectionMain";
import InformationSectionTopic from "./components/InformationSectionTopic";

import RegistrationPage1 from "./screens/RegistrationPage1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="IntroPage0"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="IntroPage0"
              component={IntroPage0}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage2"
              component={ProfilePage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContactsPage3"
              component={EmergencyContactsPage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LiveMapMain"
              component={LiveMapMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeedMain"
              component={FeedMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistrationPage1"
              component={RegistrationPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformationSectionMain"
              component={InformationSectionMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformationSectionTopic"
              component={InformationSectionTopic}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
