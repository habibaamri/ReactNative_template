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

		this.setState({ clicked });
		store.dispatch(updateAppStatus(message));
	}
	initializeNumber(){
		let clicked = 0;
		this.setState({statusButton: true});
		this.setState({ clicked });
	}
	render() {

		let message = this.props.status;
		let color=this.props.status;
		let statusButton=this.props.status;
		message=this.props.status + " " + this.state.clicked + " times";
		color=this.state.color;
		statusButton=this.state.statusButton;
					if(this.state.clicked==0) {color=this.state.color;
						return <Main message={message} updateMessage={this.updateMessage} color={color}
											initializeNumber={this.initializeNumber}  statusButton={statusButton}/>;

						}
					else if(this.state.clicked==1) {
							color=this.state.color='yellow';
							return <Main message={message} updateMessage={this.updateMessage} color={color}
												initializeNumber={this.initializeNumber}  statusButton={statusButton}/>;

					}
					else if(this.state.clicked==2) {
							color=this.state.color='green';
						 return <Main message={message} updateMessage={this.updateMessage} color={color}
						 				initializeNumber={this.initializeNumber}  statusButton={statusButton}/>;
					}
					else {color=this.state.color='red';

									if(this.state.statusButton == false)
										  {
										    this.setState({statusButton: true})
										  }
						return <Main message={message} updateMessage={this.updateMessage}
											initializeNumber={this.initializeNumber}  color={color} statusButton={statusButton} />;
               }

		return <Main message={message} updateMessage={this.updateMessage} color={color}  />;

	}
}

const mapStateToProps = function(store) {
	return {
		status: store.appState.status
	};
};

export default connect(mapStateToProps)(MainContainer);
