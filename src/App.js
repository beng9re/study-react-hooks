 import './App.css';
 import Counter_UseState from './Counter_UseState'
 import TitleSeperater from './TitleSeperater'
 import UserInput_UseRef from './UserInput_UseRef'
 import UserInput_UseEffect from './UserInput_UseEffect'



function App() {
  return (
    <div>
      {/* <TitleSeperater title="useState"/>
      <Counter_UseState props_number={1} makeby={"kims"}/>
      <TitleSeperater/> */}

      {/* <TitleSeperater title="useRef"/>
      <UserInput_UseRef/>
      <TitleSeperater/> */}
        <TitleSeperater title="useEffect"/>
      <UserInput_UseEffect/>
      <TitleSeperater/>



      <br/>
      <hr/>


    </div>
  );
}

export default App;
