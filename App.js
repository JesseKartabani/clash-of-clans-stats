import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuProvider } from "react-native-popup-menu";
import HomeScreen from "./screens/HomeScreen";
import PlayerStats from "./screens/PlayerStats";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <MenuProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Clash of Clans Stats"
              component={HomeScreen}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: "#111111" },
              }}
            />
            <Stack.Screen
              name="Player Stats"
              component={PlayerStats}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: "#222" },
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
