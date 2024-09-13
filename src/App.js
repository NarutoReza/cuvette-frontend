import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import Dashboard from './Components/Admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navebar />}>
          <Route index element={<Home />} />

          {/* admin pages */}
          <Route path='/admin-dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
