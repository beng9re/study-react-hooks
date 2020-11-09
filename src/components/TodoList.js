import React from 'react';
import styled from 'styled-components';
import TodoItme from './TodoItem'



const TodlListBlock = styled.div`
    flex : 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    return <TodlListBlock>
        <TodoItme id={1} done={true} text={"할일"} />
        <TodoItme id={2} done={false} text={"할일"} />
    </TodlListBlock>
}


export default TodoList;