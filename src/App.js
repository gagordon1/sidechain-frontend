
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import FeedPage from './pages/FeedPage';
import UploadPage from './pages/UploadPage'
import ArtworkPage from './pages/ArtworkPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import { Heading2 } from './components/TextComponents';
import {useState} from 'react'

const RoutesContainer = styled.div`

`
function App() {

  const [account, setAccount] = useState("")

  return (
    
    <div className="App">
      <RoutesContainer>
        <Router className="Router">
          <Navbar 
            account={account}
            setAccount={setAccount}/>
          <Routes>
            <Route path="/" element={<FeedPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/artwork/:contractAddress" element={<ArtworkPage/>}/>
            <Route path="/upload" element={
              <div>
                {
                account? <UploadPage
                  account={account}
                />
                :
                <Heading2>Connect wallet to upload to sidechain</Heading2>
              }
              </div>
              
              }
            />
          </Routes>
        </Router>
      </RoutesContainer>
      <audio id="audio"/>
    </div>
  );
}

export default App;
