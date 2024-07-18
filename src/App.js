import logo from './logo.svg';
import "./App.css"
import Login from './components/Login';
import Earth from './components/Earth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/Earth' element={<Earth />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
