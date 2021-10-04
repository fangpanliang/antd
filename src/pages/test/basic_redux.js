const redux = require('redux');

const initialState = {
    counter: 0
}
//reducer
function reducer(state = initialState,action){
    switch(action.type){
        case "INCREMENT":
            return {...state,counter:state.counter+1}
        case "DECREMENT":
            return {...state,counter:state.counter-1}
        case "ADD_NUMBER":
            return {...state,counter:state.counter+action.num}
        case "SUB_NUMBER":
            return {...state,counter:state.counter-action.num}
        default:
            return state
    }
}

//store
const store = redux.createStore(reducer)

//订阅store
store.subscrobe(()=>{
    console.log("counter:",sotre.getState().counter)
})

//action
const action1 ={type:"INCREMENT"};
const action2 ={type:"DECREMENT"};
const action3 ={type:"ADD_NUMBER", num:5};
const action4 ={type:"SUB_NUMBER", num:12};


//派发action
store.dispath(action1);
store.dispath(action2);
store.dispath(action2);
store.dispath(action3);
store.dispath(action4)



