import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { connect } from "react-redux";

const ConnectionStatusBar = ({ isConnected }) => {
  return (
    !isConnected && (
      <View style={styles.container} padding-5>
        <Text center white>
          No estás conectado a internet.
        </Text>
      </View>
    )
  );
};

export default connect((state) => ({ isConnected: state.network.isConnected }))(
  ConnectionStatusBar
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    position: "absolute",
    width: "100%",
    // top: 0
  },
});
