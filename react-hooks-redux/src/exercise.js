import { createStore } from 'redux';
// 스토어를 만들어주는 함수 : 단하나만 존재 


//리덕스 관리할 스테이트 
const initialState = {
    counter: 0,
    text: '',
    list: []
};

/* 액션 타입 정의 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 각액션 함수 정의 */
const increase = () => ({
    type : INCREASE 
})

const decrease = () => ({
    type : DECREASE 
})

const changeText = () => ({
    type : CHANGE_TEXT 
})

const addToList = () => ({
    type : ADD_TO_LIST 
})

/*
    리듀서의 상태는 항상 불변성을 유지 해줘야함 
    ...연산자 활용
 */
function reducer(state = initialState, action) {
    // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1
        };
      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1
        };
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        };
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item)
        };
      default:
        return state;
    }
  }

//리덕스 스토어 생성
const store = createStore(reducer);


// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
const state = store.getState();
console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들 수행 
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));
