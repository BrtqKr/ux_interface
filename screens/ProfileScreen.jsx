import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import Container from "react-native-dialog/src/Container";
import DialogButton from "react-native-dialog/src/Button";
import Input from "react-native-dialog/src/Input";
import Settings from '../assets/profile/settings.png'
import Carcassone from '../assets/profile/carcassone.jpg'
import Uno from '../assets/profile/uno.png'
import Azul from '../assets/profile/azul.jpg'
import GoldCup from '../assets/profile/gold_cup.png'
import SilverCup from '../assets/profile/silver_cup.png'
import BronzeCup from '../assets/profile/bronze_cup.png'
import Star from '../assets/profile/star.png'
import { AntDesign } from '@expo/vector-icons'
import * as Font from "expo-font"
import { AppLoading } from "expo";

var faker = require('faker');

const login = faker.internet.userName().substring(0,12).toLowerCase();
const name = (faker.name.firstName() + " " + faker.name.lastName()).substring(0,20);
const mail = login.substring(0,4).toLowerCase()+"@gmail.com";
let photoUri = faker.image.avatar();
let mostSessions = [faker.image.avatar(), faker.image.avatar(), faker.image.avatar()];
let bestSessions = [faker.image.avatar(), mostSessions[2], faker.image.avatar()];
let sessions = [[faker.image.avatar(),bestSessions[1],faker.image.avatar()],
                [bestSessions[1],faker.image.avatar(),bestSessions[0],mostSessions[0],faker.image.avatar()],
                [faker.image.avatar(),faker.image.avatar(),mostSessions[2]],
                [bestSessions[2], faker.image.avatar()],
                [mostSessions[0]]];

export class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: false,
            password: '',
            confirmedPassword: '',
            fontLoaded: false
        };
        this.settingsDone = this.settingsDone.bind(this);
    }

    async _loadFontsAsync() {
        await Font.loadAsync({"Lato": require('../assets/fonts/Lato-Thin.ttf')});
        this.setState({ fontLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync()
    }

    settingsDone() {
        this.setState(function(state) {
            return {
                settings: !this.state.settings
            };
        });
    }

    render() {
            if(this.state.fontLoaded){
                return (<ScrollView style={styles.mainContainer}>
                <Container visible={this.state.settings}>
                    <Text style = {[styles.normalText,{marginHorizontal: 20, fontSize: 10}]}>New Password</Text>
                    <Input secureTextEntry={true} style={styles.input} onChange={(evt) => {this.setState({password: evt.nativeEvent.text})}}/>
                    <Text style = {[styles.normalText,{marginHorizontal: 20, fontSize: 10}]}>Confirm New Password</Text>
                    <Input secureTextEntry={true} style={styles.input} onChange={(evt) => {this.setState({confirmedPassword: evt.nativeEvent.text})}}/>
                    <View style = {{marginHorizontal: 20, flexDirection: 'row', alignItems: 'space-between', justifyContent: 'space-between'}}>
                        <DialogButton style={styles.normalText} label="Cancel"  onPress={(event) => {this.setState({settings: false})}}/>
                        <TouchableOpacity onPress={(event) => {
                            if(this.state.password !== this.state.confirmedPassword) console.warn("passwords don\'t match!");
                            else if(this.state.password === '') console.warn("password could not be empty!");
                            else this.setState({settings: false})
                        }}>
                            <AntDesign name="arrowright" size={40} color={'#F7F7F7'} style = {{backgroundColor: '#F5A315', height: 40, width: 40}}/>
                        </TouchableOpacity>
                    </View>
                </Container>
                <View style={styles.topBar}/>
                <View style={styles.viewContainer}>
                    <Image source={{uri: photoUri}} style={styles.profilePhoto}/>
                    <View style={styles.informationContainer}>
                        <Text style={styles.normalText}>
                            Login: {"\t" + login + "\n"}
                            Name:{"\t" + name + "\n"}
                            E-mail:{"\t" + mail + "\n"}
                        </Text>
                        <View style={{borderBottomColor: '30323b', borderBottomWidth: 4}}/>
                        <View style={styles.stats}>
                            <View style={styles.statContainer}>
                                <Text style={styles.rotatedText}> Most Sessions </Text>
                                <View style={styles.friendResults}>
                                    <View style={styles.friendResult}>
                                        <Image source={{uri: mostSessions[0]}} style={styles.smallPhoto}/>
                                        <Text style={styles.normalText}> 32 </Text>
                                    </View>
                                    <View style={styles.friendResult}>
                                        <Image source={{uri: mostSessions[1]}} style={styles.smallPhoto}/>
                                        <Text style={styles.normalText}> 28 </Text>
                                    </View>
                                    <View style={styles.friendResult}>
                                        <Image source={{uri: mostSessions[2]}} style={styles.smallPhoto}/>
                                        <Text style={styles.normalText}> 27</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.statContainer}>
                                <Text style={styles.rotatedText}> Best Sessions </Text>
                                <View style={styles.friendResults}>
                                    <View style={styles.friendResult}>
                                        <Image source={{uri: bestSessions[0]}} style={styles.smallPhoto}/>
                                        <Text style={styles.normalText}> 4.1/5 </Text>
                                    </View>
                                    <View style={styles.friendResult}>
                                        <Image source={{uri: bestSessions[1]}} style={styles.smallPhoto}/>
                                        <Text style={styles.normalText}> 3.8/5 </Text>
                                    </View>
                                    <View style={styles.friendResult}>
                                        <Image source={{uri: bestSessions[2]}} style={styles.smallPhoto}/>
                                        <Text style={styles.normalText}> 3.7/5 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={(event) => {
                        this.setState({ settings: true });
                    }}>
                        <Image source={Settings} style={this.state.settings?styles.settingsPhotoRotated:styles.settingsPhoto}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonBar}>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={(event) => {Alert.alert("Your friends subscreen")}}>
                            <Text style={styles.buttonText}>FRIENDS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={(event) => {Alert.alert("Your sessions subscreen")}}>
                            <Text style={styles.buttonText}>SESSIONS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={(event) => {Alert.alert("Your games subscreen")}}>
                            <Text style={styles.buttonText}>GAMES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recentSessions}>
                    <Text style={[styles.normalText, {fontSize: 18, margin: 20}]}>Recent Sessions</Text>
                    <View style={styles.session}>
                        <Image source={Carcassone} style={styles.gamePicture}/>
                        <Image source={GoldCup} style={styles.smallIcon}/>
                        <View style={styles.sessionInfo}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={[styles.normalText, {margin: 5}]}>Carcassone</Text>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin: 5}}>
                                    <Image source={{uri: sessions[0][0]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[0][1]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[0][2]}} style={styles.smallPhoto}/>
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 5}}>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                </View>
                                <Text style={[styles.normalText, {margin: 5, fontStyle: 'italic'}]}>Yesterday</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.session}>
                        <Image source={Uno} style={styles.gamePicture}/>
                        <Image source={GoldCup} style={styles.smallIcon}/>
                        <View style={styles.sessionInfo}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={[styles.normalText, {margin: 5}]}>Uno</Text>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin: 5}}>
                                    <Image source={{uri: sessions[1][0]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[1][1]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[1][2]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[1][3]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[1][4]}} style={styles.smallPhoto}/>
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 5}}>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                </View>
                                <Text style={[styles.normalText, {margin: 5, fontStyle: 'italic'}]}>2 days ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.session}>
                        <Image source={Azul} style={styles.gamePicture}/>
                        <Image style={styles.smallIcon}/>
                        <View style={styles.sessionInfo}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={[styles.normalText, {margin: 5}]}>Azul</Text>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin: 5}}>
                                    <Image source={{uri: sessions[2][0]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[2][1]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[2][2]}} style={styles.smallPhoto}/>
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 5}}>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                </View>
                                <Text style={[styles.normalText, {margin: 5, fontStyle: 'italic'}]}>5 days ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.session}>
                        <Image source={Azul} style={styles.gamePicture}/>
                        <Image source={BronzeCup} style={styles.smallIcon}/>
                        <View style={styles.sessionInfo}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={[styles.normalText, {margin: 5}]}>Azul</Text>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin: 5}}>
                                    <Image source={{uri: sessions[3][0]}} style={styles.smallPhoto}/>
                                    <Image source={{uri: sessions[3][1]}} style={styles.smallPhoto}/>
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 5}}>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                    <Image source={Star} style={styles.smallIcon}/>
                                </View>
                                <Text style={[styles.normalText, {margin: 5, fontStyle: 'italic'}]}>8 days ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.session}>
                        <Image source={Carcassone} style={styles.gamePicture}/>
                        <Image source={SilverCup} style={styles.smallIcon}/>
                        <View style={styles.sessionInfo}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={[styles.normalText, {margin: 5}]}>Carcassone</Text>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin: 5}}>
                                    <Image source={{uri: sessions[4][0]}} style={styles.smallPhoto}/>
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 5}}>
                                    <Image source={Star} style={styles.smallIcon}/>
                                </View>
                                <Text style={[styles.normalText, {margin: 5, fontStyle: 'italic'}]}>14 days ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>);}
            else{
                return <AppLoading />;
            }
    }
}

const styles = StyleSheet.create({
  input : {
      borderColor: '#30323b',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderRadius: 30,
      height: '20%',
      width: '100%',
      color: '#30323b',
      fontSize: 13,
  },
  buttonStyle : {
      width: '33%',
      borderColor: '#30323b',
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
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
      marginBottom: 80,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonText : {
      color: '#30323b',
      fontWeight: 'bold',
      fontSize: 22,
      textDecorationLine: 'underline',
      fontFamily: 'Lato'
  },
  buttonBar : {
      marginTop: 10,
      flex: 1,
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
      alignItems: 'center',
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
      width: 100,
      fontFamily: 'Lato'
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
      height: '5%'
  },
  mainContainer: {
      flex: 1,
      backgroundColor: '#FEFEFE',
      flexDirection: 'column',
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
      fontFamily: 'Lato'
  }
});
