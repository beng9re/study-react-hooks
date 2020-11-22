import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

export default App;
