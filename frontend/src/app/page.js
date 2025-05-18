'use client'
import { useRouter } from "next/navigation";
import './Globals.css';
export default function Home() {
  const router=useRouter();
  const go_to_create_playlist=()=>{
    router.push('/create-playlist');
  }
  return (
    <>
    <div className="container">
      <h3 className="Current">Home</h3>
      <h3>About</h3>
      <h3>Account</h3>
    </div>
    <div className="Title">
      <h1>PEERMIX</h1>
      <h2>Create Playlists for friends with friends</h2>
      <button className="animated-button" onClick={go_to_create_playlist}>
        <span>
          Create Playlist +
        </span>
        <span></span>
      </button>
      <button className="animated-button">
        <span>
          Join Playlist
        </span>
        <span></span>
      </button>
      <button className="animated-button">
        <span>
          Create account
        </span>
        <span></span>
      </button>
    </div>
</>
);
}