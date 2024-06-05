// import { setProps } from "./action"

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    formData : {},
    data : []
}

export const fromDataSlice = createSlice({
    name: "formDataSlice",
    initialState,
    reducers : {
        setProps : (state , action)=>{
            state.formData = action.payload 
        },
        setGridList :  (state , action)=>{
            state.data = action.payload
        }
    }
})

// const reducer = (state = initialState , action)=>{
//     switch(action.type){
//         case  "setProps" : return (state.payload.formData !== undefined ? state.payload.formData : state.formData)
//         case  "setGridList" : return (state.payload.data !== undefined ? state.payload.data : state.data)
//     }
// }


export const { setProps , setGridList} = fromDataSlice.actions
// export default reducer
export default fromDataSlice.reducer;