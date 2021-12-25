/**
  * 프로그램 설명문서 주석
  * 2021.03 23 수업
  * 
  *      Node.js 환경에서의 자바스크립트의 엔진 처리에 대하여
  * 
  *           ===== Node.js 코드 형태 ===== 
  * 
  *       - 서버 프로그램 고려 사항
  *       ----> 동접 10K
  * 
  *       - JS는 Single thread
  * 
  *       - Node.js에서 JS는 비동기 처리
  *       ----> C++ 의 Semapore,Mutex
  * 
  *       - Context 형태가 효율성이 높음
  *       ----> ES5의 실행 콘텍스트는 Context 형태
  *     
  *       - 실행 콘텍스트에
  *       ----> 최적화된 형태로 코드를 작성해야 하며
  *       ----> 이를 위해 엔진 처리를 이해할 필요가 있다.
  * 
  *       ---------------------------------------------------------
  * 
  *       - Node.js는 서버 환경이다.
  * 
  *       - 서버 프로그램을 개발할 때 고려해야할 사항중 하나는 동접 10K이다.
  *         즉, 동시에 접속하는 사용자가 만명인 경우, 이경우를 고려 해야 한다.
  * 
  *       - 한편 자바스크립트는 싱글 스레드이다.
  *       ----> 싱글 스레드(Single thread)란 하나의 함수가 호출되어 끝날때까지
  *             그사이에 다른 함수가 호출되지 않는 것을 뜻한다.
  * 
  *       ----> 즉, 하나의 함수가 호출되어 끝난 후에 다른 함수가 호출 된다라는 것.
  *             따라서 순차적으로 처리하게 된다.
  * 
  *             이를 동기 처리라고도 한다.
  * 
  *       - 그런데 Node.js에서 자바스크립트는 비동기 처리를 하게된다.
  *         비동기 처리란, 하나의 함수가 호출되어 끝나기 전에 다른 함수가 실행되는
  *         것을 뜻한다.
  * 
  *       - 따라서, 먼저 실행된 함수의 처리시간이 길고, 도중에 실행된 함수의 처리시간이
  *         짧다면. 도중에 실행된 함수가 먼저 끝나게 된다.
  * 
  *         따라서, 순차적으로, 동기적으로 처리하지 않게 된다. 이것을 비동기 처리라고 한다.
  * 
  *       - 그런데 이러한 비동기 처리를 하는 것은 C++의 세마포(Semapoe)와 뮤텍스(Mutex)
  *         때문이다. 이것은 하나의 프로세스가 실행되는 도중에 idle타임이 생기면 waitQue
  *         에 있는 프로세스를 실행 시킨다.
  * 
  *       - 즉, 비동기 처리를 하게 되는 것이다. 그런데 Semapore와Mutex를 다룬다는 것은 아니고
  *         이러한 환경에서 Context형태가 효율성이 높다라는 것.
  * 
  *       ----> 예) ES3는 scope chain과 Activation Object가 메모리에 올라가게 된다.
  *             그런데 이것을 실행하는 도중에 다른 함수가 호출되면 그것또한 scope chain과
  *             Activation Object를 가지고 올라오게 된다. 그러면 두개가 왔다갔다하는 
  *             형태가 된다.
  * 
  *       ----> 이런것을 동접 10K 환경에서 실행한다면 이것은 부담이 되는 것이다.
  * 
  *       ----> 반면 ES5의 실행콘텍스트 형태는 하나이다. 딱 하나. 스코프 체인이 없는 것이다.
  *             그렇기 때문에 함수가 실행되는 와중에 다른 함수가 호출되더라도 하나만 올라가면
  *             되기 때문에 ES3보단 ES5의 Context 개념이 엔진처리가 빠른 것이다.
  * 
  *       - 한편 이것을 개발자 관점에서 생각해 보겠다.
  *       ----> 실행 콘텍스트에 최적화된 형태로 코드를 작성해야지 체인적으로 실행 될 것이다.
  *             이를 위해서 엔진 처리를 이해할 필요가 있다.
  * 
  * 
  *       ==== 본 강좌의 주된 목적 중 하나는 엔진 처리를 이해 하는 것 ====
  * 
  *       그리고 이를 통해서 실행 콘텍스트에 최적화된 형태로 코드를 작성하는 것.
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


window.onload = function() {

};
