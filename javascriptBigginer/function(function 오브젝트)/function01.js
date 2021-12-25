/**
  * 프로그램 설명문서 주석
  * 2021.01.26 수업
  * 
  *      ====== 프로퍼티 리스트 ========
  * 
  *     - 이름                        - 개요
  * 
  *     - function
  *     - new Function()              인스턴스 생성
  *     - Function()                  인스턴스 생성
  *     --> 이또한 인스턴스를 만든다(new 연산자를 사용하지 않은것 뿐)
  * 
  *     - Function 프로퍼티
  *     - length                      함수의 파라미터 수
  *     - Function.prototype
  *     - constructor                 생성자
  * 
  *     --> new 연산자로 인스턴스를 생성하게 되면 내부에서는 constructor를 사용해서
  *     --> 인스턴스를 생성한다
  *   
  *     - call()                      함수 호출
  *     - apply()                     함수 호출: 배열을 파라미터로 사용
  *     --> 함수를 호출하는 것은 같지만 파라미터를 배열로 작성한다
  *         (call은 단일값으로 작성한다)
  * 
  *     - toString()                  함수를 문자열로 반환
  *     - bind()                      새로운 오브젝트를 생성하고 함수 실행
  * 
  *     --> 일반적으로 함수는 호출하면 바로실행된다. 그런데 bind()메소드는 
  *     --> 오브젝트를 생성하는 것과 함수를 실행하는 것이 나누어져있다.
  *     ----> 즉, 오브젝트를 먼저 생성하고 세미콜론, 그리고 문장을 바꿔서
  *     ----> '생성한 오브젝트를 호출'하면 그때 실행된다
  * 
  *     --------> 이것은 단계적으로 설명할 필요성이 있어서 중고급 과정에서 다룬다
  * 
 */
console.log("=====================================");

window.onload = function() {
/*
                        - new Function()

            - 구분                          - 데이터(값)

            - 파라미터                      - 파라미터 opt
                                            - 실행 가능한 JS 코드opt
            - 반환                          - 생성한 Function 인스턴스

            -------------------------------------------------------
            -- Function 인스턴스 생성

            -- 파라미터에 문자열로
               함수의 파라미터와 함수 코드 작성
            
            ----> var obj = new Function("book","return book;");
            ------> new Function 해서 ,로 구분해서 문자열로 작성

            ----> obj("JS 책");
            ------> 이 obj는 Function인스턴스이다. 인스턴스를 호출하면서
            ------> 파라미터 값을 넘겨준다
            
            ------> 그러면 첫번째 파라미터에 들어간다. 그리고 return book은 함수블럭의 
            
            ------> 코드이다 그러면 JS책을 파라미터 값으로 넘겨주고 리턴하게되고 book을
            ------> 리턴하게되니깐 "JS책"이 리턴된다

            ---> 그런데

            -- 파라미터 수에 따라 인스턴스 생성 기준이 다름
*/

  "use strict"
  debugger;
  /*
              - new Function()

      - 파라미터 2개 이상 작성
      --> 마지막 파라미터에 함수에서 실행할 함수 코드 작성
      --> 이를제외한 마지막을 제외한 파라미터에 이름 작성

      ----> 즉 이를제외한 남머지 파라미터는 함수의 파라미터가 된다

      - 파라미터 하나 작성
      --> 함수에서 실행할 함수 코드 작성
      --> 파라미터가 없을 때 사용

      - 파라미터를 작성하지 않으면
      --> 함수코드가없는 Function 인스턴스 생성
  */
  
  debugger;

  console.log('-----파라미터 2개 이상 작성----')
  var obj = new Function("one","two","return one + two");
  // 1. 파라미터를 3개 작성했으며
  // 2. 1번째와 2번째는 호출한 곳에서 넘겨준 값을
  //    매핑할 파라미터 이름을 작성
  // ---> 이때 마지막 블락의 파라미터는 함수블럭의 코드가 되고
  // ---> 나머지 두개는 파라미터가 된다
  console.log(obj(100, 200))
  // 3. 3번째는 호출되었을 때 실행될 함수 코드
  
  debugger;
  
  obj = new Function("retrun 1 + 2");
  // 파라미터가 없는것. 이것은 함수블럭의 코드가 되는것
  // 파라미터를 작성하지않으면 빈 함수가 되는것
  console.log(obj());
  
  
  var numberInstance = new Number(123);

  debugger;

  /*
                  - Function()

            --> 인스턴스를 생성하는 것은 같지만 new 연산자를 사용하지 않은것 뿐

        - 구분                        - 데이터(값)

        - 파라미터                    - 파라미터opt
                                      - 실행 가능한 JS 코드 opt
        - 반환                        - 생성한 Function 인스턴스

        ------------------------------------------------------

        -- Function 인스턴스 생성

        -- 처리 방법과 파라미터 작성이
           new Function()과 같음

        -- 단지 new 연산자를 사용하지 않은것
  */


}



