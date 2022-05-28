import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, Switch, TextInput} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import firebase from "firebase";

let customFonts = {
 "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};
export default class placeorderScreen extends Component{
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
            <TextInput style={styles.inputFont}
            onChangeText={flavour=>this.setState({flavour})}
            placeholder={"Flavour"}
            placeholderTextColor={"White"}/>
            <TextInput style={styles.inputFont}
            onChangeText={pound=>this.setState({pound})}
            placeholder={"Pound"}
            placeholderTextColor={"White"}/>
            <TextInput style={styles.inputFont}
            onChangeText={expectedDate=>this.setState({expectedDate})}
            placeholder={"Date"}
            placeholderTextColor={"White"}/>
            </View>
            
            
        )
    }
}}
const styles=Stylesheet.create({
        container: {
          flex: 1,
          backgroundColor: "#15193c"
        },
        droidSafeArea: {
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
        },
        appTitle: {
          flex: 0.07,
          flexDirection: "row"
        },
        appIcon: {
          flex: 0.3,
          justifyContent: "center",
          alignItems: "center"
        },
        iconImage: {
          width: "100%",
          height: "100%",
          resizeMode: "contain"
        },
      
      
      inputFont: {
          height: RFValue(40),
          borderColor: "white",
          borderWidth: RFValue(1),
          borderRadius: RFValue(10),
          paddingLeft: RFValue(10),
          color: "white",
          fontFamily: "Bubblegum-Sans"
        }
      })
      
      
      