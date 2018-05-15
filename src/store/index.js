import { combineReducers } from "redux";
import { songs } from "./reducers";
import numberMovesFilter from "./numberMovesFilter";

//we can omit the value thanks to the ES6 shorthand notation since the key is named like the variable
const musicApp = combineReducers({
	songs
});

export default musicApp;