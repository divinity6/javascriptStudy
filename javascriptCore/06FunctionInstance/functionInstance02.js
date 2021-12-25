/**
  * 프로그램 설명문서 주석
  * 2021.05 26 수업
  * 
  *           ===== 생성자 함수 =====
  * 
  *   - new 연산자와 함께 인스턴스를 생성하는 함수
  *   ----> new Book()에서 Book()이 생성자 함수
  * 
  *   - new 연산자
  *   ----> 인스턴스 생성을 제어
  *   ----> 생성자 함수 호출
  * 
  *   - 생성자 함수
  *   ----> 인스턴스 생성, 반환
  *   ----> 인스턴스에 초깃값 설정
  * 
  *   - 코딩 관례로 생성자 함수의 첫 문자는 대문자를 사용한다
  *   ----> new Number(), new Array(), new Book()
  * 
  *   --------------------------------------------------------------
  * 
  *   - 생성자함수는 new 연산자와 함께 인스턴스를 생성하는 함수.
  *   ----> new Book() 에서 Book()이 생성자 함수
  * 
  *   - new 연산자는 인스턴스 생성을 제어한다.
  *   ----> new 연산자에서 인스턴스를 만드는 것이 아니다.
  *         ( 그리고 생성자 함수를 호출한다. )
  * 
  *   - 생성자 함수는 인스턴스를 생성하고, 반환한다.
  *     ( 실제로 생성자 함수에서 인스턴스를 생성하는 것이다. )
  *   ----> 그리고 인스턴스에 초기값을 설정한다.
  * 
  *   - 따라서 new 연산자가 생성자 함수를 호출하면, 생성자 함수에서
  *     인스턴스를 생성해서 반환하면 new 연산자는 이것을 받아서 반환하게 되는,
  *     이러한 흐름이 된다.
  * 
  *   - 코딩 관례로 생성자 함수의 첫 문자는 대문자이다.
  *     ( 첫 문자를 대문자로 사용한다. )
  *     즉, 첫문자가 대문자이면 생성자함수, 
  *     그리고 이것은 어디선가 new 연산자로 생성자를 만든다는 시멘틱이 담겨져 있다.
  */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};

debugger;
log('생성자 함수 실행 과정');
function Book(point){
  debugger;
  this.point = point;
}
Book.prototype.getPoint = function(){
  return this.point;
}
var obj = new Book(10);

/**
 *          ===== 생성자 함수 실행 과정 =====
 * 
 *  new 연산자로 인스턴스 생성을 제어하고
 *  생성자 함수인 Book()으로
 *  인스턴스를 생성하여 반환한다.
 * 
 *  ------------------------------------
 *      new와 생성자 함수 실행 과정
 *  ------------------------------------
 * 
 *  1. 엔진이 new 연산자를 만나면
 *  - function의 [[Construct]]를 호출하면서
 *    파라미터 값으로 10을 넘겨 준다.
 * 
 *  2. function 오브젝트를 생성할 때
 *  - Book() 함수 전체를 참조하도록
 *    [[Construct]]에 설정하였다.
 * 
 *  3. [[Construct]]에서 인스턴스를 생성하여 반환한다.
 * 
 *  4. 반환된 인스턴스를 new 연산자가 받아
 *  - new 연산자를 호출한 곳으로 반환한다.
 * 
 *  5. new 라는 뉘앙스로 인해
 *  - new 연산자가 인스턴스를 생성하는 것으로 생각할 수 있지만
 *  - function 오브젝트의 [[Construct]]가 인스턴스를 생성한다.
 *  - 그래서 Book()이 생성자 함수이다.
 * 
 *  --------------------------------------------------------------
 *  
 *  new 연산자로 인스턴스 생성을 제어하고 생성자 함수인
 *  Book()으로 인스턴스를 생성하여 반환한다.
 *  
 *  - 위의 코드에서 Book은 생성자 함수이니까 new 연산자를 사용할 것이고
 *    new 연산자를 사용하기 때문에 prototype이 있는 것은 전형적인
 *    형태이다.
 * 
 *  1. 엔진이 new 연산자를 만나면 function 오브젝트의 내부 프로퍼티인
 *     [[Construct]]를 호출하면서 파라미터 값으로 10을 넘겨준다
 * 
 *  2. [[Construct]]는 function 오브젝트를 생성할 때
 * 
 *  - Book 전체를 참조하도록 [[Construct]]에 설정하였다라는 것이다.
 *  - [[Construct]]를 호출하는 것은 new Book으로 Book을 호출하는 것과 같다.
 * 
 *  - 다만, Book은 Book.prototype.getPoint = function(){return this.point;}
 *    만 처리하게 된다.
 * 
 *  - 그런데 [[Construct]]는 Book.prototype에 연결되어 
 *    있는것들을 다 처리한다라는 것이다.
 * 
 *  3. 따라서 [[Construct]]에서 인스턴스를 생성하여 반환한다는 것이다.
 * 
 *  4. 그리고 반환된 인스턴스를 new 연산자가 받아서 new 연산자를 호출한 곳으로
 *     반환하게 되는 것이다.
 *    
 *  5. new 라는 뉘앙스로 인해
 *  - new 연산자가 인스턴스를 생성하는 것으로 생각할 수 있지만
 *  - function 오브젝트의 [[Construct]]가 인스턴스를 생성한다.
 *  - 그래서 Book()이 생성자 함수이다.
 *    조금더 정확하게 이야기하면 인스턴스 생성자 함수인 것이다.
 */




/**
 *          ===== 인스턴스 생성 과정 =====
 * 
 *  - 인스턴스를 생성하는 과정을 개략적으로 살펴본다.
 * 
 *  -------------------------------------
 *            인스턴스 생성 과정
 *  -------------------------------------
 *  Book 인스턴스: {
 *    point: 10,
 *    __proto__ = {
 *      constructor: Book,
 *      getPoint: function(){},
 *      __proto__: Object
 *    },
 *  }
 * 
 * 
 *  1. new Book(10) 실행
 *  - Book 오브젝트의 [[Construct]] 호출
 *  - 파라미터 값을 [[Construct]]로 넘겨준다.
 * 
 *  2. 빈 Object를 생성한다
 *  - 이것이 인스턴스
 *  - 지금은 빈 오브젝트 { } 이며
 *    지금부터 하나씩 채워간다.
 * 
 *  3. 오브젝트에 내부 처리용 프로퍼티를 설정한다.
 *  - 공통 프로퍼티와 선택적 프로퍼티
 * 
 *  4. 오브젝트의 [[Class]]에 "Object" 설정
 *  - 따라서 생성한 인스턴스 타입은 Object
 * 
 *  5. Book.prototype에 연결된 프로퍼티(메소드)를
 *  - 생성한 인스턴스의 [[Prototype]]에 설정한다.
 *  - constructor도 같이 설정된다.
 * 
 *  --------------------------------------------------------------
 * 
 *  - 인스턴스 생성과정 살펴봄
 * 
 *  1. new Book(10)을 실행하면
 *  - Book 오브젝트의 [[Construct]] 호출한다.
 *  - 그리고 파라미터 값을 [[Construct]]로 넘겨준다.
 * 
 *  2. 이때, [[Construct]]는 빈 오브젝트, 아무것도 없는
 *     오브젝트를 생성한다.
 * 
 *  - 이것이 바로 인스턴스이다.
 *  - 지금은 빈 오브젝트 { } 이며 지금부터 하나씩 채워간다. 
 * 
 *  3. 오브젝트에 내부 처리용 프로퍼티를 설정한다.
 *  - 공통 프로퍼티와 선택적 프로퍼티가 있다.
 *    (공통 프로퍼티도 설정하고 함수에 필요한 선택적 프로퍼티도 설정하게 되는 것이다)
 * 
 *  4. 그리고 오브젝트의 [[Class]]프로퍼티에 "Object"를 설정한다.
 *  - 따라서 생성한 인스턴스 타입은 Object
 *    (여기서 결정되는 것이다.)
 *  - 위에서 Object라고 설정 해 놓음으로써 인스턴스 타입은 "Object"가 된것이다.
 *    (function에서 Object로 변경된 것이다.)
 * 
 *  5. Book.prototype에 연결된 프로퍼티(메소드)를 생성한 인스턴스의
 *     내부 프로퍼티인 [Prototype]에 설정한다.
 * 
 *  - 즉, 인스턴스에서 prototype에 연결된 메소드들을 다 가지고 있는 것이다.
 *  - 이때, constructor도 같이 설정한다.
 *    ( 내부프로퍼티인 [[Construct]]와 constructor는 다르다 )
 * 
 *  ----> 여기서 constructor: Book은 Book 전체(prototype 포함)를 참조하게 된다.
 * 
 *  - constructor은 외부프로퍼티이며 [[Construct]]은 내부 프로퍼티이다.
 * 
 *  - 그리고 인스턴스안의 (__proto__: Object)는 빌트인 오브젝트의 프로토타입에 연결되어
 *    있는 6개의 메소드가 첨부되게 되는 것이다.
 *    아니다, 정확하게 말하면 참조할 수 있도록 만들어 지는 것이다.
 * 
 */