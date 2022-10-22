import { Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/About/AboutPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import HomePage from './Pages/Home/HomePage';

function App() {
  return (
    
    <div className="App">
      <Grid container justifyContent="center">
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/prtfl' exact element={<HomePage/>} />

        <Route  path='/dashboard' element={<AdminPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      </Grid>     
    </div>
  );
}

export default App;
