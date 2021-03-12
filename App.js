import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import createStore from "./src/redux/createStore";
import { Provider } from "react-redux";
import AppNavigator from "./src/components/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native-ui-lib";
import { PersistGate } from "redux-persist/integration/react";
import "./src/styles/theme";

const { store, persistor } = createStore({ queueReleaseThrottle: 250 });

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <Text>Verificando acciones pendientes de sincronización...</Text>
        }
        persistor={persistor}
      >
        <NavigationContainer>
          <StatusBar style="auto" />
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
