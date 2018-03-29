import React, { Component } from "react";
import { Text, View, StyleSheet, Button,ScrollView} from "react-native";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {deleteItem} from '../../../actions/ElementListActions';
import * as listAction from '../../../actions/ElementListActions';
import { ADD_ARTICLE } from  '../../../actions/actionsTypes';

class List extends Component {

	//Constructor
	constructor (props) {
						super(props)
							this.state = {
										  word: ''
										}
	 	}

	static navigationOptions = ({ navigation }) => ({
		title: `List of languages*by*  ${navigation.state.params.user}**`,
	});


	//listView to display our list (data==>list of elements )
	listView(data, index){
	    return (
		       <View style={style.float} key={index} >
			        <Text   style={{height:30}}>
			            {data.word}
			        </Text>

					<View style={style.button}>
					        <Button onPress={(e) => this.deleteElement(e, index)}
					            title="X"
					          />
				    </View>
				</View>
	    )
	  }

	
	 deleteElement(e, index){
	    e.preventDefault();
	    this.props.deleteElement(index);
	  }

	render() {


		return (
			<View>
				<ScrollView showsVerticalScrollIndicator={true} style={style.mainView}>
							<View style={style.footerWrapper}>
								{ <View >
								{ this.props.elements.map((element,i) =>
																	 this.listView(element, i)
																	)
								}</View> 
								}
							</View>
				</ScrollView>
			</View>
		);
	}//end render
}//end class


//Mapping of var between react & redux
const mapStateToProps = (state, ownProps) => {
  return {
    elements: state.elements
  }
};


//Mapping of functions
const mapDispatchToProps = (dispatch) => {
  return {
    deleteElement: index =>dispatch(listAction.deleteElement(index))
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(List);



const style = StyleSheet.create({
	mainView: {
		width:350,
		margin:5,

	},
	sectionText: {
			color: "#000",
			margin : 3,
			textAlign: 'center'
		},
		footerWrapper: {
        alignItems: 'flex-start',
    },
		float:{
			flexDirection: "row",
			justifyContent: 'space-between',
		},
		button:{

			width:30,
			marginTop:2,
			marginLeft:220,
		}

	});
