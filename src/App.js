import { Grid } from '@mui/material';
import './App.css';
import HomePage from './Pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Grid container justifyContent="center">
      <HomePage></HomePage> 
      </Grid>     
    </div>
  );
}

export default App;
