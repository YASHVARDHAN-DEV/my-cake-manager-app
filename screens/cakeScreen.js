import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, Switch, TextInput} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import firebase from "firebase";
import { Alert, Touchable, TouchableOpacity } from "react-native-web";

let customFonts = {
 "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};
export default class cakeScreen extends Component{
    constructor(props){
        super(props);
        this.state={fontsLoaded:false}

        
    }
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
        }
    componentDidMount(){
        this._loadFontsAsync()
    } 
    render(){
        if(!this.state.fontsLoaded){
          
            return <AppLoading />;
        }else{
            
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.appTitle}>
            <View style={styles.appIcon}>
            <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
            ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Cake Manager App</Text>
            </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text styes={styles.text}>payment through app</Text>
                 onPress={() => this.redirectApp()}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>payment on delivery</Text>
                 onPress={() => this.cashOndelivery()}
            </TouchableOpacity>
            </View>
           
   )
    }
} 
redirectApp(){
    window.location.href='https://pay.google.com/gp/w/u/0/home/activity?sctid=7828134122779265  '
    this.setState({
        payment:success,
      
    })
    if(payment==success){
    Alert.alert("paymentSuccessful")}
    else{
        Alert.alert("paymentnotsuccessful")
    }
}
cashOndelivery(){
    Alert.alert("orderSuccessful")
}
}


const styles=Stylesheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#5653d4',

   },
   text:{
       color:'#ffff',
       fontSize:30,
   }
})