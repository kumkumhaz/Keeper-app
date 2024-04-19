import React from "react";

function Note(props) {

   function handleDelete(){
     props.onDelete(props.id);
   }

   function handleEdit(){

   }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handleEdit}>EDIT</button>
    </div>
  );
}

export default Note;
