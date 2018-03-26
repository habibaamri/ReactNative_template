import React, { Component } from "react";
import { Text, View, StyleSheet, Button,ScrollView} from "react-native";

export default class List extends Component {
	constructor (props) {
										super(props)
										this.state = {
											array: paragraph
										}
		}
	static navigationOptions = ({ navigation }) => ({
		title: `List ** ${navigation.state.params.user}**`,
	});
	render() {
		// The screen's current route is passed in to `props.navigation.state`:
		const { params } = this.props.navigation.state;
		const {array} = this.state;
		function Blog(props) {
			const content = props.array.map((post) =>
				<View key={post.id}
					onClick={() => getItem(post.word)}  >
					<Text style={{height:50}} > {post.word}</Text>
				</View>
			);
		return (
				<View >
					{content}
				</View>
			);
		}
		return (
			<View>
					<ScrollView showsVerticalScrollIndicator={true} style={style.container}>
								<View style={style.footerWrapper}>
				  							<Blog array={array}   />
								</View>
				</ScrollView>
			</View>
		);
	}//end render
}//end class

const style = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

	},
	sectionText: {
			color: "#000",
			margin : 3,
			textAlign: 'center'
		},
		footerWrapper: {
        alignItems: 'flex-start',
    }
	});
	//database
const paragraph = [
		{ "id" : 1, "word": "JAVA"},
		{ "id" : 2, "word": "JAVA EE"},
		{ "id" : 3, "word": "JAVA ME"},
		{ "id" : 4, "word": "Spring"},
		{ "id" : 5, "word": "Sping MVC"},
		{ "id" : 6, "word": "Spring Boot"},
		{ "id" : 7, "word": "JSF"},
		{ "id" : 8, "word": "EJB"},
		{ "id" : 9, "word": "Hibernate"},
		{ "id" : 10, "word": "Maven"},
		{ "id" : 11, "word": "JPA"},
		{ "id" : 12, "word": "Struts"},
		{ "id" : 13, "word": "Angular"},
		{ "id" : 14, "word": "Electron"},
		{ "id" : 15, "word": "ReactJs"},
		{ "id" : 16, "word": "React Native"},
		{ "id" : 17, "word": "Native Script"},
		{ "id" : 18, "word": "Ionic"},
		{ "id" : 19, "word": "Android"},
		{ "id" : 20, "word": "Objective C"},
		{ "id" : 21, "word": "C"},
		{ "id" : 22, "word": "Angular"},
		{ "id" : 23, "word": "Electron"},
		{ "id" : 24, "word": "ReactJs"},
		{ "id" : 25, "word": "React Native"},
		{ "id" : 26, "word": "Native Script"},
		{ "id" : 27, "word": "Ionic"},
		{ "id" : 28, "word": "Android"},
		{ "id" : 29, "word": "Objective C"},
		{ "id" : 30, "word": "C"},
		{ "id" : 31, "word": "Angular"},
		{ "id" : 32, "word": "Electron"},
		{ "id" : 33, "word": "ReactJs"},
		{ "id" : 34, "word": "React Native"},
		{ "id" : 35, "word": "Native Script"},
		{ "id" : 36, "word": "Ionic"},
		{ "id" : 37, "word": "Android"},
		{ "id" : 38, "word": "Objective C"},
		{ "id" : 39, "word": "C"},
	];
