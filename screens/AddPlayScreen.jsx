import React, { useState } from "react";
// import { View, StyleSheet, Text } from 'react-native'
// import {ScrollView} from "react-native-web";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { CheckBox } from "react-native";

// import {Button} from "react-native-web";
// import DatePicker from 'react-native-datepicker'
import { useFonts } from "@use-expo/font";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { FontAwesome5 } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";
import NavBar from "../components/NavBar";

export default AddPlayScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

  let [date1, setDate1] = useState("2020-06-16");

  let [iconsTab, setIconsTab] = useState([false, false, false, false, false]);

  const changeState = index => {
    let fillArray = [];

    if (index === -1) for (let i = 0; i < 5; i++) fillArray.push(false);
    else {
      for (let i = 0; i < 5; i++) {
        i <= index ? fillArray.push(true) : fillArray.push(false);
      }
    }
    console.warn(fillArray);
    setIconsTab(fillArray);
  };
  const countRating = () => {
    let result = 0;
    for (let i = 0; i < 5; i++) {
      iconsTab[i] === true && result++;
    }
    return result;
  };
  const checkedColor = "#F5A315";
  const uncheckedColor = " #30323B";

  let [fontsLoaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf")
  });

  const onPress = () => null;
  const onPressAngry = () => changeState(0);
  const onPressFrown = () => changeState(1);
  const onPressMeh = () => changeState(2);
  const onPressSmiley = () => changeState(3);
  const onPressHappy = () => changeState(4);

  // const onPressAngry = () => setAngry(true);

  let smileColor = "";
  if (fontsLoaded) {
    return (
      <>
        <ScrollView style={styles.mainContainer}>
          <View
            style={{
              height: 40,
              width: 400,
              backgroundColor: "rgba(0,0,0,0)"
            }}
          ></View>
          <Text>{"\n"} </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TextInput
              style={{
                marginLeft: 0,
                marginRight: "auto",
                height: 40,
                width: 300,
                color: "grey",
                backgroundColor: "orange",
                borderWidth: 1,
                paddingHorizontal: 15,
                fontSize: 20,
                fontFamily: "Lato"
              }}
            />
            <Image
              style={{
                height: 50,
                width: 50,
                borderWidth: 1,
                marginRight: 10,
                marginLeft: "auto"
              }}
              source={require("../assets/Tajniacy.jpg")}
            />
          </View>
          <Text style={{ fontSize: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Selected:</Text>
            <Text>Tajniacy</Text>
          </Text>
          <View style={{ textAlign: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              Opponents
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "left" }}
            >
              {"Player              "}
            </Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <CheckBox
                title="XDD"
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text
                style={{ fontSize: 20, fontWeight: "bold", textAlign: "right" }}
              >
                {"Score         "}
              </Text>

              <CheckBox
                title="XDDDD"
                value={isSelected2}
                onValueChange={setSelection2}
                style={styles.checkbox}
              />
              <Text
                style={{ fontSize: 20, fontWeight: "bold", textAlign: "right" }}
              >
                Place
              </Text>
            </View>
          </View>
          {/*<Text>{"\n"}</Text>*/}

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Image
              style={{
                height: 45,
                width: 45,
                borderWidth: 1,
                marginRight: "auto",
                marginLeft: 10
              }}
              source={require("../assets/tracz.jpg")}
            />
            <View style={{ width: 100, borderWidth: 2, borderColor: "red" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Steve
              </Text>
            </View>
            <TextInput
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: 45,
                width: 100,
                color: "grey",
                backgroundColor: "white",
                borderWidth: 1,
                paddingHorizontal: 15
              }}
            />
            <TextInput
              style={{
                marginLeft: 20,
                marginRight: "auto",
                height: 45,
                width: 100,
                color: "grey",
                backgroundColor: "white",
                borderWidth: 1,
                paddingHorizontal: 15
              }}
            />
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Image
              style={{
                height: 45,
                width: 45,
                borderWidth: 1,
                marginRight: "auto",
                marginLeft: 10
              }}
              source={require("../assets/miata.jpg")}
            />
            <View style={{ width: 100, borderWidth: 2, borderColor: "red" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Anna
              </Text>
            </View>

            <TextInput
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: 45,
                width: 100,
                color: "grey",
                backgroundColor: "white",
                borderWidth: 1,
                paddingHorizontal: 15
              }}
            />
            <TextInput
              style={{
                marginLeft: 20,
                marginRight: "auto",
                height: 45,
                width: 100,
                color: "grey",
                backgroundColor: "white",
                borderWidth: 1,
                paddingHorizontal: 15
              }}
            />
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Image
              style={{
                height: 45,
                width: 45,
                borderWidth: 1,
                marginRight: "auto",
                marginLeft: 10
              }}
              source={require("../assets/kot.jpg")}
            />
            <View style={{ width: 100, borderWidth: 2, borderColor: "red" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Naomi
              </Text>
            </View>

            <TextInput
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: 45,
                width: 100,
                color: "grey",
                backgroundColor: "white",
                borderWidth: 1,
                paddingHorizontal: 15
              }}
            />
            <TextInput
              style={{
                marginLeft: 20,
                marginRight: "auto",
                height: 45,
                width: 100,
                color: "grey",
                backgroundColor: "white",
                borderWidth: 1,
                paddingHorizontal: 15
              }}
            />
          </View>
          {/*<DatePicker*/}
          {/*style={{width: 200}}*/}
          {/*mode="date"*/}
          {/*placeholder="select date"*/}
          {/*format="DD-MM-YYYY"*/}

          {/*/>*/}

          <Text>{"\n"} </Text>
          <Text>{"\n"} </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}></View>

          {/*DATE PICKER*/}
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: 10 }}
          >
            <DatePicker
              // placeholder="select date"
              // format="DD-MM-YYYY-HH-MM"
              mode="datetime"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              date={date1}
              onDateChange={date1 => setDate1(date1)}
            />
          </View>

          {/*Buzie kolorowe*/}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginLeft: "25%",
              marginTop: "10%",
              height: "9%"
            }}
          >
            <TouchableOpacity onPress={() => changeState(0)}>
              <FontAwesome5
                name="angry"
                size={30}
                style={{
                  display: iconsTab[0] ? "block" : "none",
                  color: checkedColor
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => changeState(0)}>
              <FontAwesome5
                name="angry"
                size={30}
                style={{
                  display: !iconsTab[0] ? "block" : "none",
                  color: uncheckedColor
                }}
              />
            </TouchableOpacity>

            <Text> </Text>

            <TouchableOpacity onPress={() => changeState(1)}>
              <FontAwesome5
                name="frown"
                size={30}
                style={{
                  display: iconsTab[1] ? "block" : "none",
                  color: checkedColor
                }}
              />
            </TouchableOpacity>
            <Text> </Text>

            <TouchableOpacity onPress={() => changeState(1)}>
              <FontAwesome5
                name="frown"
                size={30}
                style={{
                  display: !iconsTab[1] ? "block" : "none",
                  color: uncheckedColor
                }}
              />
            </TouchableOpacity>

            <Text> </Text>

            <TouchableOpacity onPress={() => changeState(2)}>
              <FontAwesome5
                name="meh"
                size={30}
                style={{
                  display: iconsTab[2] ? "block" : "none",
                  color: checkedColor
                }}
              />
            </TouchableOpacity>

            <Text> </Text>

            <TouchableOpacity onPress={() => changeState(2)}>
              <FontAwesome5
                name="meh"
                size={30}
                style={{
                  display: !iconsTab[2] ? "block" : "none",
                  color: uncheckedColor
                }}
              />
            </TouchableOpacity>

            <Text> </Text>
            <TouchableOpacity onPress={() => changeState(3)}>
              <FontAwesome5
                name="smile"
                size={30}
                style={{
                  display: iconsTab[3] ? "block" : "none",
                  color: checkedColor
                }}
              />
            </TouchableOpacity>

            <Text> </Text>
            <TouchableOpacity onPress={() => changeState(3)}>
              <FontAwesome5
                name="smile"
                size={30}
                style={{
                  display: !iconsTab[3] ? "block" : "none",
                  color: uncheckedColor
                }}
              />
            </TouchableOpacity>

            <Text> </Text>
            <TouchableOpacity onPress={() => changeState(4)}>
              <FontAwesome5
                name="grin"
                size={30}
                style={{
                  display: iconsTab[4] ? "block" : "none",
                  color: checkedColor
                }}
              />
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity onPress={() => changeState(4)}>
              <FontAwesome5
                name="grin"
                size={30}
                style={{
                  display: !iconsTab[4] ? "block" : "none",
                  color: uncheckedColor
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ align: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert(`Rated session for ${countRating()}`);
                changeState(-1);
              }}
            >
              <Text style={{ color: "#F5A315" }}>{"\n"}SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.navContainer}>
          <NavBar navigation={navigation} />
        </View>
      </>
    );
  } else return <AppLoading />;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 15
  },
  checkbox: {
    alignSelf: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#30323B",
    width: 100,
    height: 45,
    marginRight: "auto",
    marginLeft: "auto"
  },
  navContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "flex-end",
    zIndex: 100,
    position: "absolute",
    bottom: 0
  }
});
