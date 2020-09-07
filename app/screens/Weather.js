import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Weather extends Component {
    constructor(props) {
        super(props);
    } 
 
    render() {
        var WeatherCapital = this.props.route.params.WeatherCapital;
        const i = 0;
        const icon = WeatherCapital.current.weather_icons[i]
        console.log(WeatherCapital.current.weather_icons[i] , "WeatherCapital")
        return (
            <View style={styles.infoBox}>
                <Text style={styles.textInfo}><Text style={styles.title}>Capital Name:</Text>{" "}{WeatherCapital.location.name}</Text>
                <Text style={styles.textInfo}><Text style={styles.title}>Temperature:</Text>{" "}{WeatherCapital.current.temperature}</Text>
                <Text style={styles.textInfo}><Text style={styles.title}>Wind_speed:</Text>{" "}{WeatherCapital.current.wind_speed}</Text>
                <Text style={styles.textInfo}><Text style={styles.title}>Precip:</Text>{" "}{WeatherCapital.current.precip}</Text>
                <Image source={{uri: icon}}
                 style={{ width: 40, height: 40 ,position:'absolute' , right:10,bottom:10}} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    infoBox:{
        borderWidth:1,
        margin:10,
        padding:10,
        position:'relative'
    } ,
    title:{
        fontWeight:"bold"
    },
    textInfo:{
        fontSize:16
    }
});