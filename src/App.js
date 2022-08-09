
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import UploadPage from './pages/UploadPage'
import Navbar from './components/Navbar';

const RoutesContainer = styled.div`

`
function App() {
  return (
    
    <div className="App">
      
      <Navbar/>
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
