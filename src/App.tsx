import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 const [colorname, setcolorName] = useState('');
 const [changecolore, setChangeColor] = useState('');
//  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
   
//     const enteredName = event.target.value;
//     setcolorName(enteredName);
//     setChangeColor(enteredName)
//   }
  return (
    <div className="App">
      
      <h1>Vite + React</h1>
      <div style={{backgroundColor:changecolore,width:'230px',height:'230px'}} >
      {colorname==''?'empty value':colorname}
      </div>
      <div style={{alignItems:'center',marginLeft:'-60px'}}>
      <input type='text'  value={colorname}  onChange={(event)=>{setcolorName(event.target.value);
         setChangeColor(event.target.value)}} placeholder='enter color name' style={{backgroundColor:'white',}}/>
     </div>
    </div>
  )
}

export default App
