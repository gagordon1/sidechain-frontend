
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import UploadPage from './pages/UploadPage'
import Navbar from './components/Navbar';
import { ethers } from "ethers";
import { useWeb3React } from '@web3-react/core';
import {useState, useEffect} from 'react'

const RoutesContainer = styled.div`

`
function App() {

    
  const [account, setAccount] = useState("")
  const context = useWeb3React();
  const { library, active } = context;

  const [signer, setSigner] = useState();

  useEffect(() => {
    if (!library) {
      setSigner(undefined);
      return;
    }

    setSigner(library.getSigner());
  }, [library]);

  return (
    
    <div className="App">
      <Navbar 
        account={account} 
        setAccount={setAccount}/>
      <RoutesContainer>
        <Router className="Router">
          <Routes>
            <Route path="/upload" element={<UploadPage/>}/>
          </Routes>
        </Router>
      </RoutesContainer>
    </div>
  );
}

export default App;
