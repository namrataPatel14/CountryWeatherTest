import React , {Component} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,TextInput,
    TouchableOpacity,
    Dimensions 
  } from 'react-native';

import { Button } from 'native-base';


const viewportWidth = Dimensions.get('window').width;
const viewportHeight = Dimensions.get('window').height;

  class Home extends Component{
      constructor(props){
          super(props);
          this.state={
            Country:'',
            
          }
      }
      
      render(){
         let isDisabled = true;
          if(this.state.Country == "" || this.state.Country == null){
            isDisabled = true
          }else{
            isDisabled = false
          }
          return(
              <View style={styles.container}>
                  <TextInput 
                   placeholder="Enter Country"
                   onChangeText={Country => this.setState({Country})}
                   value={this.state.text}
                   style={styles.InputText}
                   />
                    <Button block dark disabled={isDisabled} 
                    onPress={()=>this.props.navigation.navigate('List' , {countryName:this.state.Country})}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </Button>
              </View>
          )
      }
  }
  const styles = StyleSheet.create({
    submitButtonText:{
        color:'#61dafb',
        lineHeight:40,
        textAlign:'center',
        fontSize:16
    },
    container:{
        padding:viewportWidth* 0.04
    },
    InputText:{
        fontSize:18,
        marginBottom:viewportWidth* 0.03,
    }
   });
  export default Home;