import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Button, Text } from "react-native-ui-lib";

const OfflineQueue = ({ queue }) => {
  return queue.length > 0 ? (
    <View padding-12>
      {queue.slice(0, 5).map((item, index) => (
        <Text key={`${item}-${index}`}>{item}</Text>
      ))}
      {queue.length > 5 && (
        <Button
          link
          label="Ver más"
          onPress={() => console.log("Button pressed!")}
        />
      )}
    </View>
  ) : (
    <>
      <Text h3 green marginT-20>
        Acciones offline
      </Text>
      <Text>
        Si se despachan acciones mientras el dispositivo está offline, estas
        acciones se irán acumulando aquí y se despacharán cuando el dispositivo
        reuere la conexción a internet.
      </Text>
    </>
  );
};

const mapStateToProps = ({ network }) => ({
  queue: network.actionQueue.map((a) => ("type" in a ? a.type : "Thunk")),
});

export default connect(mapStateToProps)(OfflineQueue);

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    paddingBottom: 10,
  },
  button: {
    width: 50,
    alignSelf: "center",
  },
  queue: {
    backgroundColor: "#fbfbfb",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  queueItem: {
    padding: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "orange",
    marginHorizontal: 4,
  },
});
