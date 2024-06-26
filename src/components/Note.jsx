import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Note(props) {

   function handleDelete(){
     props.onDelete(props.id);
   }

   function handleEdit(){
   props.onEdit(props.id);
   }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={handleDelete}>
        <DeleteIcon/>
      </button>
      <button onClick={handleEdit}>
        <EditIcon/>
      </button>
    </div>
  );
}

export default Note;
