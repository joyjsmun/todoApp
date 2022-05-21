import { useForm } from "react-hook-form"

interface IForm{
    toDo :string
}

export function ToDoList(){
    const {register,handleSubmit,setValue} = useForm<IForm>()
    const handleValid = (data:IForm) => {
        console.log(data)
        setValue("toDo","")

    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo",{required:"please a write a todo"})} />
                <button>Add</button>
            </form>
        </div>
    )
 
}

export default ToDoList;