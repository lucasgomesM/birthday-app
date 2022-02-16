import {bdays} from './data';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <List/>
    </div>
  );
}

function List() {
  const [people, setPeople] = React.useState(bdays);
  const clearItems = () => {
      setPeople([]);
  }
  return <section className='list'>  
      <h1> {people.length} Birthdays!</h1>  

      {people.map((person) => {
        const {id,name,age,img,msg} = person;
        return <>
        
        <div key={id} className='item'>
          <img src={img} alt={name} className='image'/>
          <h3 className='itemAtr'> {name}, {age} years</h3>   
           <h4 className='itemMsg'>{msg}</h4>         
          
          </div>          
          
           
         
          
        </>
    })}
    <button className='btn' onClick={() => clearItems()}>Clear People</button>
  </section>
}

export default App;
