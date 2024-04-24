import './App.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import note from '../note'



export default function App() {
  return (
    <div>
<Header />
   {
     note.map( noteItem =>(
  <Notes 
    key={noteItem.key}
    title={noteItem.title} 
    content={noteItem.content} 
    />
     )
   )
   }
<Footer />
    </div>
  );
}
