import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";


import { StackNavigator } from 'react-navigation';
import List from './List';

class SecondScreen extends React.Component {
      constructor(props){
        super(props);
      }
       static navigationOptions = {
      	 title: 'React Native Template Test',
       };
 render() {
	 const { navigate } = this.props.navigation;
	 return (
		 <View style={style.mainView}>
  			 <Text >Second Partie:Composant et Navigation</Text>
			 <View style={style.secondView}>
			 <Button
				 onPress={() => navigate('ListScreen', { user: 'Amri' })}
				 title="Navigate to !"
			 />
		 </View>
		 </View>
	 );
 }
}


const  SimpleAppNavigator = StackNavigator({
 Home: { screen: SecondScreen },
 ListScreen: { screen: List }
});

const AppNavigation = () => (
 <SimpleAppNavigator  />
);

export default class Main extends React.Component {
  render() {
    return (
        <AppNavigation/>
    );
  }
}
const style = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: "#F5FCFF",
		flexDirection: 'column',

	},
	secondView:{
			flexDirection: 'row',
      justifyContent: 'center',
      marginTop:20,

  }
});
