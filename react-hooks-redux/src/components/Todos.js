import React, { useRef, useState } from 'react';


function Todos({onCreate}) {
    const [text,setText] = useState("");
    const onChange = e => {
        setText(e.target.value)    
    }

    const onClick = e =>{
        onCreate(text);
        setText("");
    }

    return (
        <div>
            <label>할일</label>
            <input onChange={onChange} value={text}></input>
            <button onClick={onClick}>등록</button>
        </div>
    )
}

export default Todos;