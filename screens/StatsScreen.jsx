import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import NavBar from "../components/NavBar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from "react-native-chart-kit";

export default StatsScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf")
  });
  const scrollRef = useRef();
  const scroll = height => {
    scrollRef.current &&
      scrollRef.current.scrollTo({
        y: height,
        animated: true
      });
  };

  let [activeLabel, setLabel] = useState("All");
  const sections = [
    {
      title: "Won/Lost ratio",
      height: Dimensions.get("window").height / 3 - 30
    },
    {
      title: "Session frequency",
      height: (Dimensions.get("window").height * 2) / 3
    },
    { title: "Game ratings", height: Dimensions.get("window").height * 1.3 },
    {
      title: "Played by genre",
      height: Dimensions.get("window").height * 2 - 30
    },
    {
      title: "Session time per period",
      height: Dimensions.get("window").height * 2.7
    }
  ];
  const getLine = label => {
    var data = timePeriodButtons[3].data;
    for (var i = 0; i < timePeriodButtons.length; i++) {
      if (label === timePeriodButtons[i].label)
        data = timePeriodButtons[i].data;
    }
    return {
      labels: [],
      datasets: [
        {
          data: data,
          strokeWidth: 2 // optional
        }
      ]
    };
  };

  const timePeriodButtons = [
    { label: "Week", data: [4, 3, 1, 5, 2, 1, 3] },
    { label: "Month", data: [10, 10, 10, 10, 10, 10] },
    { label: "Year", data: [0, 0, 0, 0, 0, 0, 1, 100] },
    { label: "All", data: [0, 0, 0, 40, 40, 55, 90] }
  ];
  return (
    fontsLoaded && (
      <>
        <SafeAreaProvider>
          <SafeAreaView>
            <ScrollView ref={scrollRef}>
              <View style={styles.sectionNavContainer}>
                {sections.map((section, index) => (
                  <>
                    <TouchableOpacity onPress={() => scroll(section.height)}>
                      <Text style={styles.sectionNavHeader}>
                        {section.title}
                      </Text>
                    </TouchableOpacity>

                    {index !== 4 && (
                      <View
                        style={{
                          height: 1.5,
                          backgroundColor: "white",
                          width: "90%"
                        }}
                      />
                    )}
                  </>
                ))}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  marginTop: 30
                }}
              >
                <Text style={styles.sectionHeader}>{sections[0].title}</Text>
                <Text style={styles.sectionDescription}>
                  You obliterated your friends 32 times {"\n"}
                  losing only in 12 sessions!
                </Text>
                <Text style={styles.sectionDescription}>
                  Recently you scored 2408 points in Scrabble {"\n"}
                  23% more than your avg. score
                </Text>
                <View>
                  <PieChart
                    data={[
                      {
                        name: "Won",
                        population: 32,
                        color: "#f8b532",
                        legendFontColor: "#30323b",
                        legendFontSize: 16
                      },
                      {
                        name: "Lost",
                        population: 12,
                        color: "#30323b",
                        legendFontColor: "#30323b",
                        legendFontSize: 16
                      }
                    ]}
                    width={Dimensions.get("window").width - 16}
                    height={220}
                    chartConfig={{
                      backgroundColor: "#1cc910",
                      backgroundGradientFrom: "#eff3ff",
                      backgroundGradientTo: "#efefef",
                      decimalPlaces: 2,
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 16
                      }
                    }}
                    style={{
                      marginVertical: 0,
                      borderRadius: 16
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="10"
                    absolute //for the absolute number remove if you want percentage
                  />
                </View>
                <View
                  style={{
                    height: 1.5,
                    backgroundColor: "#30323b",
                    width: "70%",
                    display: "flex",
                    alignSelf: "center",
                    marginBottom: 20
                  }}
                />
                <Text style={[styles.sectionHeader, { marginBottom: 0 }]}>
                  {sections[1].title}
                </Text>
                <Text style={[styles.sectionSubHeader, { marginBottom: 15 }]}>
                  Recent session 8days ago
                </Text>
                <BarChart
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                      {
                        data: [20, 45, 28, 80, 99, 43]
                      }
                    ]
                  }}
                  width={Dimensions.get("window").width - 50}
                  height={220}
                  yAxisLabel={""}
                  chartConfig={{
                    backgroundColor: "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 2,
                    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                  }}
                  style={{
                    marginVertical: 8,
                    borderRadius: 16
                  }}
                />
                <View
                  style={{
                    height: 1.5,
                    backgroundColor: "#30323b",
                    width: "70%",
                    display: "flex",
                    alignSelf: "center",
                    marginBottom: 20
                  }}
                />
                <Text style={[styles.sectionHeader, { marginBottom: 15 }]}>
                  {sections[2].title}
                </Text>
                <PieChart
                  data={[
                    {
                      name: "5/5  ",
                      population: 10,
                      color: "#f8b532",
                      legendFontColor: "#30323b",
                      legendFontSize: 12
                    },
                    {
                      name: "4/5  ",
                      population: 23,
                      color: "#ffdf55",
                      legendFontColor: "#30323b",
                      legendFontSize: 12
                    },
                    {
                      name: "3/5  ",
                      population: 21,
                      color: "#ffeaac",
                      legendFontColor: "#30323b",
                      legendFontSize: 12
                    },
                    {
                      name: "2/5  ",
                      population: 13,
                      color: "#6d3c16",
                      legendFontColor: "#30323b",
                      legendFontSize: 12
                    },
                    {
                      name: "1/5  ",
                      population: 8,
                      color: "#30323b",
                      legendFontColor: "#30323b",
                      legendFontSize: 12
                    }
                  ]}
                  width={Dimensions.get("window").width - 16}
                  height={220}
                  chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                  }}
                  style={{
                    marginVertical: 0,
                    borderRadius: 16
                  }}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="10"
                  absolute //for the absolute number remove if you want percentage
                />
                <View
                  style={{
                    width: "100%",
                    marginTop: 20,
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.rankingText}>
                    #1 {"\n"} Niedźwiedzie vs {"\n"} Bobasy
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    marginTop: 20,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    flexWrap: "wrap"
                  }}
                >
                  <Text
                    style={[
                      styles.rankingText,
                      {
                        textAlign: "flex-start",
                        marginLeft: 20,
                        marginRight: 0
                      }
                    ]}
                  >
                    #2 {"\n"} Scrabble
                  </Text>
                  <Text
                    style={[
                      styles.rankingText,
                      { textAlign: "flex-end", marginRight: 20, marginLeft: 0 }
                    ]}
                  >
                    #3 {"\n"} Dixit
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1.5,
                  backgroundColor: "#30323b",
                  width: "70%",
                  display: "flex",
                  alignSelf: "center",
                  marginTop: 40,
                  marginBottom: 20
                }}
              />
              <Text style={[styles.sectionHeader, { marginBottom: 0 }]}>
                {sections[3].title}
              </Text>
              <Text style={[styles.sectionSubHeader, { marginBottom: 15 }]}>
                Favourite genre: Fantasy
              </Text>
              <View>
                <PieChart
                  data={[
                    {
                      name: "Fantasy",
                      population: 90,
                      color: "#f8b532",
                      legendFontColor: "#30323b",
                      legendFontSize: 13
                    },
                    {
                      name: "Party",
                      population: 80,
                      color: "#ffdf55",
                      legendFontColor: "#30323b",
                      legendFontSize: 13
                    },
                    {
                      name: "Card",
                      population: 23,
                      color: "#ffeaac",
                      legendFontColor: "#30323b",
                      legendFontSize: 13
                    },
                    {
                      name: "Classic",
                      population: 13,
                      color: "#6d3c16",
                      legendFontColor: "#30323b",
                      legendFontSize: 13
                    },
                    {
                      name: "Strate",
                      population: 8,
                      color: "#30323b",
                      legendFontColor: "#30323b",
                      legendFontSize: 13
                    }
                  ]}
                  width={Dimensions.get("window").width - 50}
                  height={220}
                  chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                  }}
                  style={{
                    marginVertical: 0,
                    borderRadius: 16
                  }}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="15"
                  absolute //for the absolute number remove if you want percentage
                />

                <View
                  style={{
                    height: 1.5,
                    backgroundColor: "#30323b",
                    width: "70%",
                    display: "flex",
                    alignSelf: "center",
                    marginTop: 40,
                    marginBottom: 20
                  }}
                />

                <Text style={[styles.sectionHeader, { marginBottom: 20 }]}>
                  {sections[4].title}
                </Text>
                <View style={styles.timePeriodRow}>
                  {timePeriodButtons.map(({ label }) =>
                    label === activeLabel ? (
                      <TouchableOpacity
                        key={label}
                        style={styles.activeTimePeriodButton}
                        onPress={() => {
                          setLabel(label);
                        }}
                      >
                        <Text
                          style={[
                            styles.timePeriodLabel,
                            {
                              fontFamily: "AvenirNext-DemiBold",
                              color: "black"
                            }
                          ]}
                        >
                          {label}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        key={label}
                        style={styles.timePeriodButton}
                        onPress={() => {
                          setLabel(label);
                        }}
                      >
                        <Text style={styles.timePeriodLabel}>{label}</Text>
                      </TouchableOpacity>
                    )
                  )}
                </View>

                <View style={styles.chartContainer}>
                  <LineChart
                    data={getLine(activeLabel)}
                    width={Dimensions.get("window").width} // from react-native
                    height={250}
                    withShadow={false}
                    segments={6}
                    fromZero={true}
                    withVerticalLines={false}
                    chartConfig={{
                      backgroundColor: "white",
                      backgroundGradientFrom: "white",
                      backgroundGradientTo: "white",
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: () => `#00b4fe`,
                      labelColor: (opacity = 1) =>
                        `rgba(145, 151, 155, ${opacity})`,
                      propsForDots: { r: "5.5" },
                      style: {},
                      barPercentage: 0.1,
                      outerLinesColour: "#dfe2e6",
                      backgroundLinesColor: "#dfe2e6",
                      fontFamily: "AvenirNext-Medium",
                      letterSpacing: 0.06
                    }}
                    style={{
                      marginVertical: 8,
                      borderRadius: 16
                    }}
                  />
                </View>
              </View>
              <Text style={[styles.sectionSubHeader, { marginBottom: 15 }]}>
                Days with longest sessions
              </Text>
              <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <View
                    style={{
                      width: 34,
                      height: 34,
                      backgroundColor: "blue",
                      marginRight: 10,
                      alignSelf: "center"
                    }}
                  />
                  <View style={{ alignItems: "center", marginTop: 10 }}>
                    <View></View>
                    <Text style={{ fontFamily: "Lato", fontSize: 14 }}>
                      Magic the Gathering
                    </Text>
                    <View
                      style={{
                        marginTop: 5,
                        flexDirection: "row",
                        flexWrap: "wrap"
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Lato",
                          fontSize: "10",
                          marginRight: 10
                        }}
                      >
                        11Apr 2020
                      </Text>
                      <Text style={{ fontFamily: "LatoBold", fontSize: "11" }}>
                        4h 32min
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <View
                    style={{
                      width: 34,
                      height: 34,
                      backgroundColor: "red",
                      marginRight: 35,
                      alignSelf: "center"
                    }}
                  />
                  <View style={{ alignItems: "center", marginTop: 10 }}>
                    <View></View>
                    <Text style={{ fontFamily: "Lato", fontSize: 14 }}>
                      DiXit
                    </Text>
                    <View
                      style={{
                        marginTop: 5,
                        flexDirection: "row",
                        flexWrap: "wrap"
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Lato",
                          fontSize: "10",
                          marginRight: 10
                        }}
                      >
                        1Jul 2019
                      </Text>
                      <Text style={{ fontFamily: "LatoBold", fontSize: "11" }}>
                        2h 15min
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ height: 150 }} />
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
        <View style={styles.navContainer}>
          <NavBar navigation={navigation} />
        </View>
      </>
    )
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  navContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "flex-end",
    zIndex: 100,
    position: "absolute",
    bottom: 0
  },
  sectionNavContainer: {
    backgroundColor: "#30323b",
    marginTop: 50,
    marginRight: "15%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
    // overflow: "hidden"
  },
  sectionNavHeader: {
    fontFamily: "LatoBold",
    fontSize: 20,
    marginLeft: 30,
    marginVertical: 8,
    color: "white"
  },
  sectionHeader: {
    fontSize: 23,
    fontWeight: "500",
    fontFamily: "LatoBold",
    color: "#30323b",
    marginBottom: 15,
    marginLeft: 40
  },
  sectionDescription: {
    fontSize: 15,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#30323b",
    marginBottom: 7,
    marginLeft: 40
  },
  sectionSubHeader: {
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "LatoBold",
    color: "#30323b",
    marginBottom: 15,
    marginLeft: 70
  },
  rankingText: {
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Lato",
    color: "#30323b",
    textAlign: "center"
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 24,
    marginLeft: 24,
    height: 47,
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 24,
    marginTop: 19,
    marginLeft: 24,
    height: 16,
    marginBottom: 26
  },
  iconPlatform: {
    flexDirection: "row",
    alignItems: "center"
  },
  contentContainer: {
    flex: 1
  },
  views: {
    fontSize: 14,
    color: "black"
  },
  spacer: {
    height: 1,
    marginLeft: 24,
    backgroundColor: "white"
  },
  timePeriodButton: {
    marginHorizontal: 6,
    width: 50,
    height: 38,
    justifyContent: "center",
    alignItems: "center"
  },
  activeTimePeriodButton: {
    marginHorizontal: 6,
    width: 50,
    height: 38,
    backgroundColor: "rgb(240, 241, 241)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  timePeriodRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 9,
    height: 16,
    marginBottom: 24
  },
  timePeriodLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "AvenirNext-Medium",
    color: "rgb(74, 80, 86)"
  },
  chartContainer: {
    marginRight: 30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
