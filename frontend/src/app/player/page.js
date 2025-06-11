'use client';
import { useState, useRef, useEffect } from "react";
import YTPlayer from './ytplayer'
import './player.css'
export default function App() {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ");
  const handlePlay = () => {
      setPlaying(!isPlaying);
      {/*
        if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
      */}
  } 

   
  return (
    <div className="wrapper">
    <img src={isPlaying ? "/images/cassette.gif" : "/images/cassette.png"} alt="Cassette" className="cassette-img" />
    <button onClick={handlePlay} className="play-button"></button>

    <YTPlayer videoId={videoId} play={isPlaying} />
    {/* <audio ref={audioRef} src="/songs/song.mp3" /> */}
    </div>
)}