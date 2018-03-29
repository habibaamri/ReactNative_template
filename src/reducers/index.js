import { combineReducers } from "redux";
import appReducer from "./appReducer";
import navReducer from "./navReducer";
import elements from './ElementListReducer';

// Combine Reducers
const reducers = combineReducers({
	appState: appReducer,
	nav: navReducer,
	elements: elements
});

export default reducers;
