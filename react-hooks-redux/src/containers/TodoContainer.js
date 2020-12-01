import React from 'react';
import Todos from '../components/Todos'
import {addTodo,toggleTodo} from '../modules/todos'
import {useDispatch} from 'react-redux'

function TodoContainer(){
    
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addTodo(text));

    return <div>
        <Todos onCreate={onCreate}></Todos>
    </div>

}

export default TodoContainer;