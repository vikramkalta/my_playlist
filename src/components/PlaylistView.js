import React, {useEffect, useState} from 'react';
import PlaylistForm from './PlaylistForm';
import Playlist from './Playlist';
import TrackService from '../services/Track';

function PlaylistView() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    try {
      const result =  await TrackService.getTracks();
      setPlaylist(result);
    } catch (error) {
      console.log('Error in fetching tracks', error);
    }
  };

  const addTrack = async track => {
    if (!track.trackUrl) {
      return;
    }
    try {
      const newTrack = await TrackService.createTrack(track); 
      const newPlaylist = [newTrack, ...playlist];
      setPlaylist(newPlaylist);
    } catch (error) {
      console.log('Error in adding tracks', error);
    }
  };

  const updateTrack = async (newValue) => {
    if (!newValue.trackUrl) {
      return;
    }
    try {
      await TrackService.updateTrack(newValue);
      
      setPlaylist(prev => prev.map(item => item._id === newValue?._id ? newValue : item));
    } catch (error) {
      console.log('Error in updating track', error);
    }
  };

  const removeTrack = async id => {
    try {
      await TrackService.deleteTrack(id);
      const removedArr = [...playlist].filter(item => item._id !== id);
      setPlaylist(removedArr);
    } catch (error) {
      console.log('Error in deleting track', error);
    }
  };

  const playTrack = id => {
    let updatedPlaylist = playlist.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setPlaylist(updatedPlaylist);
  };

  return (
    <>
      <h1>Enter a track</h1>
      <PlaylistForm onSubmit={addTrack} />
      <Playlist
        playlist={playlist}
        playTrack={playTrack}
        removeTrack={removeTrack}
        updateTrack={updateTrack}
      />
    </>
  );
}

export default PlaylistView;
