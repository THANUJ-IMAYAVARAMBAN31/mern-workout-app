import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepagey';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
