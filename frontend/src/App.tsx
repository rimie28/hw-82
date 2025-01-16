import Artist from "./components/Artist.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Album from "./components/Album.tsx";
import Tracks from "./components/Tracks.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Artist/>}/>
                <Route path="/artists/:artistId" element={<Album/>}/>
                <Route path="/albums/:albumId" element={<Tracks/>}/>
            </Routes>
        </Router>
    )
}

export default App;