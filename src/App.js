import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
    	<Routes>
		    <Route exact path='/' element={<Landing/>} />
		    <Route exact path='/game' element={<Game/>} />
        

		  </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
