import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import OfflineQueue from "../components/OfflineQueue";
import { connect } from "react-redux";
import { Button, Colors, Text, View, Image } from "react-native-ui-lib";

const renderRow = (row) => {
  return (
    <View key={row.key}>
      <Text
        dark10
        text70
        style={{
          flex: 1,
          marginRight: 10,
        }}
        numberOfLines={1}
      >
        {row.description}
      </Text>

      <Text
        style={{
          flex: 1,
          marginRight: 10,
        }}
        text90
        dark40
        numberOfLines={1}
      >
        {row.time}
      </Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View flex padding-20>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/menta.png")}
          />
          <Button
            marginV-15
            label={"Go to page 1"}
            onPress={() => navigation.navigate("Example1")}
          />
          <Button
            label={"Go to page 2"}
            onPress={() => navigation.navigate("Example2")}
          />

          <View flex style={styles.card}>
            <Text h1 primary>
              Título 1
            </Text>
            <Text h2 secondary>
              Título 2
            </Text>
            <Text h3 purple>
              Título 3
            </Text>
            <Text h4 pink>
              Título 4
            </Text>
            <Text h5 green>
              Título 5
            </Text>

            <OfflineQueue />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default connect()(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 30,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark70,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 3,
    marginTop: -5,
  },
  firstSection: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  secondSection: {
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    marginTop: 25,
    // backgroundColor: "#0e4368",
    // opacity: 0.5,
  },
  offlineQueue: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
          height: -3,
          width: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: "#fbfbfb",
    paddingTop: 10,
  },
});
