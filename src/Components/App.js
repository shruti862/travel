import { useState } from "react";
import Logo from "./Logo"
import Form from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";
function App() {
  const [items,setItems]=useState([]);
  
  function handleNewItem(item){
    setItems((items)=>([...items,item]));
  }
  function handleDeletedItem(id){
    setItems((items)=>items.filter((item)=>(item.id!==id)));
  }
  function handleToggleItem(id){
    setItems((items)=>items.map((item)=>item.id===id?{...item,packed: !item.packed}: item))
  }
  return (
   <div className='app'>
    <Logo/>
    <Form onAddItem={handleNewItem}/>
    <PackingList items={items} onDeleteItem={handleDeletedItem} onToggleItem={handleToggleItem} setItems={setItems}/>
    <Stats items={items}/>
   </div>
  );
}


export default App;
