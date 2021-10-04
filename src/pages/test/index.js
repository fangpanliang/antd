import store from './store/index.js';
import {
    addAction,
    subAction,
    incAction,
    decAction
}from './store/actionCreators.js'


store.subscrobe(()=>{
    console.log(sotre.getState())
})



store.dispath(addAction(10));
store.dispath(addAction(15));
store.dispath(subAction(8));
store.dispath(subAction(5));
store.dispath(incAction());
store.dispath(decAction());