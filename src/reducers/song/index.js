import { songActions } from "../../actions/songs";
import {orderDirections} from "../../helpers/constants";

export const song = (state = { trackBeingPlayedId: "", list: [], sortBy: "", orderDirection: "" }, action) => {
	if (!action.type) {
		return state;
	}
	console.log(action)
	switch (action.type) {
		case songActions.UPDATE_LIST:
			return {...state, list: [...action.payload]}
		case songActions.SET_PLAYED_SONG_ID:
			return {...state, trackBeingPlayedId: action.payload}
		case songActions.SET_SONGS_ORDER:
			const stateObj = state.sortBy === action.payload ? {orderDirection: state.orderDirection === orderDirections.ASC ? orderDirections.DESC  : orderDirections.ASC} : {sortBy: action.payload}
			return {...state, ...stateObj}
		default:
		 	return state;
	}
}

export default song;