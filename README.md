# _React Hooks_
* [Counter_UseState.js](https://github.com/kbh0581/react-hooks/blob/main/src/Counter_UseState.js) : React Componet State 내용 
    > 컴포넌트의 상태 관리   
    > :: UseState()
* [UseInput_UseRef](https://github.com/kbh0581/react-hooks/blob/main/src/UserInput_UseRef.js) : React Dom variable
    > 컴포넌트내의 Dom 선택자  
    > 리랜더링하지 않을 데이터를 기록 할수도 있음  
    > UseRef() => ref.current 현재 값 

* [UserInputUseEffect](https://github.com/kbh0581/react-hooks/blob/main/src/UserInput_UseEffect.js) :: Hooks hooks lifecycle && useMemo 
    * useEffect() :: 컴포넌트 라이프 사이클
        * 리랜더링  :: 리랜더링 될때마다 수행됨 // deps 생략시 
        <pre>
        //빈배열 사용
            useEffect(function(){});
        </pre>


        * componentDidmount :: 컴포넌트가 처음 마운트 될때 
        <pre>
        //빈배열 사용
            useEffect(function(){},[])
        </pre>
        * componentWillUnmount :: 컴포넌트가 언마운트 될때 (사라질떄)
        <pre>
            useEffect(function(){
                return cleanUp(){
                    /*이부분 작성*/
                }
        },[])
        </pre>
        
        * componentDidUpdate :: 파라미터가 업데이트 될때    
        <pre>
            useEffect(function(){
                return cleanUp(){
                    /*이부분 작성*/
                }
        },[state])
        </pre>
    * useMemo :: 컴포넌트의 이전 값을 기록하여 리랜더링 방지  
        첫번째인자 행위 함수, 두번째 인자 기록할 대상 값(배열)
        <pre>
            const count = useMemo(()=>userRegLengt(userList)
                             ,[userList])
        </pre>

    *  useCallback :: 함수의 메모라이제이션 하여 함수의 재생성을 방지 
        > Deps 부분은 해당 함수를 참조하는 변수를 꼭넣어줘야함 (state...)
        <pre>
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
        },[userList]);

    </pre>
    
    *   React.memo
        > 최상위 컴포넌트 리랜더링을 방지해줌
        
* UseReducer :: useState 다수의 상태를 변경할때 사용
    * [useReducer 1](https://github.com/kbh0581/react-hooks/blob/main/src/Counter_useReducer.js) :: 카운터 예
    * [useReducer 2](https://github.com/kbh0581/react-hooks/blob/main/src/UserInput_UseReducer.js) :: input 예제 
        <pre>
            /*초기값*/
            const initState = {
                inputs : {
                    id: '',
                    pw: '',
                },
                userList : []
            }
            /* 실재 함수 */
            function reducer(state,action) {
                switch (action.type) {
                    case 'createUserOnChange' : {   
                        return {
                            ...state,
                            inputs : {
                                ...state.inputs,
                            [action.name] : action.value
                            }
                        }
                    }
                    case 'ADD_TO_USER' : {
                        return {
                            inputs: initState.inputs,
                            userList: [...state.userList,action.userInfo],
                        }
                    }
                    case 'DELETE_TO_USER' : {
                        return {
                            ...state,
                            userList: action.userList 
                        }
                    }
                }
            }

            /*사용부*/
              const [state,dispatcher] = useReducer(reducer,initState);
              dispatcher({
                    type : 'ADD_TO_USER',
                    userInfo
              })
       
        </pre>
    *  Context API : 전역 변수 관리 
    
        ```
        //선언부
        export const UserDispatch = React.createContext(null);
        
        //소비자 
        <UserDispatch.Provider value={{dispatch:dispatcher,cuurentKey}}>
        <code>
        <div>
            <CreateUser inputs={state.inputs}/>
            <UserList userList={state.userList} ></UserList>
            <div><label>활성상태</label>{count}</div>
        </div>
        </UserDispatch.Provider>
        ``` 

    * immer : 불변성 라이브러리 
    ```
        import produce from 'immer'

        //BEFER
        ----------------------------
        ...state,
        userList: action.userList 
        ----------------------------

        불변성 유지
        produce(state,(drft) => {
                drft.userList = action.userList
        })
    
    ```
        
    

