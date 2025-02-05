import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login message='Leandro' />} />
    </Routes>
  );
}

export default App
