import React, { useState } from "react"

export function ToDoList(){
    const [toDo, setToDo] = useState("")
    const inputHandler = (event:React.FormEvent<HTMLInputElement>) => {
        const  {
            currentTarget: {value}
        } = event
        setToDo(value)
    }

    const submitHandler = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        console.log(toDo)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={inputHandler} value={toDo} placeholder="Write a To Do"/>
                <button>submit</button>
            </form>
        </div>
    )
}