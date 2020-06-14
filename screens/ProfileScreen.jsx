import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Settings from '../assets/profile/settings.png'
import Carcassone from '../assets/profile/carcassone.jpg'
import Uno from '../assets/profile/uno.png'
import Azul from '../assets/profile/azul.jpg'
import GoldCup from '../assets/profile/gold_cup.png'
import SilverCup from '../assets/profile/silver_cup.png'
import BronzeCup from '../assets/profile/bronze_cup.png'
import Star from '../assets/profile/star.png'

var faker = require('faker');

const login = faker.internet.userName().substring(0,12).toLowerCase();
const name = (faker.name.firstName() + " " + faker.name.lastName()).substring(0,20);
const mail = login.substring(0,4).toLowerCase()+"@gmail.com";
let photoUri = faker.image.avatar();
let settingsPressed = false;

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
                <TouchableOpacity onPress={(event) => {settingsPressed = !settingsPressed; console.log(event)}}>
                    <Image source={Settings} style = {settingsPressed?styles.settingsPhoto:styles.settingsPhotoRotated}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonBar}>
                <View style = {styles.buttonStyle}>
                    <TouchableOpacity>
                        <Text style = {styles.buttonText}>FRIENDS</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.buttonStyle}>
                    <TouchableOpacity>
                        <Text style = {styles.buttonText}>SESSIONS</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.buttonStyle}>
                    <TouchableOpacity>
                        <Text style = {styles.buttonText}>GAMES</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.recentSessions}>
                <Text style = {[styles.normalText, {fontSize: 18}]}>Recent Sessions</Text>
                <View style = {styles.session}>
                    <Image source = {Carcassone} style = {styles.gamePicture}/>
                    <Image source = {GoldCup} style = {styles.smallIcon}/>
                    <View style = {styles.sessionInfo}>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <Text style = {[styles.normalText, {margin:5}]}>Carcassone</Text>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin:5}}>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                            </View>
                        </View>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin:5}}>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                            </View>
                            <Text style = {[styles.normalText, {margin:5, fontStyle: 'italic'}]}>Yesterday</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.session}>
                    <Image source = {Uno} style = {styles.gamePicture}/>
                    <Image source = {GoldCup} style = {styles.smallIcon}/>
                    <View style = {styles.sessionInfo}>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <Text style = {[styles.normalText, {margin:5}]}>Uno</Text>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin:5}}>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                            </View>
                        </View>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin:5}}>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                            </View>
                            <Text style = {[styles.normalText, {margin:5, fontStyle: 'italic'}]}>2 days ago</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.session}>
                    <Image source = {Azul} style = {styles.gamePicture}/>
                    <Image style = {styles.smallIcon}/>
                    <View style = {styles.sessionInfo}>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <Text style = {[styles.normalText, {margin:5}]}>Azul</Text>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin:5}}>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                            </View>
                        </View>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin:5}}>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                            </View>
                            <Text style = {[styles.normalText, {margin:5, fontStyle: 'italic'}]}>5 days ago</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.session}>
                    <Image source = {Azul} style = {styles.gamePicture}/>
                    <Image source = {BronzeCup} style = {styles.smallIcon}/>
                    <View style = {styles.sessionInfo}>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <Text style = {[styles.normalText, {margin:5}]}>Azul</Text>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin:5}}>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                            </View>
                        </View>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin:5}}>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                            </View>
                            <Text style = {[styles.normalText, {margin:5, fontStyle: 'italic'}]}>8 days ago</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.session}>
                    <Image source = {Carcassone} style = {styles.gamePicture}/>
                    <Image source = {SilverCup} style = {styles.smallIcon}/>
                    <View style = {styles.sessionInfo}>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <Text style = {[styles.normalText, {margin:5}]}>Carcassone</Text>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin:5}}>
                                <Image source = {{uri: faker.image.avatar()}} style = {styles.smallPhoto}/>
                            </View>
                        </View>
                        <View style = {{flex:1, flexDirection: 'row'}}>
                            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin:5}}>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                                <Image source = {Star} style = {styles.smallIcon}/>
                            </View>
                            <Text style = {[styles.normalText, {margin:5, fontStyle: 'italic'}]}>14 days ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonStyle : {
      width: '33%',
      borderColor: '#30323b',
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderRadius: 10,
      alignItems: 'center'
  },
  smallIcon : {
      width: 20,
      height: 20,
      margin: 5
  },
  sessionInfo : {
      borderBottomColor: 'rgb(48,50,59)',
      borderBottomWidth: 4,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  gamePicture : {
      height: 70,
      width: 60,
      margin: 5
  },
  session : {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
  },
  recentSessions : {
      flex: 2.5,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonText : {
      color: '#30323b',
      fontWeight: 'bold',
      fontSize: 22,
      textDecorationLine: 'underline',
  },
  buttonBar : {
      flex: 0.2,
      flexDirection: 'row',
  },
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
  settingsPhotoRotated : {
      transform: [{rotate: '30deg'}],
      width: 35,
      height: 35
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
      justifyContent: 'flex-start',
  },
  profilePhoto: {
      width: 170,
      height: 190,
      margin : 5,
      borderRadius: 50
  },
  viewContainer: {
      flex: 1,
      flexDirection: 'row',
  },
  normalText: {
      color: '#30323b',
      fontWeight: 'bold',
      fontSize: 14,
  }
});
