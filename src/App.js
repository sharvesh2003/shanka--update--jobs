import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo,deleteToDo } from "./utils/HandleApi";
import App2 from "./App2";


function App() {

  const [toDo,setToDo] = useState([])
  const [text,setText] =useState("")
  const [isUpdating,setIsUpdating]=useState(false)
  const [toDoId,setToDoId]= useState("")


  useEffect(()=>{

    getAllToDo(setToDo)
  },[])

  const updateMode=(_id,text)=> {
     setIsUpdating(true)
     setText(text)
     setToDoId(_id)
  }


  return (
    <div className="App">
      <div className="container">
        <h1>Add/Update Jobs</h1>
        
        <div className="top">
          <input type="text" placeholder="Add " value={text} onChange={(e)=>setText(e.target.value)}/>

          <div className="add"
          onClick={isUpdating ? () => updateToDo(toDoId,text,setToDo,setText,setIsUpdating) : ()=> addToDo(text,setText,setToDo)}>
          {isUpdating ? "Update":"Add"}
          </div>
          </div>

          <div className="list">
            {toDo.map((item)=><ToDo
            key={item._id}
            text={item.text}
            updateMode={()=> updateMode(item._id,item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}

            />)}
            
          
        </div>
      </div>
      <App2/>
    </div>
  );
}

export default App;
