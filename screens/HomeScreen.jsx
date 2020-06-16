import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import NavBar from "../components/NavBar";
export default HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <Text>{"\n"}</Text>
        <Text> Imprezowe | Rodzinne | Strategiczne | Przygodowe </Text>
        <Text>{"\n"}</Text>

        <TextInput
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            height: 40,
            width: 300,
            borderColor: "blue",
            borderWidth: 1
          }}
        />

        <Text>{"\n"}</Text>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Gracze, zagrywając swoje karty w odpowiedniej kolejności, tworzą łańcuchy pokarmowe. Muszą walczyć o przetrwanie"
            )
          }
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                height: 170,
                width: 340,
                borderColor: "white",
                backgroundColor: "orange",
                borderWidth: 3,
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  height: 160,
                  width: 150,
                  borderColor: "orange",
                  borderWidth: 1,
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{ height: 100, width: 140, borderWidth: 1 }}
                  source={require("./picture2.jpg")}
                />
                <Text> Bestseller! </Text>
              </View>

              <View style={{ height: 50, width: 140, marginTop: 15 }}>
                <Text>
                  {" "}
                  Gracze, zagrywając swoje karty w odpowiedniej kolejności,
                  tworzą łańcuchy pokarmowe. Muszą walczyć o przetrwanie...{" "}
                </Text>
                <Text style={{ color: "blue" }}> Zobacz więcej --> </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Gracze, zagrywając swoje karty w odpowiedniej kolejności, tworzą łańcuchy pokarmowe. Muszą walczyć o przetrwanie"
              )
            }
          >
            <View
              style={{
                height: 170,
                width: 170,
                borderColor: "white",
                backgroundColor: "orange",
                borderWidth: 3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                style={{ height: 100, width: 140, borderWidth: 1 }}
                source={require("./picture3.jpg")}
              />
              <Text> Wiem! </Text>
              <Text style={{ color: "blue" }}> zobacz więcej --> </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Gracze, zagrywając swoje karty w odpowiedniej kolejności, tworzą łańcuchy pokarmowe. Muszą walczyć o przetrwanie"
              )
            }
          >
            <View
              style={{
                alignSelf: "flex-start",
                height: 170,
                width: 170,
                borderColor: "white",
                backgroundColor: "orange",
                borderWidth: 3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                style={{ height: 100, width: 140, borderWidth: 1 }}
                source={require("./picture.jpg")}
              />
              <Text> Chińczyk! </Text>
              <Text style={{ color: "blue" }}> zobacz więcej --> </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Gracze, zagrywając swoje karty w odpowiedniej kolejności, tworzą łańcuchy pokarmowe. Muszą walczyć o przetrwanie"
              )
            }
          >
            <View
              style={{
                alignSelf: "flex-start",
                height: 170,
                width: 170,
                borderColor: "white",
                backgroundColor: "orange",
                borderWidth: 3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                style={{ height: 100, width: 140, borderWidth: 1 }}
                source={require("./picture3.jpg")}
              />
              <Text> Fajna gra </Text>
              <Text style={{ color: "blue" }}> zobacz więcej --> </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Gracze, zagrywając swoje karty w odpowiedniej kolejności, tworzą łańcuchy pokarmowe. Muszą walczyć o przetrwanie"
              )
            }
          >
            <View
              style={{
                alignSelf: "flex-start",
                height: 170,
                width: 170,
                borderColor: "white",
                backgroundColor: "orange",
                borderWidth: 3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                style={{ height: 100, width: 140, borderWidth: 1 }}
                source={require("./picture2.jpg")}
              />
              <Text> Niezła gra </Text>
              <Text style={{ color: "blue" }}> zobacz więcej --> </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navContainer}>
        <NavBar navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  navContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "flex-end",
    zIndex: 100,
    position: "absolute",
    bottom: 0
  }
});
