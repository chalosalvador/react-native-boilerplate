import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/authActions";
import { Button, Text, TextField, View, Image } from "react-native-ui-lib";
import { ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAvoidingView } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Ingresa tu correo")
    .email("Ingresa un correo válido"),
  password: yup.string().required("Ingresa tu clave"),
});

const LoginScreen = ({ loginAction, navigation }) => {
  const { errors, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  let emailRef = React.useRef();
  let passwordRef = React.useRef();

  const onLogin = (data) => {
    loginAction(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View center marginB-50>
          <Text center black h4 style={{ marginTop: 90, marginBottom: 30 }}>
            React Native Boilerplate
          </Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>

        <View padding-10>
          <Text center black text60 style={{ paddingBottom: 30 }}>
            Iniciar sesión
          </Text>

          <Controller
            control={control}
            name="email"
            rules={{ required: "Ingresa tu correo" }}
            defaultValue=""
            onFocus={() => {
              emailRef.current.focus();
            }}
            render={(props) => (
              <TextField
                placeholder="Correo electrónico"
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"emailAddress"}
                autoCompleteType={"email"}
                onChangeText={(value) => props.onChange(value)}
                keyboardType={"email-address"}
                returnKeyType={"next"}
                onSubmitEditing={() => passwordRef.current.focus()}
                ref={emailRef}
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            defaultValue=""
            onFocus={() => {
              passwordRef.current.focus();
            }}
            render={(props) => (
              <TextField
                placeholder="Clave"
                autoCapitalize={"none"}
                autoCorrect={false}
                textContentType={"password"}
                secureTextEntry={true}
                ref={passwordRef}
                returnKeyType="go"
                onChangeText={(value) => props.onChange(value)}
                error={errors.password?.message}
              />
            )}
          />

          <Button
            labelStyle={{
              fontWeight: "500",
              color: "white",
            }}
            label="Iniciar sesión"
            onPress={handleSubmit(onLogin)}
          />

          <View right>
            <Button
              link
              light
              marginT-15
              onPress={() => navigation.navigate("ResetPassword")}
              label="Restablecer clave"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default connect(null, {
  loginAction,
})(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: { height: 100, width: 100 },
});
