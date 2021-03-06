import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
import { FontAwesome5, Feather, FontAwesome } from "@expo/vector-icons";

export default class AddButton extends React.Component {
  mode = new Animated.Value(0);
  buttonSize = new Animated.Value(1);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 200
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0
      })
    ]).start();
  };

  render() {
    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -100]
    });

    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100]
    });

    const timeX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -24]
    });

    const timeY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -150]
    });

    const pulseX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, 50]
    });

    const pulseY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100]
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "45deg"]
    });

    const sizeStyle = {
      transform: [{ scale: this.buttonSize }]
    };

    const AnimatedTouchable = Animated.createAnimatedComponent(
      TouchableHighlight
    );

    return (
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          marginBottom: "50%"
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            left: thermometerX,
            top: thermometerY
          }}
        >
          <TouchableHighlight
            onPress={() => {
              alert("Add Rating Screen");
              this.handlePress();
            }}
            style={styles.secondaryButton}
          >
            <FontAwesome name="star-half-empty" size={24} color="#FFF" />
          </TouchableHighlight>
        </Animated.View>
        <Animated.View
          style={{ position: "absolute", left: timeX, top: timeY }}
        >
          <TouchableHighlight
            style={styles.secondaryButton}
            onPress={() => {
              this.props.navigation.navigate("Play");
              this.handlePress();
            }}
          >
            <FontAwesome5 name="calendar-check" size={24} color="#FFF" />
          </TouchableHighlight>
        </Animated.View>
        <Animated.View
          style={{ position: "absolute", left: pulseX, top: pulseY }}
        >
          <TouchableHighlight
            style={styles.secondaryButton}
            onPress={() => {
              alert("Add purchase screen");
              this.handlePress();
            }}
          >
            <FontAwesome5 name="dice" size={24} color="#FFF" />
          </TouchableHighlight>
        </Animated.View>
        <Animated.View style={[styles.button, sizeStyle]}>
          <AnimatedTouchable onPress={this.handlePress} underlayColor="#f8b93a">
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
              <FontAwesome5 name="plus" size={24} color="#343740" />
            </Animated.View>
          </AnimatedTouchable>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 55,
    borderRadius: 36,
    backgroundColor: "#7F58FF",
    position: "absolute",
    marginTop: -50,
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 0,
    backgroundColor: "#f8b93a"
  },
  secondaryButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    marginBottom: 0,
    borderRadius: 24,
    borderWidth: 0,
    backgroundColor: "#343740"
  }
});
