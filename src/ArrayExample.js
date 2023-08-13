import {useState} from "react";

export default function List(){

    const [name,setName]=useState('')
    const [list,setList]=useState([])

    return(

        <div>
            <h1>
                Inspiring Sculptures
            </h1>
            <input
                value={name}
                onChange={e=>setName(e.target.value)}
            >


            </input>

            <button
            onClick={()=>{
                setList([
                    ...list,
                    {name:name, id : list + 1}
                ])
            }}
            >Add List

            </button>

            <br/>
            <br/>
            <ul>
                {list.map(list=>(
                    <li
                        key={list.id}
                    >
                        {list.name}

                    </li>
                ))}

            </ul>
        </div>
    )
}