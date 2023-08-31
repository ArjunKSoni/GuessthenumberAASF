import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';
import Coordinate from './components/Coordinate';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/play' element={<Play />} />
        <Route exact path='/coordinate' element={<Coordinate />} />
      </Routes>
    </Router>
  );
}
export default App;
