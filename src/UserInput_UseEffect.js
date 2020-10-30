import React,{useRef,useState,useEffect} from 'react';




function User({userInfo,deleteUser}) {
    console.log(deleteUser);
    
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
} 

function UserList({userList,deleteUser}){

    console.log(deleteUser)
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

    const deleteUser = id =>{

        setUserList(userList.filter((user) => user.id !== id));

        
    }


    return <div>
        <CreateUser onChange={createUserOnChange} onAdd={createUserOnAdd}  inputs={inputs}/>
        <UserList userList={userList} deleteUser={deleteUser} ></UserList>
    
    </div>
}



export default UserInputUseEffect;