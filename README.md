# _SCSS + React_ 


* SCSS 
    * $ : 변수 지시자 
    ```
        $gray: #495057; //그래이 변수 선언 

    ```
    * & : 연결 
    ```
    // className =  "button large"
    .Button {
        display: inline-flex;
        color: white;
        font-weight: bold;
        outline: none;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        height: 2.25rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
        font-size: 1rem;
        background: $blue; // 주석 사용
        // 사이즈 관리
        &.large {
            height: 3rem;
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1.25rem;
        }
    ```

    * @mixin + @include
        * @mixin : 템플릿 만들어줌(함수를 만드는 느낌)
            ```
            @mixin button-color($color) {
                background-color: $color;
            }
        
            ```

        * @include : 함수 사용

            ```
            &.gray {
                    @include button-color($gray);
            }
            ```