import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Settings from '../assets/profile/settings.png'
var faker = require('faker');

const login = faker.internet.userName().substring(0,12).toLowerCase();
const name = (faker.name.firstName() + " " + faker.name.lastName()).substring(0,20);
const mail = login.substring(0,4).toLowerCase()+"@gmail.com";
let photoUri = faker.image.avatar();

export default ProfileScreen = () => {
    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.topBar}/>
            <View style = {styles.viewContainer}>
                <Image source={{uri: photoUri}} style = {styles.profilePhoto} />
                <View style = {styles.informationContainer}>
                    <Text style = {styles.normalText}>
                        Login: {"\t"+login+"\n"}
                        Name:{"\t"+name+"\n"}
                        E-mail:{"\t"+mail+"\n"}
                    </Text>
                    <View style = {{borderBottomColor: '30323b', borderBottomWidth: 4}}/>
                    <View style = {styles.stats}>
                        <View style = {styles.statContainer}>
                            <Text style = {styles.rotatedText}> Most Sessions </Text>
                            <View style = {styles.friendResults}>
                                <View style = {styles.friendResult}>
                                    <Image source={{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                    <Text style = {styles.normalText}> 32 </Text>
                                </View>
                                <View style = {styles.friendResult}>
                                    <Image source={{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                    <Text style = {styles.normalText}> 28 </Text>
                                </View>
                                <View style = {styles.friendResult}>
                                    <Image source={{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                    <Text style = {styles.normalText}> 27</Text>
                                </View>
                            </View>
                        </View>
                        <View style = {styles.statContainer}>
                            <Text style = {styles.rotatedText}> Best Sessions </Text>
                            <View style = {styles.friendResults}>
                                <View style = {styles.friendResult}>
                                    <Image source={{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                    <Text style = {styles.normalText}> 4.1/5 </Text>
                                </View>
                                <View style = {styles.friendResult}>
                                    <Image source={{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                    <Text style = {styles.normalText}> 3.8/5 </Text>
                                </View>
                                <View style = {styles.friendResult}>
                                    <Image source={{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                    <Text style = {styles.normalText}> 3.7/5 </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Image source={Settings} style = {styles.settingsPhoto}/>
            </View>
            <TouchableOpacity onPress={console.log("hello")}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  smallPhoto : {
      borderRadius: 30,
      width: 30,
      height: 30,
  },
  friendResult : {
      flex: 1,
      flexDirection: 'row',
      width: 150,
  },
  friendResults : {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      height: 110,
      width: 100
  },
  statContainer : {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  rotatedText : {
      transform: [{ rotate: '270deg'}],
      fontSize : 12,
      color: '#30323b',
      fontWeight: 'bold',
      height: 100,
      width: 100
  },
  stats : {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  settingsPhoto : {
      width: 35,
      height: 35
  },
  informationContainer: {
      flex: 1,
      flexDirection: 'column'
  },
  topBar: {
      height: 30
  },
  mainContainer: {
      flex: 1,
      backgroundColor: '#FEFEFE',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },
  profilePhoto: {
      width: 170,
      height: 190,
      margin : 5,
      borderRadius: 50
  },
  viewContainer: {
      flex: 1,
      flexDirection: 'row'
  },
  normalText: {
      color: '#30323b',
      fontWeight: 'bold',
      fontSize: 14,
      height: 80,
      width: 200,
  }
});
