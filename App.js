import { StatusBar } from 'expo-status-bar';
import BottomTabNavigator from './navigation/bottomTabNavigator';
import db from './config';
export default class App extends component{
  render(){
    return <BottomTabNavigator/>
  }
}