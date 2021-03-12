import "dotenv/config";

export default {
  name: "Grupo Menta - React Native Boilerplate",
  version: "1.0.0",
  extra: {
    apiBaseURL: process.env.REACT_NATIVE_API_BASE_URL,
  },
  icon: "./assets/images/icon.png",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "cover",
    backgroundColor: "#0e4368",
  },
};
