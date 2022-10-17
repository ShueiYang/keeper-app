import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Tooltip, Zoom } from "@mui/material";


const CreateArea = ({addNote}) => {

const [open, setOpen] = useState(false);

    const clickInsideTextArea = ()=> {
        setOpen(true);
    }

    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setNote(prevState => {
            return {
                ... prevState,
                [name]: value
            }
        })
    }

    const submitNote = (event) => {
        event.preventDefault();
        addNote(note);
        setNote({
            title: "",
            content: ""    
        })
    }
      
    return (
        <div>
          <form className="create-note">
            {open && <input name="title" 
                placeholder="Title"
                onChange= {handleChange}
                value={note.title} 
                /> }
            <textarea name="content"
                 placeholder="Take a note..." 
                 rows={open ? "3" : "1"} 
                 onChange= {handleChange}
                 value={note.content}
                 onClick={()=> clickInsideTextArea()} 
                 />
            <Zoom in={open ? true : false}>
                <Fab onClick={submitNote}>
                    <Tooltip title="Add note">
                        <AddIcon />  
                    </Tooltip>
                </Fab> 
            </Zoom>
          </form>
        </div>
    );
}

export default CreateArea;    
              
          