import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Button } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/FontAwesome";
import ConnectionStatusBar from "./ConnectionStatusBar";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { connect } from "react-redux";
import { logoutAction } from "../redux/actions/authActions";
import { Text } from "react-native-ui-lib/core";
import Example1Screen from "../screens/Example1Screen";
import Example2Screen from "../screens/Example2Screen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = ({ username }) => {
  console.log("username", username);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={({ navigation }) => ({
          headerTitleStyle: {
            display: "none",
          },
          headerRight: () => (
            <Text style={{ marginRight: 10 }}>Hola {username}</Text>
          ),
          headerLeft: () => (
            <Icon
              onPress={() => navigation.openDrawer()}
              name="bars"
              style={{ padding: 15 }}
              size={25}
              color="#000"
            />
          ),
        })}
      >
        {(props) => (
          <View paddingT-20 main flex>
            <ConnectionStatusBar label="No estás conectado a internet." />
            <HomeScreen {...props} />
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Example1"
        component={Example1Screen}
        options={{ headerTitle: "Example 1" }}
      />
      <Stack.Screen
        name="Example2"
        component={Example2Screen}
        options={{ headerTitle: "Example 2" }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = ({ logoutAction, ...props }) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        bottom: 0,
      }}
    >
      <DrawerItemList {...props} />
      <Button
        label="Cerrar sesión"
        style={{ position: "absolute", bottom: 10, alignSelf: "center" }}
        onPress={logoutAction}
        link
      />
    </DrawerContentScrollView>
  );
};

const MainNavigator = ({ username, logoutAction }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent logoutAction={logoutAction} {...props} />
      )}
    >
      <Drawer.Screen name="Inicio">
        {() => <MainStackNavigator username={username} />}
      </Drawer.Screen>
      <Drawer.Screen name="Historial de transacciones">
        {() => <MainStackNavigator username={username} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default connect((state) => ({ username: state.auth.user.name }), {
  logoutAction,
})(MainNavigator);
