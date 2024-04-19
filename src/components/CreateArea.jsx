import React, { useState } from "react";

function CreateArea(props) {

    const [note , setNote] = useState({
        title: "",
        content: ""
    });

//   const [title, setTitle] = useState();


   function handleClick(event){
    props.onAdd(note);
    setNote({
        title: "",
        content: ""
    });
    event.preventDefault();

   }
  function handleOnhange(event){
    const {name, value} = event.target;
    setNote(preNote => {
        return {
            ...preNote,
            [name]: value
        };
    })
  }

  return (
    <div>
      <form>
        <input 
          onChange={handleOnhange} 
          name="title" 
          value ={note.title} placeholder="Title" />
        <textarea 
          onChange={handleOnhange} 
          name="content" 
          value = {note.content
          } placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
