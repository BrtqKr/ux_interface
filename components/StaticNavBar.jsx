import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Navigator } from "react-navigation-tabs";
import { withNavigation } from "react-navigation";
import AddButton from "./AddButton";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const mapToRoute = tabName => {
  switch (tabName) {
    case "home":
      return "Home";
    case "search":
      return "Search";
    case "pie-chart":
      return "Stats";
    case "user":
      return "Profile";
  }
};
class StaticTabbarClass extends React.Component {
  values = [];

  constructor(props) {
    super(props);
    const { tabs } = this.props;
    this.values = tabs.map(
      (tab, index) => new Animated.Value(index === 2 ? 1 : 0)
    );
    this.props.value.setValue((width * 2) / 5);
  }

  onPress = (index: number) => {
    const { value, tabs } = this.props;
    const tabWidth = width / tabs.length;
    Animated.sequence([
      Animated.parallel(
        this.values.map(v =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
          })
        )
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true
        }),
        Animated.spring(this.values[2], {
          toValue: 1,
          useNativeDriver: true
        })
      ])
    ]).start();
  };

  render() {
    const { onPress } = this;
    const { tabs, value } = this.props;
    return (
      <View style={styles.container}>
        {tabs.map((tab, key) => {
          const tabWidth = width / tabs.length;
          const cursor = tabWidth * key;
          const opacity = value.interpolate({
            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
            outputRange: [1, 0, 1],
            extrapolate: "clamp"
          });
          const translateY = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0],
            extrapolate: "clamp"
          });
          const opacity1 = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp"
          });
          return (
            <React.Fragment {...{ key }}>
              <>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.navigation.navigate(mapToRoute(tab.name));
                  }}
                >
                  <Animated.View style={[styles.tab, { opacity }]}>
                    <Icon name={tab.name} color="white" size={25} />
                  </Animated.View>
                </TouchableWithoutFeedback>
                <Animated.View
                  style={{
                    position: "absolute",
                    top: -8,
                    left: tabWidth * key,
                    width: tabWidth,
                    height: 64,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: opacity1,
                    transform: [{ translateY }]
                  }}
                >
                  <View style={styles.activeIcon}>
                    <Icon name={tab.name} color="black" size={25} />
                  </View>
                  <View>
                    <AddButton />
                  </View>
                </Animated.View>
              </>
            </React.Fragment>
          );
        })}
      </View>
    );
  }
}

export default function StaticTabbar(props) {
  // const navigation = useNavigation();

  return <StaticTabbarClass {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 64
  },
  activeIcon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
