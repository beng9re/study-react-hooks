import React, { useRef, useState } from 'react';
import TodoList from './TodoList';


function Todos({onCreate,todos,onToggle}) {
    const [text,setText] = useState("");
    const onChange = e => {
        setText(e.target.value)    
    }

    const onClick = e =>{
        onCreate(text);
        setText("");
    }

    return (
        <>
            <div>
                <label>할일</label>
                <input onChange={onChange} value={text}></input>
                <button onClick={onClick}>등록</button>
            </div>
            <TodoList todos={todos} onToggle={onToggle} ></TodoList>
        </>
    )
}

export default Todos;