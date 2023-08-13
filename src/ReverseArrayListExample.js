import {useState} from "react";


let artists=[
    {id: 0, name: 'Bilge Çatak'},
    {id: 1, name: 'Rabia Çatak'},
    {id: 2, name: 'İlker Çatak'}
]

export default function ReverseArrayListExample (){

    const [list,setList]=useState(artists)

    function reverseList() {
        const newReverseList=[...list]
        newReverseList.reverse();
        setList(newReverseList)

    }

    return(

        <div>

            <br/>
            <br/>
            <button
                onClick={reverseList}
            >
                REVERSE
            </button>

            <h1>REVERSE ARRAY LIST</h1>

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