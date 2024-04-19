import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
//import notes from './notes';
import CreateArea from './components/CreateArea';
import { useState } from 'react';



function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
   setNotes(preNotes => {
   return [...preNotes, newNote];
   })
  }

  function deleteNote(id){
    setNotes(preNotes => {
     return preNotes.filter((noteItem, index) => {
      return index !== id;
     })
    })
  }

  function editNote(id){
    
  }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd = {addNote}
      />
      {notes.map((noteItem, index) =>{
        return <Note
        key = {index}
        id = {index}
        title = {noteItem.title}
        description = {noteItem.content}
        onDelete = {deleteNote}
        onEdit = {editNote}/>
      })
      }
      <Footer />
    </div>
  );
}

export default App;
