// import React from "react";
// import { View } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { FontAwesome5 } from "@expo/vector-icons";

// import HomeScreen from './screens/HomeScreen'
// import {ProfileScreen} from './screens/ProfileScreen'
// import SearchScreen from './screens/SearchScreen'
// import StatsScreen from './screens/StatsScreen'

// import AddButton from "./components/AddButton";
// import NavBar from "./components/NavBar";

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <FontAwesome5 name="home" size={24} color={tintColor} />
//       }
//     },
//     Search: {
//       screen: SearchScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <FontAwesome5 name="search" size={24} color={tintColor} />
//       }
//     },
//     Add: {
//       screen: () => null,
//       navigationOptions: {
//         tabBarIcon: <AddButton />
//       }
//     },
//     Stats: {
//       screen: StatsScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <FontAwesome5 name="chart-pie" size={24} color={tintColor} />
//       }
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <FontAwesome5 name="user" size={24} color={tintColor} />
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       showLabel: false,
//       activeTintColor: "black",
//       inactiveTintColor: "gray"
//     }
//   }
// );

// export default createAppContainer(TabNavigator);

import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import StatsScreen from "./screens/StatsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NavBar from "./components/NavBar";
import StaticTabbar from "./components/StaticNavBar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";

enableScreens();

function TabStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarVisible: false }}
      />

      <Tab.Screen
        name="NavBar"
        component={NavBar}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen
        name="StaticNav"
        component={StaticTabbar}
        options={{ tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
}
function RootStack() {
  const Root = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator headerShown={false}>
    //     <Stack.Screen></Stack.Screen>
    //   </Stack.Navigator>

    // <View style={styles.container}>
    //   <NavBar />
    // </View>
    // </NavigationContainer>
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name="First"
          component={TabStack}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
      <View style={styles.container}>
        <NavBar />
      </View>
    </NavigationContainer>
  );
}

const App = props => {
  return (
    <>
      <RootStack />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "flex-end",
    zIndex: 100,
    position: "absolute",
    bottom: 0
  }
});

export default App;
