import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

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
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li> 
    </ul>
    {/* exact 단일 경로 설정  */}
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}

export default App;
