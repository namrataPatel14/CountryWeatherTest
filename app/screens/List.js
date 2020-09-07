import React , {Component} from 'react';

import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    Alert,
    Button,
    Dimensions
  } from 'react-native';
  //import {SvgUri} from 'react-native-svg';
  const viewportWidth = Dimensions.get('window').width;
  const viewportHeight = Dimensions.get('window').height;
  class List extends Component{
      constructor(props){
          super(props);
          this.state = { isLoading: true, text: '' , countryCapital:[]};
          this.arrayholder = [];
          this.dataholder = [];
      }
      componentDidMount() {
        this.setState({isLoading: true});
        var getCountry = this.props.route.params.countryName;
          return fetch('https://restcountries.eu/rest/v2')
            .then(response => response.json())
            .then(responseJson => {
              this.setState(
                {
                  isLoading: false,
                  dataSource: responseJson
                },
                function() {
                  this.arrayholder = responseJson;
                }
              );
              const newData = this.arrayholder.filter(function(item) {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = getCountry.toUpperCase();
                return itemData.indexOf(textData) > -1;
              });
            
              this.setState({
                dataSource: newData
              });
            })
            .catch(error => {
              console.error(error);
            });
  
      }  
    
      getWeather = (capital) => {
        return fetch('http://api.weatherstack.com/current?access_key=464a98ce08aa021e24386a6fb1846d25&QUERY='+capital)
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              countryCapital: json
            });
            this.props.navigation.navigate('Weather' , {WeatherCapital:this.state.countryCapital})
          })
          .catch((error) => {
            console.error(error);
          });
      };
      render() {
        return (
          <View>
            {
              this.state.isLoading == true &&
              <ActivityIndicator size="large" color="#61dafb" />
            }
              <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => (
              <View style={styles.countryInfo}>
                  <Text style={styles.textInfo}>{item.name}</Text>
                  <Text style={styles.textInfo}>{item.capital}</Text>
                  <Text style={styles.textInfo}>{item.population}</Text>
                  <Text style={styles.textInfo}>{item.latlng}</Text>
                  {/* <View style={styles.svgImg}>
                    <SvgUri width="100%" height="100%" uri={item.flag}/>
                  </View> */}
                  <View style={styles.space}></View>
                  <Button title="Capital Weather" 
                  style={styles.buttonWeather}
                  onPress={()=>this.getWeather(item.capital)}>Capital Weather</Button>
              </View>
              
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
      />
          </View>
         
        )
      }
  }
  const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      marginTop: 10,
      padding: 16,
    },
    textStyle: {
      padding: 10,
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 10,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      marginBottom:viewportWidth*0.1
    },
    countryInfo:{
        borderWidth:1,
        margin:viewportWidth*0.04,
        padding:viewportWidth*0.04,
    },
    buttonWeather:{
      marginTop:viewportWidth*0.1
    },
    space:{
      padding:viewportWidth*0.05
    },
    svgImg:{
      position:'absolute',
      right:10,
      top:10,
      height:50,
      width:50
    },
    textInfo:{
      fontSize:16,
      marginRight:60
    }
  });
  export default List;