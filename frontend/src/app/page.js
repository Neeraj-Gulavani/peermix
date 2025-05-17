export default function Home() {
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
      <button className="animated-button">
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