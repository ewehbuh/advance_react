import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
 const[people, setPeople]=useState(data)
 const removeItem=(id)=>{
  setPeople(people.filter((person)=>person.id !==id))
 };
 const clearAllItems=()=>{
  setPeople([])
 }

  return (
    <div>
      {people.map((person)=>{
        const{id,name}=person
        return <div key={id}>
          <h1>{name}</h1>
          <button type="button" onClick={()=>removeItem(id)}>Remove</button>
          </div>
          
        
      })}
      <button type="button" style={{margin:'2rem'} }onClick={clearAllItems}>Rmove all items</button>
    </div>
  );
};

export default UseStateArray;
