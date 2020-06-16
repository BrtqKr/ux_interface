import React, {useState} from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import {ScrollView} from "react-native-web";
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { CheckBox } from 'react-native'
// import {Button} from "react-native-web";
// import DatePicker from 'react-native-datepicker'



export default AddPlayScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    Font.loadAsync({"Lato": require('../assets/fonts/Lato-Thin.ttf')});
    Font.loadAsync({"FontAwesome5Free-Solid": require('../assets/fonts/FontAwesome.otf')});

    const onPress = () => null;
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={{ height: 40,width: 400, borderColor: 'gray', backgroundColor: 'gray', borderWidth: 1 }}>
            </View>
            <Text>{"\n"} </Text>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <TextInput
                style={{marginLeft: 0, marginRight: "auto", height: 40,width: 300, color: 'grey', backgroundColor: 'orange', borderWidth: 1 }}
            />
            <Image style={{height: 50,width: 50, borderWidth: 1, marginRight: 10, marginLeft: "auto"}} source={require('../assets/Tajniacy.jpg')}/>
            </View>
            <Text style={{fontSize: 20}}>
                <Text style={{fontWeight: "bold"}}>Selected:</Text>
                <Text>Tajniacy</Text>
            </Text>
            <View style={{textAlign: 'center'}}>
            <Text style={{fontSize: 20, fontWeight:"bold", textAlign: 'center'}}>
                Opponents
            </Text>
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>

                <Text style={{fontSize: 20, fontWeight:"bold", textAlign: 'left'}}>
                    {"Player              "}
                </Text>

                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <CheckBox
                    title="XDD"
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                    <Text style={{fontSize: 20, fontWeight:"bold", textAlign: 'right'}}>
                        {"Score         "}
                    </Text>

                <CheckBox
                    title = "XDDDD"
                    value={isSelected2}
                    onValueChange={setSelection2}
                    style={styles.checkbox}
                />
                    <Text style={{fontSize: 20, fontWeight:"bold", textAlign: 'right'}}>
                        Place
                    </Text>
                </View>
            </View>
            {/*<Text>{"\n"}</Text>*/}

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Image style={{height: 45,width: 45, borderWidth: 1, marginRight: "auto", marginLeft: 10}} source={require('../assets/tracz.jpg')}/>

                <TextInput
                    style={{marginLeft: 60, marginRight: "auto", height: 45,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
                />
                <TextInput
                    style={{marginLeft: 20, marginRight: "auto", height: 45,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
                />
            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Image style={{height: 45,width: 45, borderWidth: 1, marginRight: "auto", marginLeft: 10}} source={require('../assets/miata.jpg')}/>

                <TextInput
                    style={{marginLeft: 60, marginRight: "auto", height: 45,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
                />
                <TextInput
                    style={{marginLeft: 20, marginRight: "auto", height: 45,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
                />
            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Image style={{height: 45,width: 45, borderWidth: 1, marginRight: "auto", marginLeft: 10}} source={require('../assets/kot.jpg')}/>

                <TextInput
                    style={{marginLeft: 60, marginRight: "auto", height: 45,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
                />
                <TextInput
                    style={{marginLeft: 20, marginRight: "auto", height: 45,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
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

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>

            </View>

            <View style={{align: "center"}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={{color: '#F5A315'}}>{"\n"}SUBMIT</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#30323B",
        width: 100,
        height: 45,
        marginRight: "auto",
        marginLeft: "auto",
    },

})

