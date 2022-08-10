
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import UploadPage from './pages/UploadPage'
import Navbar from './components/Navbar';
import {useState} from 'react'

const RoutesContainer = styled.div`

`
function App() {

  const [account, setAccount] = useState("")
  const [signer, setSigner] = useState();

  return (
    
    <div className="App">
      {account}
      <Navbar 
        account={account}
        setAccount={setAccount}
        setSigner={setSigner}/>
      <RoutesContainer>
        <Router className="Router">
          <Routes>
            <Route path="/upload" element={
              <UploadPage
                signer={signer}
              />}
            />
          </Routes>
        </Router>
      </RoutesContainer>
    </div>
  );
}

export default App;
