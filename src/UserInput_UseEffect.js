import React,{useRef,useState} from 'react';




function User({userInfo}) {

    return  <div>
        <label>ID : </label>{userInfo.id}
        <label>PW : </label>{userInfo.pw}
        <button>삭제</button>
    </div>   
}

function UserList({userList}){

    return <div>
        {userList.map(userInfo => 
            <User 
                key={userInfo.key}
                userInfo={userInfo}/>
            )}
    </div>
     
}

function CreateUser({onChange,onAdd,inputs}) {
  
    return <>
    <label>ID </label><input name="id" onChange={onChange} value={inputs.id}></input>
    <label> PW </label><input name="pw" onChange={onChange} value={inputs.pw}></input>
    <button onClick={onAdd}>추가</button>
    </>
    
}


function UserInputUseEffect(){
    const [inputs, setInputs] = useState({
        id: '',
        pw: ''
    });

    const [userList,setUserList] = useState([]);
    const cuurentKey = useRef(0);

    const createUserOnChange = (e) =>{
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const createUserOnAdd = (e) => {
        const userInfo = {
            id : inputs.id,
            key : cuurentKey.current,
            pw : inputs.pw
        }
        
        setUserList([...userList,userInfo]);
        setInputs({
            id: '',
            pw: ''
        })
        cuurentKey.current += 1;

    }
 


    return <div>
        <CreateUser onChange={createUserOnChange} onAdd={createUserOnAdd} inputs={inputs} />
        <UserList userList={userList} ></UserList>
    
    </div>
}



export default UserInputUseEffect;