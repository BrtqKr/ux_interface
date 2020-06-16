import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from './screens/HomeScreen'
import {ProfileScreen} from './screens/ProfileScreen'
import SearchScreen from './screens/SearchScreen'
import StatsScreen from './screens/StatsScreen'
import AddPlayScreen from './screens/AddPlayScreen'


import AddButton from "./components/AddButton";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome5 name="home" size={24} color={tintColor} />
      }
    },
    Search: {
        // screen: SearchScreen,
        screen: AddPlayScreen,
        navigationOptions:{
        tabBarIcon: ({ tintColor }) => <FontAwesome5 name="search" size={24} color={tintColor} />
      }
    },
    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />
      }
    },
    Stats: {
      screen: StatsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome5 name="chart-pie" size={24} color={tintColor} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome5 name="user" size={24} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);