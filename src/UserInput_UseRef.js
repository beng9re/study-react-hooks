import React,{useRef,useState} from 'react';


function User({user}) {
    return <div>
            <span>
                <label> name :</label> "{user.username}"
            </span>
            <span>
                <label> email :</label> "{user.email}"
            </span>
        </div>
}



function UserList({users}) {
  
    return users.map((user)=><User key={user.id} user={user}></User>) 
    
}

function UseInput_UseRef(){
    
   
    const users = [
        {
          id: 1,
          username: 'kim',
          email: 'kims@gmail.com'
          
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

    const [userinfo,setUserInfo] = useState(users);
    const [inputs,setInputs] = useState({userName:'',email:''})
    const nextId = useRef(users.reduce((prev,next)=>next.id+1));

    /* useRef는 불변한데이터를 담을때 사용 랜더링이 안되겠끔 및 특정돔을 선택할때 사용함*/

    const onChange = (e) =>{
        const {name,value} = e.target;
        setInputs({...inputs,[name]:value});
    }


    const onCreate = () => {
        //console.log(inputNameDom.current.value = "");

        
        setUserInfo([...userinfo,
                        {id:nextId.current,
                            username:inputs.username,
                            email:inputs.email}]);
        setInputs({username:"",email:""}); 
                           
        nextId.current += 1;
        
    }

    return (
        <div>
        <UserList users={userinfo}></UserList> 
        <label>username:</label> <input onChange={onChange} value={inputs.username} name="username"></input> 
        <label>email:</label> <input onChange={onChange} value={inputs.email} type="email" name="email"></input> 
        <button  onClick={onCreate}>ADD</button>
        </div>
    )
    

};




export default UseInput_UseRef;
