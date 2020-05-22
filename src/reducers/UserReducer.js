import {ADD_ME_CART} from "../actions/types";

export default function (state={},action) {


    switch(action.type){
        case ADD_ME_CART:
            return {...state}

        default:
            return state;
    }
}
