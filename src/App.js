import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import Dashboard from './Components/Admin/Dashboard';
import Students from './Components/Admin/Students';
import AddStudent from './Components/Admin/AddStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navebar />}>
          <Route index element={<Home />} />

          {/* admin pages */}
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/admin-students' element={<Students
           />} />
           <Route path='/admin-add-student' element={<AddStudent
            />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
