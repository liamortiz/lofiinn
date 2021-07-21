export default function articleReducer (state=[], action) {
    switch(action.type) {
        case "CREATE_ARTICLE":
            return [...state, {...action.article}];
        default:
            return state;
    }
}