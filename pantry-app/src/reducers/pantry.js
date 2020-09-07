export default (state = {pantry: [], processing: false}, action) => {
    switch (action.type){
        case "PROCESSING_PANTRY":
            return {...state, pantry: [...state.pantry], processing: true}
        case "INDEX_PANTRY":
            return {...state, pantry: action.payload, processing: false}
        default:
            return state 
    }
}