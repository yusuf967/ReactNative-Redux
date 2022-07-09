export const ADD_NAMES = "ADD_NAMES";

export const setName=name=>dispatch=>{
    dispatch({
        type:ADD_NAMES,
        payload:name,
    })
}