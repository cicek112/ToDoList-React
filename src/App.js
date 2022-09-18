
import { useState } from 'react';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import LightModeIcon from '@mui/icons-material/LightMode';
import './App.css';
import resim from './images/bg-desktop-dark.jpg'
import resim1 from './images/bg-desktop-light.jpg'

function App() {

  const [List,SetList]=useState([]);
  const [input,SetInput]=useState("");
  const [mode,setMode]=useState(true);



  function onay(todo){
   
    const newTodo={
      id:Math.random(),
      todo:todo,
      done:false,
    }

    SetList([...List,newTodo])
    SetInput("");
   
  }

  function deleteTodo(el){
    setTimeout(()=>{
      const newList = List.filter((todo) => todo.id !== el);
      SetList(newList)
    },100)
    
    
  }

  let x= List.length;

  let renk;

  if (mode===true){
    renk="white"
  }
  else{
    renk="black"
  }

  return (
    <div className={mode?"App":"App light1"}>
      <img src={mode? resim : resim1} className="img"></img>
      
      <div className='todo'>
        <div className='head'>
          <h1>TODO</h1>
          {mode ? <NightsStayIcon className='box' onClick={()=>{setMode(!mode)}} sx={{ fontSize: 45 }} ></NightsStayIcon> :<LightModeIcon  className='box' onClick={()=>{setMode(!mode)}} sx={{ fontSize: 40 }}></LightModeIcon>  }
          {/* <LightModeIcon sx={{ fontSize: 40 }}></LightModeIcon>  */}
         {/*  <NightsStayIcon sx={{ fontSize: 450 }}></NightsStayIcon>  */}
           
        </div>
        
        <div className='container'>
          <input  type="text" className='input' value={input} placeholder='enter to do'  onChange={(e) => SetInput(e.target.value)}>
          </input>
          <button className='buton' onClick={()=>{
            onay(input)
          }}>Submit</button>

        </div>
        
        
        <ul className="dutys">
          {List.map((todo) => (
            <>
              <div className={mode?"inner":"inner light"}>
                <li className='duty' key={todo.id}>
                    {todo.todo}
                </li>
                
                <Checkbox className='box'  sx={{ color:renk }}  onClick={() => deleteTodo(todo.id)}/>
                
              </div>
              <div className='cizgi'></div>
            </>
          ))}
          <div className='inner ort'>
                <li className='duty ort' >
                    Items Left: {x}
                </li>
          </div>
          
        </ul> 
      </div>
      


    </div>
  );
}

export default App;
