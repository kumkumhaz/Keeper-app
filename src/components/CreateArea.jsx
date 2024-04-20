import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {


  const [isExpended, setExpended] = useState(false);

    const [note , setNote] = useState({
        title: "",
        content: ""
    });

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

  function expand(){
    setExpended(true);
  }

  return (
    <div>
      <form className="create-note">
       {isExpended &&(  <input 
          onChange={handleOnhange} 
          name="title" 
          value ={note.title} placeholder="Title" />
        )}
        <textarea 
          onClick = {expand}
          onChange={handleOnhange} 
          name="content" 
          value = {note.content} 
          placeholder="Take a note..." 
          rows= {isExpended ? 3 : 1}/>
       <Zoom in={isExpended}>
          <Fab onClick={handleClick}>
              <AddIcon/>
          </Fab>
       </Zoom>
       {/* {isExpended ?      <Zoom in={true}>
          <Fab onClick={handleClick}>
              <AddIcon/>
          </Fab>
       </Zoom> : null} 
       */}
      </form>
    </div>
  );
}

export default CreateArea;
