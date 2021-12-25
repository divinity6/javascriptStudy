/**
  * 프로그램 설명문서 주석
  * 2021.02 09 수업
  * 
  *           ===== 프로퍼티 리스트(ES5) =====
  * 
  *       - 이름                        - 개요
  *     
  *       - Array 함수
  *       - isArray()                   배열 여부 반환; 배열이면 true,아니면 false 반환
  *       - Array.prototype             인스턴스를 만들면 메소드로 첨부되는 것
  *       - indexOf()                   지정한 값에 일치하는 엘리먼트 인덱스 반환
  *       - lastIndexOf()               indexOf()와 같으며, 마지막 인덱스 반환
  * 
  *       -- 이 아래 7개의 공통점은 콜백 함수를 호출하는것( ~~ 할때 마다,매번 )
  * 
  *       - forEach()                   배열을 반복하면서 콜백 함수 실행
  *       ---> 중간에서 빠져 나올수 없다. 처음부터끝까지 무조건돈다
  * 
  *       - every()                     반환 값이 false일 때까지만 콜백 함수 실행
  *       --> 즉, 콜백함수에서 true를 반환해주면 반복을 끝낸다
  * 
  *       - some()                      반환 값이 true일 때까지만 콜백 함수 실행
  *       --> 콜백함수에서 false를 반환하면 반복종료
  * 
  *       - filter()                    콜백 함수에서 true를 반환한 엘리먼트 반환
  *       --> 필터링해준다고 보면된다.
  * 
  *       - map()                       콜백 함수에서 반환한 값을 새로운 배열로 반환
  *       --> 애는 콜백함수에서 값을 조종할수 있다는 애기,변경가능
  * 
  *       ---->>>> 위 5개의 공통점은 파라미터를 넘겨줄때 파라미터3개를 넘겨준다
  *                첫 번째에는 현재 처리중인 엘리먼트 값, 두 번째에는 인덱스,
  *                세번째는 배열 전체
  * 
  *       - reduce()                    콜백 함수의 반환 값을 파라미터 값으로 사용
  *       - reduceRight()               reduce()와 같음. 단, 배열의 끝에서 앞으로 진행
  * 
  * 
  * 
  *       --------------------------------------------------------------------------
  * 
  *       - map()과 forEach()는 비슷하다. 그런데 forEach()는 무조건적으로 반복을 
  * 
  *         돌면서 반환하는게 없다. 만약 반환하려면 별도의 배열을 만들어서 집어넣어
  * 
  *         처리해줘야 한다.
  *  
  *       - map()은 기본적으로 그런 반환을 해준다.
  * 
  * 
  *       - reduce() 와 reduceRight()의 공통점은 파라미터가 4개이다. 그리고 첫번째, 
  * 
  *         두번째는 상황에 따라다르다. 세번째는 index고 4번째는 전체 배열이다
  * 
  *         상황에 대해서는 메소드를 다룰때 한다
 */
console.log("=====================================");

window.onload = function() {

/*
          ===== isArray() =====

    - 구분                   - 데이터(값)

    - object                 - Array 오브젝트
    - 파라미터                - 체크 대상
    - 반환                   - 배열 : true, 아니면 : false

    -----------------------------------------------------

    -- 체크 대상이 배열이면 true, 아니면 false

    -- isArray()는 함수

    -- isArray() 함수가 필요한 이유
*/

  "use strict"

  console.log('--- 배열 여부 체크 ---')

  console.log(Array.isArray([1, 2]));
  // 1. isArray()는 함수이므로
  // 2. Array.isArray()형태로 호출
  console.log(Array.isArray(123));
  // 이것은 Number이다

  /*
  
      isArray는 함수이다. 따라서 isArray 함수앞에 오브젝트를

      작성해야 한다
  */

  debugger;

  console.log('--- typeof체크 ---')

  console.log(typeof {a : 1});
  // 1. typeof 연산자로 데이터 타입을 구하면
  console.log(typeof [1 , 2]);
  // 2. 모두 object 이므로 배열 여부 체크 불가
  console.log(typeof null);
  // 3. [1, 2]는 Array.isArray() 사용
  // 4. null은 Object.is() 사용
  //    Object.is()는 ES6에서 나왔다

  /*
      [1,2]는 배열인데도 object가 나온다. 즉 배열인지 오브젝트인지 파악할 수가 없다

      예) 서버에서 json타입으로 데이터를 가져온다. json타입안에는 {a : 1} 형태와 [1 , 2]
          
          형태가 있다. 그러면 반복을 하면서 읽은 것마다 체크를 해줘야 한다.

          그때 타입에 따라서 다른함수를 호출해서 처리하는 등등
   */
  debugger;
}



