import './App.css';

import React from "react";
const ToDoList = (state)=>
{
  const{items,DeleteItem} = state;
                    const nam = items.map(item=>{
                    
                     
                  

return (
  <div key={item.id}>
     {item.name}
{item.age}
<div key={item.id}>
 <button onClick={()=>DeleteItem(item.id)} className='Btn'>DeleteBtn</button>
                      
                        </div>
  </div>
  
)
  } )
        
return (
  <div className='nam'>{nam}</div>
)
   
}

      export default ToDoList;
