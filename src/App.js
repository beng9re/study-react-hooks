import Button from './components/Button'
import styled,{css} from 'styled-components'
import './App.scss';


const Cycle = styled.div`
  width: 5rem;
  height: 5rem;
  background : ${(props)=> props.color || 'black'};
  border-radius : 50%;
  ${props=> props.huge && css`width :10rem; height: 10rem`}
  `;



function App() {
  return (
    <div className="App">
      <Cycle color="red"/>
      <Cycle color="yellow"/>
      <Cycle color="blue"/>
      <Cycle color="" huge/>
      {/* <div>
        <Button size="medium">BUTTON</Button>
        <Button size="large" color="pink">BUTTON</Button>
        <Button size="small" color="gray" outline>BUTTON</Button>
      </div>

      <div>
        <Button size="medium">BUTTON</Button>
        <Button size="large" color="pink" layout={{"fullWidth":true,"outline":true}} onClick={()=>console.log("PINK")}>BUTTON</Button>
        <Button size="small" color="gray" outline>BUTTON</Button>
      </div> */}
      
    
    </div>
  );  
}

export default App;
