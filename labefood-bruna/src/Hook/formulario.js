import { useState } from "react";

export const useFormulario = (initialState) => {
    
    const [form, setForm]=useState(initialState);

    const onChangeInputs = (event)=>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }
    const limparInputs = () =>{
        setForm(initialState)
    }

    return [form, onChangeInputs, limparInputs]
}