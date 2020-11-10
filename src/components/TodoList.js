import React from 'react';
import styled from 'styled-components';
import TodoItme from './TodoItem'
import {useTodoState} from '../TodoContext'


const TodlListBlock = styled.div`
    flex : 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    const todoList = useTodoState();
    
    return <TodlListBlock>
            {todoList.map((todoItem) => <TodoItme key={todoItem.id}
                                        id = {todoItem.id}   
                                        done={todoItem.done} 
                                        text={todoItem.text} />)}
    </TodlListBlock>
}


export default TodoList;