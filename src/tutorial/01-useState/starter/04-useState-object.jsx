import { useState } from 'react';
import { data, person } from '../../../data';


const UseStateObject = () => {
 
  
  const[name,setName]=useState('Peter')
  const[age,setAge]=useState(24)
  const[hobby,setHobby]=useState('i Philosophy')

  const nextPerson=()=>{
setName('Emmanuel')
setAge(24)
setHobby('Coding')
  }
  return <>
<h2>{name}</h2>
<h2>{age}</h2>
<h2>{hobby}</h2>

<button type='button' className='btn' onClick={nextPerson}>Show</button>
  </>

};

export default UseStateObject;
