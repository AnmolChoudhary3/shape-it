import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Game from './pages/Game';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
    	<Routes>
		    <Route exact path='/' element={<Landing/>} />
		    <Route exact path='/game' element={<Game/>} />
		    <Route exact path='/result' element={<Result/>} />
        

		  </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
