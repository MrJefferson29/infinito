import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Cattle from './Components/Cattle';
import Home from './Components/Home';
import Horses from './Components/Horses';
import Sheep from './Components/Sheep';
import Footer from './Components/Footer';
import About from './Components/About';
import Team from './Components/Team';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/store' element={<Cattle />} />
        <Route exact path='/horses' element={<Horses />} />
        <Route exact path='/sheep' element={<Sheep />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/meet-the-team' element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
