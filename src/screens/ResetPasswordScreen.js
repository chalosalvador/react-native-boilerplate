import React, { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Button, Text } from "react-native-ui-lib/core";

const ResetPasswordScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Te hemos enviado un correo electrónico. Sigue las instrucciones
                para restablecer tu clave y luego vuelve a iniciar sesión en la
                aplicación
              </Text>
              <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/*<Image*/}
        {/*  style={styles.logo}*/}
        {/*  source={require("../../assets/images/menta.png")}*/}
        {/*/>*/}
        <Text style={styles.text}>Recuperar Clave</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          textContentType={"emailAddress"}
          style={styles.input}
        />
        <Button
          labelStyle={{
            fontWeight: "500",
            color: "white",
          }}
          label="Recuperar"
          style={styles.button}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e4368",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
    marginBottom: 50,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "white",
    width: 250,
    height: 25,
    borderRadius: 12,
  },
  label: {
    color: "white",
    fontSize: 13,
    alignSelf: "center",
    marginRight: 210,
  },
  button: {
    backgroundColor: "#fcbf14",
    marginTop: 50,
  },
  link: {
    textDecorationLine: "underline",
    color: "white",
    fontSize: 12,
    marginTop: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#f194ff",
  },
  buttonClose: {
    backgroundColor: "#31A3DB",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
