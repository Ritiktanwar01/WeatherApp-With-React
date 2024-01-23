import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routes >
            <Route path='' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;