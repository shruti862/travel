import { useState } from "react";
export default function Form({onAddItem}){
    const [description,setDescription]=useState("");
    const [quantity,setQuantity]=useState(1);
   
    function handleSubmit(e){
      e.preventDefault();
      const newItem={quantity,description,id:Date.now(),packed:false}
      console.log(newItem);
      setQuantity(1);
      setDescription("");
       onAddItem(newItem);
  }
    return(
      <form className='add-form' onSubmit={handleSubmit}> <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e)=>{setQuantity(Number(e.target.value))}}>
       {Array.from({length:20},(_,i)=>(i+1)).map((num)=>(<option value={num} key={num}>{num}</option>))}
      </select>
      <input type="text" placeholder="item..." value={description} onChange={(e)=>{
        setDescription(e.target.value);}}/>
       <button>ADD</button>
      </form>
    );
  }