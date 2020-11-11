import React, { useReducer, createContext, useContext, useRef, useState } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 3,
    text: '프로젝트 생성하기',
    done: true
  }
];

const todoReducer = function(state,action){
    switch (action.type) {
        case "CREATE":
           return state.concat(action.todo);
        case "DELETE":
            // return state.filter((item)=>{item.id != action.id})
            console.log("DELETE")
            return  state.filter((item)=> item.id !== action.id);
        case "TOOGLE":
            
            return  state.map((item)=>{
                    if(item.id === action.id){
                        item.done = !item.done
                    }
                    return item;
                })
            
    
        default:
            break;
    }

}

// 컨텍스트를 생성
const TodoStateContext = createContext();
const TodoDispatch = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state,dispatcher] = useReducer(todoReducer,initialTodos);
    const nextId = useRef(initialTodos.length+1);

    return <TodoStateContext.Provider value={state}>
            <TodoDispatch.Provider value={dispatcher}>
                <TodoNextIdContext.Provider value ={nextId}>
                 {children}
                 </TodoNextIdContext.Provider>
            </TodoDispatch.Provider>
        </TodoStateContext.Provider>
    
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    //컨텍스트가 없을때 에러를 발생 
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
  }
  
export function useTodoDispatch() {
    const context = useContext(TodoDispatch);
    if (!context) {
        throw new Error('Cannot find useTodoDispatch');
    }
    return context;
}
export function useNextIdContext() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find useNextIdContext');
    }
    return context;
}