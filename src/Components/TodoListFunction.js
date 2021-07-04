import {useState} from 'react';

export default function TodoListFunction(){
    const [data,setData] = useState([]); 
    const [list,setList] = useState("");


   const handleChange = (e)=> {
        setList(e.target.value);
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        let newData = data;
        if(list=="") return;
        newData.push(list);
        setData(newData);
    }

    const TodoList = (data) => {
        console.log("----",data);
        return data.data.map((item)=>(
            <li>{item}</li>
        ))
    }
    return (
        <div>
           <form>
               <label>
                   <h2>Add your todos..</h2>
               </label>
               <input 
               value={list} 
               onChange={handleChange}
               ></input>
               <button onClick={handleSubmit}>Add {data.length+1}</button>
           </form>
           <ul>
               <TodoList data={data}/>
               </ul>  
        </div>
    )
}