import React, { useState } from "react";
import CreateArea from "./components/CreateArea ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";



function App () {

    const [noteList, setNoteList] = useState([
        {
          title: "Delegation",
          content: "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"  
        },
        {
            title: "Hardware vs. Software",
            content: "Q. What's the difference between hardware and software? A. You can hit your hardware with a hammer, but you can only curse at your software." 
        },
        {
            title: "Arrays",
            content: "Q. Why did the programmer quit his job? A. Because he didn't get arrays."  
        }
    ]);

    const addNote = (note) => {
        setNoteList((prevList) => {
            return [...prevList, note]
        })
    }

    const removeNote = (id) => {
        setNoteList((prevList) => {
            return prevList.filter((note, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea addNote={addNote}/>
            <Note Notes={noteList}
                  deleteNote={removeNote}/>    
            <Footer/> 
        </div>
    
    )

}
export default App;         
