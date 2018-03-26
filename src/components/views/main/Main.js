import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class Main extends Component {


	render() {
		return (
			<View style={style.mainView}>
				<Text >{this.props.message}</Text>
				<View style={style.secondView}>

				<Button
					title="Click me" color={this.props.color}
					onPress={() => this.props.updateMessage("Clicked")
					}
				/>
					<View style={style.button}>
         	{
						this.props.statusButton ?<Button
					 	title="Click me too"  onPress={() => this.props.initializeNumber()}/> : null
						}
					</View>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: "#F5FCFF",
		flexDirection: 'column',
    justifyContent: 'space-between',
	},
	secondView:{
			flexDirection: 'row',
  },
	button:{
		justifyContent: 'center',
		marginLeft:50,
	}
});
export default Main;
