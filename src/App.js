import ButtonStyled from './components/ButtonStyled';
import styled,{createGlobalStyle, css} from 'styled-components';
import TodoTemplate from './components/TodoTaplete'; 
import TodoHeader from './components/TodoHeader'; 
import TodoList from './components/TodoList'; 

import './App.scss';


// const Cycle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background : ${(props)=> props.color || 'black'};
//   border-radius : 50%;
//   ${props=> props.huge && css`width :10rem; height: 10rem`}
//   `;


const GlbalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }

`

function App() {

  return <>
    <GlbalStyle/>
    <TodoTemplate>
      <TodoHeader></TodoHeader>
      <TodoList></TodoList>
    </TodoTemplate>
    
  </>
  
}




// function App() {
//   return (
//     <div className="App">
//       {/* <Cycle color="red"/>
//       <Cycle color="yellow"/>
//       <Cycle color="blue"/>
//       <Cycle color="" huge/> */}

//       <ButtonStyled>버튼 1</ButtonStyled>
//       {/* <div>
//         <Button size="medium">BUTTON</Button>
//         <Button size="large" color="pink">BUTTON</Button>
//         <Button size="small" color="gray" outline>BUTTON</Button>
//       </div>

//       <div>
//         <Button size="medium">BUTTON</Button>
//         <Button size="large" color="pink" layout={{"fullWidth":true,"outline":true}} onClick={()=>console.log("PINK")}>BUTTON</Button>
//         <Button size="small" color="gray" outline>BUTTON</Button>
//       </div> */}
      
    
//     </div>
//   );  
// }

export default App;
