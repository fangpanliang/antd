import {
    ADD_NUMBER,
    SUB_NUMBER,
    INCREAMENT,
    DECREAMENT
}from './constants.js';


const defaultState = {
    counter: 0
}

function reducer (state = defaultState,action){
    switch(action.type){
        case INCREAMENT :
            return {...state,counter:state.counter+1}
        case DECREAMENT:
            return {...state,counter:state.counter-1}
        case ADD_NUMBER:
            return {...state, counter:state.counter+action.num}
        case SUB_NUMBER:
            return {...state,counter:state.counter-action.num}
        default:
            return state
    }
}

export default reducer;