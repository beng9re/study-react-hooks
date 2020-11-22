import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div>
    <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">상세</Link>
        </li> 
    </ul>
    {/* exact 단일 경로 설정  */}
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default App;
