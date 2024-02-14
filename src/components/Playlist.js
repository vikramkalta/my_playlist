import React, { useState } from "react";
import PlaylistForm from "./PlaylistForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Playlist = ({ playlist, playTrack, removeTrack, updateTrack }) => {
  const [edit, setEdit] = useState(null);
  const submitUpdate = (track) => {
    updateTrack(track);
    setEdit({ _id: null, trackUrl: "" });
  };

  if (edit?._id) {
    return <PlaylistForm edit={edit} onSubmit={submitUpdate} />;
  }

  return playlist.map((track, index) => (
    <div
      className={track.isComplete ? "playlist-row complete" : "playlist-row"}
      key={index}
    >
      <div key={track._id} onClick={() => playTrack(track._id)}>
        {track.trackUrl}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTrack(track._id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit(track)}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Playlist;
