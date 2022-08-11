
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import UploadPage from './pages/UploadPage'
import ArtworkPage from './pages/ArtworkPage';
import Navbar from './components/Navbar';
import { Heading3 } from './components/TextComponents';
import {useState, useEffect} from 'react'

const RoutesContainer = styled.div`

`
function App() {

  const [account, setAccount] = useState("")
  const [provider, setProvider] = useState()


  useEffect(() =>{
    const prov = window.ethereum.providers.find((provider) => provider.isMetaMask)
    setProvider(prov)
  }, [])
  return (
    
    <div className="App">
      {account}
      <Navbar 
        provider={provider}
        account={account}
        setAccount={setAccount}/>
      <RoutesContainer>
        <Router className="Router">
          <Routes>
            <Route path="/artwork/:contractAddress" element={<ArtworkPage provider={provider}/>}/>
            <Route path="/upload" element={
              <div>
                {
                account? <UploadPage
                  account={account}
                  provider={provider}
                />
                :
                <Heading3>Connect wallet to upload to sidechain</Heading3>
              }
              </div>
              
              }
            />
          </Routes>
        </Router>
      </RoutesContainer>
    </div>
  );
}

export default App;
