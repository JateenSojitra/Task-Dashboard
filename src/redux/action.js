const SETFORMDATA = "setFormData"
// const SETTABLEDATA = "setTableData"

export const setProps =(info)=>{
    return {
        type : SETFORMDATA,
        info : info
    }
}

// export const setProps =(info)=>{
//     return {
//         type : SETFORMDATA,
//         info : info
//     }
// }