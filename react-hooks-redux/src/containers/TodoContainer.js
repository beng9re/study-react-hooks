import React,{useCallback} from 'react';
import Todos from '../components/Todos'
import {addTodo,toggleTodo} from '../modules/todos'
import {useSelector,useDispatch} from 'react-redux'


function TodoContainer(){
    
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
    const todos = useSelector(state => state.todos);
    //useSelector equalityFn
    console.log(todos);

    return <div>
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} ></Todos>
    </div>

}

export default TodoContainer;