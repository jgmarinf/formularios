import React, { useState } from 'react'

const Form = () => {

    const [inputText, setInputText] = useState("")

    const onSubmitFuntion = e => {
       e.preventDefault()
       setInputText(e.target.children[0].value)
    }

  return (
    <form onSubmit={onSubmitFuntion} action="">
        <input type="text">
        </input>
        <button>print text</button>
        <h1>{inputText}</h1>
    </form>
  )
}

export default Form