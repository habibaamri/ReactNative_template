import React, { Component } from "react";
import { connect } from "react-redux";
import SecondScreen from "../views/main/SecondScreen";
import store from "../../store";


export default class ElementList extends Component {
	static navigationOptions = {
		header: null
	};
  render() {
    return <SecondScreen/>;

  }
}
