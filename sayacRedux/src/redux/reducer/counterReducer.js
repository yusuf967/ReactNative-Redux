import * as $ from '../action/action';

const initialState = {
    name:'',
}

const reducerFunction= (state = initialState, action) => {
    switch (action.type) {
        case $.ADD_NAMES:
            return {...state,name:action.payload };
        default:
            return state;
    }
}

export {reducerFunction};
