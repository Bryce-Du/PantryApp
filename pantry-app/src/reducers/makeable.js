export default (state = {makeables: [], processing: false}, action) => {
    switch (action.type){
        case "PROCESSING":
            return {...state, makeables: [...state.makeables], processing: true}
        case "MAKEABLE_RECIPES":
            return {...state, makeables: action.payload, processing: false}
        default:
            return state;
    }
}