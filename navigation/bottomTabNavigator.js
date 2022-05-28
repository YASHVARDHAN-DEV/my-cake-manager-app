import React, { Component } from "react"; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/loginScreen";
import cakeScreen from "../screens/cakeScreen";
import placeorderScreen from "../screens/placeOrderScreen";
const Tab = createBottomTabNavigator()
export default class BottomTabNavigator extends Component{
   render(){
       return(
           <NavigationContainer>
               <Tab.Navigator>
               <Tab.Screen name="loginScreen" component={LoginScreen}/>
               <Tab.Screen name="cakeScreen" component={cakeScreen}/>
               <Tab.Screen name="placeOrderScreen" component={placeorderScreen}/>
               </Tab.Navigator>
           </NavigationContainer>
            
       )
   }
}