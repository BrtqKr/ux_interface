import React, {useState} from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import {ScrollView} from "react-native-web";
import { ScrollView, View, StyleSheet, Text, TextInput, Image} from 'react-native'
import { CheckBox } from 'react-native'


export default AddPlayScreen = () => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);

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
            <Text>{"\n"}</Text>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Image style={{height: 50,width: 50, borderWidth: 1, marginRight: "auto", marginLeft: 10}} source={require('../assets/tracz.jpg')}/>

                <TextInput
                    style={{marginLeft: 60, marginRight: "auto", height: 50,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
                />
                <TextInput
                    style={{marginLeft: 20, marginRight: "auto", height: 50,width: 100, color: 'grey', backgroundColor: 'white', borderWidth: 1 }}
                />

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

})

