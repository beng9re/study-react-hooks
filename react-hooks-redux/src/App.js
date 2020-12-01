import './App.css';
import CounterContainer from './containers/ConterContainer';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <>
      <div>
          <CounterContainer></CounterContainer>
      </div>
      <br></br>
      <div>
        <TodoContainer></TodoContainer>
      </div>
    </>
  );
}

export default App;
