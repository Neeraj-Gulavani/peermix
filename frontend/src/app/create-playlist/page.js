import './create_playlist.css'
export default function Create(){
    return(
        <div>

        <div className="container">
            <h3>Go back</h3>
        </div>
        <h1 style={{fontSize: '50px'}}>Create Playlist</h1>
        <div style={{display:'flex'}}>
                <div style={{width:'300px'}} >
                <h2>Playlist Name: </h2>
                <input type='text' placeholder="Enter Playlist Name" className="Input-field-text"/>
                <h2>Playlist Cover Photo: </h2>
                <input type='text' placeholder="Enter Image URL" className="Input-field-text"/>
                <h2>OR</h2>
                <h2>upload from device</h2>
                <input type="file" id="image" name="image" accept="image/*" className='Image-input'/>
                </div>

                <div className="card">
            <img src="https://placehold.co/600x400?text=Playlist\nCover" className="preview-img" />
            <h3>Playlist Name</h3>
            <button className="animated-button">Confirm</button>
            </div>
    </div>
        </div>

    );
}