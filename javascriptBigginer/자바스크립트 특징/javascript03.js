/**
  * 프로그램 설명문서 주석
  * 2021.02 21 수업
  * 
  *       ***** 허버 중요 :: 이해하고 가야함 *****
  * 
  *        ===== 인스턴스 =====
  * 
  *     - Instance
  *     --> Class를 new 연산자로 생성한 것
  * 
  *     - 인스턴스 목적
  *     --> Class에 작성된 메소드 사용
  *     --> 인스턴스마다 프로퍼티 값을 유지
  *     --> 예) 축구 경기에서 각 팀에 적용되는 규칙은 같지만 팀마다 점수는 다르다
  * 
  *     ---------------------------------------------------------------------
  * 
  *     - ES5에는 Class가 없다. 하지만 prototype에 연결된 것이 있다면 클래스로 볼 수 있다.
  *     - 왜냐하면 이것은 new 연산자로 생성하기 때문이다
  * 
  *     - 인스턴스의 목적은 Class에 사용된 메소드를 사용하는 것이다.
  *     --> prototype에 연결된 프로퍼티로 인스턴스를 만들어서 메소드를 호출하겠다라는 것
  * 
  *     - 또한 인스턴스마다 프로퍼티 값을 유지하겠다라는 것
  *       (사실 이것이더 큰 이유이다)
  * 
  *     - "축구 경기에서 각 팀에 적용되는 규칙은 같지만 팀마다 점수는 다르다"에서
  *       각 팀에 적용되는 규칙이 메소드인 것이다. 프로토 타입에 연결된 메소드는 같은것.
  *       하지만 팀마다의 점수는 다르다.
  *       이때의 팀마다의 점수가 프로퍼티 값에 해당한다.
  * 
  *       하지만 팀마다의 점수, 인스턴스마다 점수가 다르다
  * 
 */
console.log("=====================================");

window.onload = function() {
    "use strict"
    // console.log 사용
    var log = function( value , key ){
      if ( key === "note") {
          console.log('--- ' + value +' ---');
      } else { console.log(value); }
  };

  /*
            ===== new 연산자 =====

        - 구분                  - 데이터(값)

        - constructor           - 생성자
        - 파라미터               - 값 opt
        - 반환                  - 생성한 인스턴스

        ----------------------------------------------

        -- 인스턴스를 생성하여 반환

        ----> new Book("JS책");
        ----> 인스턴스를 생성하므로
              Book()을 생성자 함수라고 부름
        ----> 코딩 관례로 첫 문자를 대문자로 작성

        -- 파라미터

        ----> 생성자 함수로 넘겨 줄 값을 소괄호()에 작성
        ----> 생성자(constructor)가 값을 받아서 클래스에 넣나보네!!

        ----------------------------------------------------

        new 연산자를 사용하여 Book(class! ES5에서는 생성자 함수라고 부른다)
  
  */

  // 이것은 인스턴스가 아니였네
  var Book = function(point) {
    this.point = point;
  };
  /*
      ---------------------------------------------------------------------

      1) 여기까지만 보면 단일 오브젝트이다

        단일 function 오브젝트이다. 그러나 Book 대문자를 보고 프로토타입을 사용할
      
        것이라는 것을 예측할 수 있다.

      4) ======== 여기서의 this는 생성하는 인스턴스를 참조하게 된다 ========
         ======== this에 대한 부분은 중고급과정에서 세밀하게 다루겠다 ========

         -- 여기에서 인스턴스에 point를 할당하게 되는 것이다 --

         여기서 생성자 함수를 만들어서 반환하게 된다.
         즉, prototype에 연결된 constructor를 호출하게 되는 것이다.
  */

  // 2. 파라미터 값을 생성하는 인스턴스에 설정
  // 3. 따라서 인스턴스마다 고유의 값을 가질 수 있음

  Book.prototype.getPoint = function(){
    var result = this.point + 100;
    
    return result
  };
  /*
      -----------------------------------------------------------------

      2) prototype에 getPoint를 연결한 것을 보고 인스턴스를 만들 수 있는 여건이
         생성된 것을 알 수 있다.

      7) 그러면 return this.point + 100; 이메소드가 호출되고 this가 인스턴스를 참조하므로
         point에 100을 더해서 반환하게 된다.
  
  
  */

  var oneInstance = new Book(200);
  // 1. new Book(200)으로 인스턴스 생성
  //    oneInstance가 인스턴스 이름

  /*
      -----------------------------------------------------------------

      3) new Book으로 인스턴스를 만들게 되니 Book을 생성자 함수라고 부르게 된다 

      5) 반환된 생성자함수를 oneInstance에 할당하게 된다.
  
  */
  
  console.log( "onInstance.getPoint() :", oneInstance.getPoint());
  console.log( "onInstance :" , oneInstance );
  // 4. oneInstance.getPoint() 형태로 prototype에 연결된 getPoint() 메소드 호출
  /*
      6) 그리고 oneInstance.getPoint()를 하게된다.
         인스턴스를 사용할 때는 prototype을 사용하지 않는다
  
  */

  /*
      -------------------------------------------------------------------------------

      이와 같이 인스턴스를 생성하는 목적은 A라는 사람에 대한 어떤 포인트라고 가정했을때 
      
      또 B라는 사람은 

      Book.prototype.getPoint = function() {
        return this.point + 100;
      }; 
      이런 메소드는 똑같다

      그러나 this.point = point 가 다르다

      그리고 C라는 사람도 마찬가지다

      this.point만 다르다!

      이것이 바로 인스턴스를 만드는 목적이다
      ( 어떤 사람은 100점, 어떤사람은 200점, 어떤사람은 500점 이렇게 될 수 있다. )
  
  
  */

  debugger;

  /*
              ===== instanceof =====
        
        - 오브젝트로 생성한 인스턴스 여부 반환
        ----> instance instanceof object
        ----> instance 위치에 인스턴스 작성
        ----> object 위치에 비교 기준 오브젝트 작성

        - instance가 object로 생성한
        ----> 인스턴스이면 true, 아니면 false 반환

        -----------------------------------------

        인스턴스가 해당 오브젝트로 만들었냐 라고 물어보는것.
  */
   

  console.log(oneInstance instanceof Book);
  // 1. new Book()으로 인스턴스 생성
  // 2. oneInstance instanceof Book
  // 3. oneInstance가 Book()으로 생성한 인스턴스이므로 true 반환
  debugger;

}
