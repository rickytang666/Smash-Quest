import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Your routes will go here later */}
      </div>
    </Router>
  );
}

export default App;