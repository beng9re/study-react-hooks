import React,{useRef,useState} from 'react';



const users = [
    {
      id: 1,
      username: 'kim',
      email: 'kims@gmail.cxom'
      
    },
    { 
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
];


function User({user,onRemove,onToggle}) {
    return <div>
            <span>
                <label style={{
                    cursor:'pointer',
                    color : user.active ? 'green' : 'black'
                    }}
                 onClick = {() => {
                    console.log(user.id)
                    onToggle(user.id)
                }}
                > name :</label> "{user.username}"
            </span>
            <span>
                <label> email :</label> "{user.email}"
            </span>
            <button onClick={() => onRemove(user.id)} value="삭제">삭제</button>
        </div>
}

function UserList({users,onRemove,onToggle}) {
      return users.map((user)=><User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle}></User>) 
}

function UseInput_UseRef(){
    
    const [userinfo,setUserInfo] = useState(users);
    const [inputs,setInputs] = useState({userName:'',email:''})
    const nextId = useRef(users.reduce((prev,next)=>next.id+1));
    /* useRef는 불변한데이터를 담을때 사용 랜더링이 안되겠끔 및 특정돔을 선택할때 사용함*/

    const onChange = (e) =>{
        const {name,value} = e.target;
        setInputs({...inputs,[name]:value});
    }

    const onRemove = id => {
        setUserInfo(userinfo.filter((user) => user.id !== id));
    };  

    const onToggle = id => {
        setUserInfo(userinfo.map((user)=>{
            user.active = user.id === id 
            return user;
            
        }));
    };


    const onCreate = () => {
        //console.log(inputNameDom.current.value = "");
        if(!inputs.username || !inputs.email) return;
        
        setUserInfo([...userinfo,
                        {id:nextId.current,
                            username:inputs.username,
                            email:inputs.email,
                            active:false
                        }]);
        setInputs({username:"",email:""}); 
                           
        nextId.current += 1;
        
    }

    return (
        <div>
        <UserList users={userinfo} onRemove={onRemove} onToggle={onToggle}></UserList> 
        <label>username:</label> <input onChange={onChange} value={inputs.username} name="username"></input> 
        <label>email:</label> <input onChange={onChange} value={inputs.email} type="email" name="email"></input> 
        <button  onClick={onCreate}>ADD</button>
        </div>
    )
    

};




export default UseInput_UseRef;
