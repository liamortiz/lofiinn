export default function audioReducer (state={currentRougeTrack: -1}, action) {
    switch(action.type) {
        case "UPDATE_TRACK":
            return {...state, currentRougeTrack: action.payload};
        default:
            return state;
    }
}