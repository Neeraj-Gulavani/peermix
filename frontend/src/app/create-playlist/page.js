
export default function Create(){
    return(
        <>
        <div className="container">
            <h3>Go back</h3>
        </div>
        <h1 style={{fontSize: '50px'}}>Create Playlist</h1>
        <h2>Playlist Name: </h2>
        <input type='text' placeholder="Enter Playlist Name" className="Input-field-text"/>
        <h2>Playlist Cover Photo: </h2>
        <input type='text' placeholder="Enter Image URL" className="Input-field-text"/>
        <h2>OR</h2>
        <h2>upload from device</h2>
        </>
    );
}