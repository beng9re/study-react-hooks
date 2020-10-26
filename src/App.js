 import './App.css';
 import Counter_UseState from './Counter_UseState'
 import TitleSeperater from './TitleSeperater'
 import UserInput_UseRef from './UserInput_UseRef'



function App() {
  return (
    <div>
      <TitleSeperater title="useState"/>
      <Counter_UseState props_number={1} makeby={"kims"}/>
      <TitleSeperater/>

      <TitleSeperater title="useRef"/>
      <UserInput_UseRef/>
      <TitleSeperater/>


      <br/>
      <hr/>


    </div>
  );
}

export default App;
