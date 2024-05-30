import { setProps } from "./action"

const initialState = {
    formData : {},
    data : []
}


const reducer = (state = initialState , action)=>{
    switch(action.type){
        case  "setFormData" : return (state.formData !== undefined ? state.formData : {} )
    }
}