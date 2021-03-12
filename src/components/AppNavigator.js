import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { verifyTokenAction } from "../redux/actions/authActions";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native-ui-lib";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { Animated, Easing } from "react-native";

const AppNavigator = ({ isAuthenticated, verifyTokenAction }) => {
  console.log("AppNavigator", isAuthenticated);
  const [splashAnimationDone, setSplashAnimationDone] = useState(false);
  useEffect(() => {
    const init = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.log(e);
      }

      await Font.loadAsync({
        ...Ionicons.font,
        "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
      });

      verifyToken();
    };

    init();
  }, []);

  const verifyToken = async () => {
    // Fetch the token from storage then navigate to our appropriate place
    let userToken;

    try {
      userToken = await AsyncStorage.getItem("token");
    } catch (e) {
      // Restoring token failed
      console.log("restoring token failed", e);
    }

    console.log("userToken", userToken);
    verifyTokenAction(userToken);
  };

  let rotateValueHolder = new Animated.Value(0);
  const spin = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  rotateValueHolder.setValue(0);
  const animation = Animated.timing(rotateValueHolder, {
    toValue: 4,
    duration: 2000,
    easing: Easing.elastic(4),
    useNativeDriver: true,
  });
  const startSplashAnimation = () => {
    animation.start(({ finished }) => {
      console.log("finished", finished);
      setSplashAnimationDone(true);
    });
  };

  if (isAuthenticated !== null) {
    SplashScreen.hideAsync()
      .then(() => startSplashAnimation())
      .catch((e) => console.log("SplashScreen.hideAsync()", e));
  }

  if (!splashAnimationDone) {
    return (
      <View flex center style={{ backgroundColor: "#E3EFF1" }}>
        <Animated.Image
          source={require("../../assets/images/logo.png")}
          // onLoad={}
          style={{
            width: 110,
            height: 100,
            transform: [{ rotate: spin }],
          }}
        />
      </View>
    );
  }

  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default connect(
  (state) => ({
    // token: state.token,
    isAuthenticated: state.auth.isAuthenticated,
  }),
  {
    verifyTokenAction,
  }
)(AppNavigator);
