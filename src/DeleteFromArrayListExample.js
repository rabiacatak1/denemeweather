import {useState} from "react";

let artists=[
    {id: 0, name: 'Bilge Çatak'},
    {id: 1, name: 'Rabia Çatak'},
    {id: 2, name: 'İlker Çatak'}
]
export default function DeleteFromArrayListExample() {


    const [lists,setLists]=useState(artists)


    return(

        <div>
            <h1>
                Inspiring Sculptures DELETE FROM ARRAY EXAMPLE
            </h1>
            <ul>
                {lists.map(list=>(
                    <li
                        key={list.id}
                    >
                        {list.name}

                        <button
                            onClick={()=>{
                                setLists(
                                    lists.filter(a=>
                                        a.id !== list.id
                                    ))
                            }}

                        >
                            Delete
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    )
}