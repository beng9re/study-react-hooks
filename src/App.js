import Button from './components/Button'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <Button size="medium">BUTTON</Button>
        <Button size="large" color="pink">BUTTON</Button>
        <Button size="small" color="gray" outline>BUTTON</Button>
      </div>

      <div>
        <Button size="medium">BUTTON</Button>
        <Button size="large" color="pink" layout={{"fullWidth":true,"outline":true}} onClick={()=>console.log("PINK")}>BUTTON</Button>
        <Button size="small" color="gray" outline>BUTTON</Button>
      </div>
      
    
    </div>
  );  
}

export default App;
