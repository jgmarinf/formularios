import React, { useState } from 'react'

const FormControlate = () => {
    const [inputText, setInputText] = useState("")
    const [textError, settextError] = useState("")
    const onChangeInput = e => {
        setInputText(e.target.value)

        if (e.target.value.length > 10){
            setInputText("")
            settextError("no puedes escribir mas caracteres")
        }
    }

  return (
    <form>
        <input 
            type="text"
            value={inputText}
            onChange={onChangeInput}    
        ></input>
        <h1>
            {textError}
            {inputText}
        </h1>
    </form>
  )
}

export default FormControlate