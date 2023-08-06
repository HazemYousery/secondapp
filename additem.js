import './App.css';

import React  from "react";
const AddItem=(state)=>{
const {handlechange,handleSubmit} = state;





    return (
      <div key="items.id" className='adding_item'>
 <form type="submit" onSubmit={handleSubmit}>


 <input type="text" placeholder="enter name" onChange={handlechange} id="name"/>
 <input type="number" placeholder="enter age" onChange={handlechange} id="age" />  
   <input type="submit" placeholder="submit" />

 </form>
 </div>
 
)
}

export default AddItem;
