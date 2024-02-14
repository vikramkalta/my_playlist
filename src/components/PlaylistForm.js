import React, { useState, useEffect, useRef } from "react";

function PlaylistForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.trackUrl : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({ trackUrl: input, _id: props.edit?._id });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="playlist-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update track"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="playlist-input edit"
          />
          <button onClick={handleSubmit} className="playlist-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a track"
            value={input}
            onChange={handleChange}
            name="text"
            className="playlist-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="playlist-button">
            Add track
          </button>
        </>
      )}
    </form>
  );
}

export default PlaylistForm;
