import './App.css';
import StateExample from "./StateExample";
import {useState} from "react";
import { sculptureList } from './data.js';
import FormDeneme from "./FormExample";
import List from "./ArrayExample";
import DeleteFromArrayListExample from "./DeleteFromArrayListExample";
import ReverseArrayListExample from "./ReverseArrayListExample";
import UpdateItemShoppingCard from "./UpdateItemShoppingCard";
import LeafForm from "./AddEditSaveDeleteForm/MainTodo";




function Gallery(){
    const [index,setIndex]=useState(0);
    const [showMore,setShowMore]=useState(false);
    const [walk ,setWalk]=useState(false);

    let sculpture=sculptureList[index]

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length - 1;


    function changeTrafficLight(){
        setWalk(!walk)
    }

    function handlePrevClick() {
        if (hasPrev) {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        }
    }


    function handleShowMoreClick() {
        setShowMore(!showMore);
    }



    return(
        <div>
            <button
                onClick={handlePrevClick}
                disabled={!hasPrev}
            >
                Previous
            </button>
            <button
                onClick={handleNextClick}
                disabled={!hasNext}
            >
                Next
            </button>
            <h1>{sculpture.name}</h1>
            <h2>{sculpture.artist}</h2>

            <p>{index + 1}</p>
            <p>of</p>
            <p>{sculptureList.length}</p>
            <button
                onClick={handleShowMoreClick}

            >
                {showMore ? 'Hide' : 'Show' }
            </button>

            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>{showMore && sculpture.description}</p>


            <button onClick={changeTrafficLight}>
                {walk ? 'Change to stop' : 'Change to walk'}
            </button>

            <br/>
            <h1 style={{color: walk ? 'green' : 'red'}}>
                {walk ? 'Walk' : 'Stop'}

            </h1>

            <br/>
            <br/>
            <br/>

            <List/>

            <br/>
            <br/>
            <br/>

            <DeleteFromArrayListExample/>
            <br/>
            <br/>
            <br/>
            <ReverseArrayListExample/>


        </div>
    )
}
function App() {
  return (
    <div className="App">
        <LeafForm/>

        <UpdateItemShoppingCard/>
        {/*<Gallery/>*/}
        {/*<StateExample/>*/}
        {/*<FormDeneme/>*/}

    </div>
  );
}

export default App;
