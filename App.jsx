import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import StatsScreen from "./screens/StatsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { enableScreens } from "react-native-screens";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AddPlayScreen from "./screens/AddPlayScreen";
enableScreens();

const App = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Search: {
    screen: SearchScreen
  },
  Stats: {
    screen: StatsScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Play: {
    screen: AddPlayScreen
  }
});

export default createAppContainer(App);
