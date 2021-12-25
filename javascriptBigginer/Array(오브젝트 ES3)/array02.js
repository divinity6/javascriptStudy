/**
  * 프로그램 설명문서 주석
  * 2021.02 02 수업
  * 
  *       ===== ES3 프로퍼티 리스트 =====
  * 
  *     - 이름                    - 개요
  * 
  *     - new Array()             - 인스턴스 생성
  * 
  *     - Array()                 - 인스턴스 생성
  * 
  *     - Array 프로퍼티
  * 
  *     - length                  - 배열의 엘리먼트 수 반환
  *     ---> Array 프로퍼티는 length를 프로퍼티 이름으로 해서 배열의 엘리먼트 수 반환
  * 
  *     - Array.prototype
  * 
  *     - constructor             - 생성자
  * 
  *     - unshift()               - 배열 처음에 엘리먼트 삽입(삽입)
  *     --> 엘리먼트를 삽입하면 원래있던애들이 뒤로밀려난다
  * 
  *     - push()                  - 배열 끝에 엘리먼트 첨부(첨부)
  * 
  *     - concat()                - 배열 끝에 값을 연결하여 반환(연결)
  * 
  *     - slice()                 - 인덱스 범위의 엘리먼트를 복사(복사)
  * 
  *     - join()                  - 엘리먼트와 분리자를 결합하여 반환(연결)
  *     --> 분리자가 ## 이라고 했을때, 배열의 엘리먼트가 1,2,3이있다고했을때 
  *     --> 1##2##3 (3은 뒤에 ##을 붙이지 않음) 이렇게 연결
  *     ----> 물론 분리자를 사용하지 않을 수도 있다.
  * 
  *     - toString()              - 엘리먼트를 문자열로 연결하여 반환(연결)
  * 
  *     - toLocaleString()        - 엘리먼트를 지역화 문자로 변환하고 문자열로 연결하여 반환(연결)
  * 
  *     - shift()                 - 첫 번째 엘리먼트를 삭제하고 삭제한 엘리먼트 반환(삭제)
  * 
  *     - pop()                   - 마지막 엘리먼트를 삭제하고 삭제한 엘리먼트 반환(삭제)
  * 
  *     - splice()                - 엘리먼트를 삭제하고 새로운 엘리먼트를 (삭제,삽입)
  *                                 삽입, 삭제한 엘리먼트 반환
  * 
  *     - sort()                  - 엘리먼트 값을 Unicode 순서로 분류하여 반환 (순서)
  *     --> 예 1234같은 경우에는 숫자 값이 있으니 1234로 sort를 하면되지만
  *     --> 영어의 abc나 한글의 가나다 같은경우는 sort를 할수없다
  *     --> 이때는 Unicode의 코드 포인트 값으로 sort를 한다
  *     --> 그런데 역순으로 할때는 콜백함수로 써서 호출된다
  *     --> 그것은 개발자가 작성해주어야한다
  * 
  *     - reverse()               - 엘리먼트 위치를 역순으로 바꾸어 반환 (순서)
  *     --> 값이아닌 위치
  *     --> 예) ABC가 있으면 A가 0번인덱스 그리고 C가 2번인덱스
  *     --> C가그러면 맨앞,즉 0번인덱스로 오는것
  *     --> 
  * 
  *     -----------------------------------------------------------------------------------
  * 
  *     
 */
console.log("=====================================");

window.onload = function() {
"use strict"
}



