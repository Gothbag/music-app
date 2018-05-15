import { songActions } from "../../actions/songs";

export const song = (state = { trackBeingPlayedId: "", list: [] }, action) => {
	if (!action.type) {
		return state;
	}
	console.log(action)
	switch (action.type) {
		case songActions.UPDATE_LIST:
			return {...state, list: [...action.payload]}
		case songActions.SET_PLAYED_SONG_ID:
			return {...state, trackBeingPlayedId: action.payload}
		default:
		 	return state;
	}
}

export default song;