import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import "react-native-gesture-handler";

import Widget from "./src/components/Widget";
import {theme} from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  SplashScreen.preventAutoHideAsync();

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
