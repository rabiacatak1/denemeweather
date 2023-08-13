import {useState} from "react";

export default function AddTodo({onAddTodo}){
    const [title,setTitle]=useState('')


    return(
        <div>
            <input
                placeholder="Add Todo"
                value={title}
                onChange={event => (event.target.value)}
            >
            </input>

            <button
                onClick={() => { setTitle(' ');
                    onAddTodo();
            }}

            >
                Add
            </button>

        </div>
    )
}