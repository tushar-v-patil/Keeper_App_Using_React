import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // it will pass the values into the props notes array
  function handleClick(event) {
    props.addNotes((prevNotes) => {
      return [...prevNotes, note];
    });

    // reset the entered notes
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        {/* type is defined as button to avoid reload */}
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
