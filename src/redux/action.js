const SETFORMDATA = "setFormData"
const GRIDDATA = "setGridList"

export const setProps =(payload)=>{
    return {
        type : SETFORMDATA,
        payload
    }
}
export const setGridList =(payload)=>{
    return {
        type : GRIDDATA,
        payload
    }
}

// export const setProps =(info)=>{
//     return {
//         type : SETFORMDATA,
//         info : info
//     }
// }