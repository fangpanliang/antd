import { ADD_NUMBER, SUB_NUMBER } from "./constants.js"

import {
    ADD_NUMBER,
    SUB_NUMBER,
    INCREAMENT,
    DECREAMENT
}from './constants.js';

// export function addAction(num){
//     return{
//         type:"ADD_NUMBER",
//         num
//     }
// }

// export const addAction = (num) => {
//     return{
//         type:"ADD_NUMBER",
//         num
//     }
// }

export const addAction = num => ({
    type:ADD_NUMBER,
    num
})

export const subAction = num => ({
    type:SUB_NUMBER,
    num
})

export const incAction = () => ({
    type:INCREAMENT,
    num
})

export const decAction = () => ({
    type:DECREAMENT,
    num
})