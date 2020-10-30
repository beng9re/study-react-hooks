# _React Hooks_
* [Counter_UseState.js](https://github.com/kbh0581/react-hooks/blob/main/src/Counter_UseState.js) : React Componet State 내용 
    > 컴포넌트의 상태 관리   
    > :: UseState()
* [UseInput_UseRef](https://github.com/kbh0581/react-hooks/blob/main/src/UserInput_UseRef.js) : React Dom variable
    > 컴포넌트내의 Dom 선택자  
    > 리랜더링하지 않을 데이터를 기록 할수도 있음  
    > UseRef() => ref.current 현재 값 

* [UserInputUseEffect](https://github.com/kbh0581/react-hooks/blob/main/src/UserInput_UseEffect.js) :: Hooks hooks lifecycle  
    * componentDidmount :: 컴포넌트가 처음 마운트 될때 
     <pre>
       //빈배열 사용
        useEffect(function(){},[])
     </pre>
    * componentWillUnmount :: 컴포넌트가 언마운트 될때 (사라질떄)
     <pre>
        useEffect(function(){
            return cleanUp(){
                 /*이부분 작성*/
            }
     },[])
     </pre>
    
    * componentDidUpdate :: 파라미터가 업데이트 될때    
     <pre>
        useEffect(function(){
            return cleanUp(){
                 /*이부분 작성*/
            }
     },[state])
     </pre>