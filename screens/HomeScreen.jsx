import React from 'react'
import { ScrollView, View, StyleSheet, Text, TextInput, Image} from 'react-native'

export default HomeScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
	
		<View style={{ height: 40,width: 360, borderColor: 'gray',backgroundColor: 'gray', borderWidth: 1 }}>	
		</View>
		<Text>{"\n"}</Text>
        <Text>     Imprezowe | Rodzinne | Strategiczne | Przygodowe </Text>
		<Text>{"\n"}</Text>
		
		    <TextInput
			style={{marginLeft: "auto", marginRight: "auto", height: 40,width: 300, borderColor: 'blue', borderWidth: 1 }}
			/>
			
		<Text>{"\n"}</Text>
		
		
		<View  style={{flex: 1, flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
		
			<View style={{height: 170,width: 340, borderColor: 'white',backgroundColor: 'orange', borderWidth: 3,justifyContent: 'center' }}>	
			<Image style={{height: 100,width: 140,  borderWidth: 1}} source={require('./picture2.jpg')} />
			<Text> To jest najlepsza gra </Text>
			</View>
			

		</View>
		
		<View  style={{flex: 1, flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
		
			<View style={{alignSelf: 'flex-start', height: 170,width: 170, borderColor: 'white',backgroundColor: 'orange', borderWidth: 3,alignItems: 'center',justifyContent: 'center' }}>	
			<Image style={{ height: 100,width: 140,  borderWidth: 1}} source={require('./picture3.jpg')} />
			<Text> Fajna gra </Text>
			</View>
			
			
			<View style={{alignSelf: 'flex-start', height: 170,width: 170, borderColor: 'white',backgroundColor: 'orange', borderWidth: 3,alignItems: 'center',justifyContent: 'center' }}>	
			<Image style={{ height: 100,width: 140,  borderWidth: 1}} source={require('./picture.jpg')} />
			<Text> Niezła gra </Text>
			</View>
		</View>
		
		
		<View  style={{flex: 1, flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
		
			<View style={{alignSelf: 'flex-start', height: 170,width: 170, borderColor: 'white',backgroundColor: 'orange', borderWidth: 3,alignItems: 'center',justifyContent: 'center' }}>	
			<Image style={{ height: 100,width: 140,  borderWidth: 1}} source={require('./picture3.jpg')} />
			<Text> Fajna gra </Text>
			</View>
			
			
			<View style={{alignSelf: 'flex-start', height: 170,width: 170, borderColor: 'white',backgroundColor: 'orange', borderWidth: 3,alignItems: 'center',justifyContent: 'center' }}>	
			<Image style={{ height: 100,width: 140,  borderWidth: 1}} source={require('./picture2.jpg')} />
			<Text> Niezła gra </Text>
			</View>
		</View>
		
		
		

    </ScrollView>
	

	    
  );

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
})

