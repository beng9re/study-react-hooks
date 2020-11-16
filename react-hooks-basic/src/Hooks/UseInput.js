import { useCallback } from 'react';


//커스텀 훅  :: 자주쓰는 로직 분리
function useInputs(input,dispatcher) {
  // change
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatcher({
        type : 'createUserOnChange',
        name,
        value
    })
  }, [input]);
  
  return [onChange];
}

export default useInputs;