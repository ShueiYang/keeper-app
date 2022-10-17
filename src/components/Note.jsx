import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from "@mui/material";

const Note = ({Notes, deleteNote}) => {
        
    return (
        <>
            { Notes.map((note, index) => {
                return (
                    <div className="note" key={index}>    
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                        <button onClick={()=> {deleteNote(index)}}>
                            <Tooltip title="Delete">
                              <DeleteIcon />  
                            </Tooltip>
                        </button>
                    </div>
                )
              })
            }
        </>
                
    ) 
}

export default Note;
                   
        