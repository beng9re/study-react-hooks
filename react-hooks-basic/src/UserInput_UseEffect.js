import React,{useRef,useState,useEffect,useMemo,useCallback} from 'react';

const User = React.memo(({userInfo,deleteUser}) => {
    
    // 컴포넌트가 생기고 난 직후  
    useEffect(()=> {
        console.log(`userInfo.id :: ${userInfo.id} CREATE `);
        return () =>{
               //컴포넌트가 클리어 될때
               console.log(`USER CREAR `,userInfo)
        }
    },[])

    return  <div>
        <label>ID : </label>{userInfo.id}
        <label>PW : </label>{userInfo.pw}
        <button onClick={()=>deleteUser(userInfo.id)}>삭제</button>
    </div>   
}); 

const UserList = React.memo(({userList,deleteUser}) => {
    // 컴포넌트가 생기고 난 직후  
     // 컴포넌트가  변경될때 
     useEffect(()=> {
        console.log('userList ::' ,userList, 'ALTER');
        return () => {
         
        }
    },[userList])

    useEffect(()=>{
        console.log("리랜더링이 될때마다 실행")
    })
    

    return <div>
        {userList.map(userInfo => 
            <User 
                key={userInfo.key}  
                userInfo={userInfo}
                deleteUser= {deleteUser}/>
            )}
    </div>
});

const CreateUser = React.memo(({onChange,onAdd,inputs}) => {
    
    return <>
    <label>ID </label><input name="id" onChange={onChange} value={inputs.id}></input>
    <label> PW </label><input name="pw" onChange={onChange} value={inputs.pw}></input>
    <button onClick={onAdd}>추가</button>
    </>
    
});

function userRegLengt(userList) {
    console.log("실행");
    return userList.length;
};




function UserInputUseEffect(){

    const [inputs, setInputs] = useState({
        id: '',
        pw: ''
    });

    const [userList,setUserList] = useState([]);
    const cuurentKey = useRef(0);

    //const count = userRegLengt(userList);
    const count = useMemo(()=>userRegLengt(userList),[userList]);
    

    const createUserOnChange = useCallback((e)=>{
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    },[inputs]);

    const createUserOnAdd = useCallback((e) => {
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

    },[userList,inputs]);
   
    const deleteUser = useCallback((id)=>{
        setUserList(userList.filter((user) => user.id !== id));
    },[userList]);

    return <div>
        <CreateUser onChange={createUserOnChange} onAdd={createUserOnAdd}  inputs={inputs}/>
        <UserList userList={userList} deleteUser={deleteUser} ></UserList>
        <div><label>활성상태</label>{count}</div>
    
    </div>
}



export default React.memo(UserInputUseEffect);