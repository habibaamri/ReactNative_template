import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "../views/main/Main";
import store from "../../store";
import { updateAppStatus } from "../../actions/appActions";

class MainContainer extends Component {

	static navigationOptions = {
		header: null

	};

	constructor(props) {
		super(props);
		this.state = {
						clicked: 0 ,
						color:'blue',
						statusButton:false,
						};
						
		this.updateMessage = this.updateMessage.bind(this);
		this.initializeNumber = this.initializeNumber.bind(this);

	}

	updateMessage(message) {
		let clicked = this.state.clicked + 1;
		if(this.state.clicked==0) {
									color=this.state.color;
									}
		else if(this.state.clicked==1) {

										this.setState({color:'yellow'});
										}

		else if(this.state.clicked==2) {

										this.setState({color:'green'});
										}
		else {
				this.setState({color:'red'});

				if(this.state.statusButton == false){
						this.setState({statusButton: true})
						}
			}
		this.setState({ clicked });
		store.dispatch(updateAppStatus(message));
	}

	initializeNumber(){
		let clicked = 0;
		this.setState({statusButton: true});
		this.setState({color:'blue'});
		this.setState({ clicked });
	}

	render() {
		message=this.props.status + " " + this.state.clicked + " times";
		color=this.state.color;
		statusButton=this.state.statusButton;
		return <Main message={message} updateMessage={this.updateMessage}
					initializeNumber={this.initializeNumber}  color={color} statusButton={statusButton} />
               
	}
}

const mapStateToProps = function(store) {
	return {
		status: store.appState.status
	};
};

export default connect(mapStateToProps)(MainContainer);
