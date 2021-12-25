/**
  * 프로그램 설명문서 주석
  * 2021.03 07 수업
  * 
  *           
  *           ===== 프로퍼티 리스트 =====
  * 
  *       - 이름                      - 개요
  * 
  *       - new Date()                - 인스턴스 생성
  * 
  *       - Date 함수
  * 
  *       - Date()                    - 현재 시각 반환
  * 
  *       - Date.parse()              - 문자열 값을 밀리초로 변환
  *       - Date.UTC()                - UTC 기준 밀리초로 변환
  *       - Date.now()                - 현재 시각을 밀리초로 반환
  * 
  *       - Date.prototype
  * 
  *       - constructor               - 생성자   
  * 
  *       - toString()                - 일자와 시간을 변환해서 문자열로 반환
  *       - toUTCString()             - UTC 일자와 시간 반환
  * 
  *       - toISOString()             - "ISO 8601 확장 형식의 간소화 버전" 형태로
  *                                     일자와 시간 반환
  *       - toDateString()            - 연월일과 요일을 사람이 읽기 쉬운 형태로 반환
  * 
  *       - toTimeString()            - 시분초와 타임존을 사람이 읽기 쉬운 형태로 반환
  *       - toLocaleString()          - 일자와 시간을 지역 언어로 반환
  * 
  *       - toLocaleDateString()      - 연월일을 지역 언어로 반환
  *       - toLocaleTimeString()      - 시분초와 오전/오후를 지역 언어로 반환
  *       - toJSON()                  - JSON.stringify()와 연동하여 JSON 형태의
  *                                     일자, 시간 설정
  * 
  * 
  *       ------------------------------------------------------------------------
  * 
  *       - Date 함수,
  *         따라서 Date()은 바로 호출한다.
  *         Date.parse()는 파싱. 문자열대상
  *         Date.UTC(), UTC기준, 자바스크립트는 UTC 기준이다
  *         Date.now() 현재시각. (많이 쓴다)
  * 
  *       - prototype, 이 아래에 있는 것은 전부 메소드라는 뜻이다.
  *         prototype이 있기 때문에 constructor가 나온다.
  *         그래야 new를 사용할 수 있기 때문이다.
  * 
  *         이 아래에 있는 것들은 전부다 to이다. 변환이다.변환, 전부다
  *         toISOString, 국제 표준 기구 협회,이런개념. 기업에서는 많이쓴다
  *         (예 : ISO 인증을 받았다.)
  * 
  * 
  *       - Locale은 브라우저에 의존적인 부분이 많다.
  *         따라서 Locale은 고려를 해보아야 한다.
  *       
  *       -  toJSON() JSON.stringify()와 연동하여 일자, 시간 설정.
  * 
  *  ------------------------------------------------------------------------------
  *  ==============================================================================
  *  ------------------------------------------------------------------------------
  * 
  *           ===== 프로퍼티 리스트 2 =====
  * 
  *  - 이름              - 개요           - 이름                - 개요
  * 
  *  - Date.prototype
  * 
  *  - getTime()        - 시간값 반환     - valueOf()           - 프리미티브 시간값 반환
  *  - getFullYear()    - 연도 반환       - getYear()           - 세기 구분과 연도2자리
  *                                                              반환 (getFullYear 
  *                                                               사용 권장)
  * 
  *  - getMonth()       - 월 반환         - getDate()           - 일 반환
  *  - getDay()         - 요일 반환       - getHours()          - 시 반환
  * 
  *  - getMinutes()     - 분 반환         - getTimezoneOffset() - UTC와 지역 시간 
  *                                                              차이를 분으로 반환
  * 
  *  - getSeconds()     - 초 반환         - getMilliseconds()   - 밀리초 반환
  *  - getUTCFullYear() - UTC 연도 반환   - getUTCMonth()       - UTC 월 반환
  * 
  *  - getUTCDate()     - UTC 일 반환     - getUTCDay()         - UTC 요일 반환
  *  - getUTCHours()    - UTC 시 반환     - getUTCMinutes()     - UTC 분 반환
  *  - getUTCSeconds()  - UTC 초 반환     - getUTCMilliseconds() - UTC 밀리초 반환
  * 
  *  ------------------------------------------------------------------------------
  *   
  *   - 이것들도 전부 프로토타입에 연결되어 있는 것들이기 때문에 메소드가 되고
  *     인스턴스를 사용하여 호출하게 된다
  * 
  *   - 여기에 있는 것은 전부 get이다. 값을 구하는 것이다.
  * 
  *   - getFullYear() 는 4자리로 연도를 반환하고 getYear()는 2자리로 반환한다.
  *     지금은 이제 2자리말고 4자리로 써야한다. getFullYear()
  *     
  *     현재 getYear()를 쓰면 문제가 있다. 왜냐하면 1999년도 까지는 괜찮았다.
  *     그러나 2000년도로 넘어오기 시작하면서 뒤의 두자리만 저장하게되니깐 2000년과
  *     1900년이 같아지기 때문에 버그가 일어난다. 따라서  getFullYear()를 사용해야 한다.
  * 
  *   - getDate()가 일이고 getDay()가 요일이다. 처음엔 헷갈리기에 조심해야 한다.
  * 
  *  ------------------------------------------------------------------------------
  *  ==============================================================================
  *  ------------------------------------------------------------------------------
  *  
  *           ===== 프로퍼티 리스트 3 =====
  * 
  *  - 이름              - 개요             - 이름                - 개요
  *  
  *  - Date.prototype
  * 
  *  - setFullYear()    - 연도 변경, 월,    - setYear()           - 두 자리로 연도 변경.
  *                       일 변경 가능                              setFullYear()
  *                                                                사용 권장
  *  - setMonth()       - 월 변경, 일 변경  - setDate()           - 일 변경
  *                       가능
  * 
  *  - setHours()       - 시 변경           - setMinutes()        - 분 변경. 초, 밀리초
  *                                                                 변경 가능
  *  - setSeconds()     - 초 변경. 밀리초   - setMilliseconds()   - 밀리초 변경
  *                       변경 가능
  * 
  *  - setTime()        - 1970년 1월 1일부터 - setUTCFullYear()   - UTC 연도 변경. 월,
  *                       경과한 밀리초 변경.                        일 변경 가능
  *  
  *  - setUTCMonth()    - UTC 월 변경. 일   - setUTCDate()        - UTC 일 변경
  *                       변경 가능
  *  - setUTCHours()    - UTC 시 변경       - setUTCMinutes()     - UTC 기준 분 변경.
  *                                                                초, 밀리초 변경 가능
  * 
  *  - setUTCSeconds()  - UTC 초 변경. 밀리초 - setUTCMilliseconds() - UTC 밀리초 변경
  *                       변경 가능
  * 
  *  ------------------------------------------------------------------------------
  *  
  *   - prototype이 있다.
  * 
  *   - set 전부메소드다. 앞의 get과 set이 전부 하나씩 매치된다.
  *     set을 할 수 있고 get을 할수있고. 그런 차이다.
  * 
  */
 console.log("=====================================");
 
 window.onload = function() {
   // "use strict"
   // console.log 사용
   var log = function( value , key ){
     if ( key === "note") {
       console.log('--- ' + value +' ---');
      } else { console.log(value); }
  };

  /*
            ===== new Date() =====
  
      - 구분                - 데이터(값)

      - 파라미터            - 년, 월[, 일[, 시[, 분[, 초[, 밀리초]]]]]
      - 반환                - 생성한 Date 인스턴스

      ---------------------------------------------------------------

      - Date 인스턴스 생성
      ----> 파라미터 값을 인스턴스의 프리미티브 값으로 설정

      - 파라미터를 작성하지 않으면 
      ----> UTC 기준 현재 시간

      - 파라미터를 문자열로 작성하면
      ----> "2019-12-15T09:11:23.123"
      ----> 밀리초로 변환

      - 시간 자동 넘김

      ---------------------------------------------------------------

      - 인스턴스를 생성하는 것. 인스턴스를 생성한다라는 것은 
        그안의 메소드들. 즉,앞에서 봤었던 prototype에 연결되어 있는 
        get,set등을 사용하겠다라는 것.

      - 파라미터의 년,월,일시분초가 있는데 [[년월만 필수]]이고 나머지는 선택이다.
        (대괄호 안에 쭉~작성되어 있는 것은 선택)
  
  */

  log('Date 인스턴스 생성' , 'note');
  var obj = new Date(2019, 02);
  // 1. 값을 작성하지 않으면 0으로 간주.
  console.log( obj );
  // :: Fri Mar 01 2019 00:00:00 GMT+0900 (대한민국 표준시)
  /*
    - use strict 모드에서는 8진법 리터럴 오류가 나타난다.
      (Uncaught SyntaxError: Octal literals are not allowed in strict mode)

    - Date(2019 , 02); == 2019년 3월

      값을 작성하지 않으면 나머지는 모두 0으로 간주해서 처리한다.

      GMT, 아직 UTC로 바뀌지 않은 것같음 (브라우저에서 이렇게 표기한 것으로 추정)
  */

  log('현재 시간' , 'note');
  console.log(new Date());   
  // :: Sun Mar 07 2021 16:30:47 GMT+0900 (대한민국 표준시)

  /*
      파라미터를 작성하지 않으면 UTC 기준 현재 표준 시이다.
      아무것도 작성하지 않으면 UTC 기준의 현재 시간이다.

      따라서 UTC 기준의 현재시간으 00이 아니다.  
  */

  log('문자열로 작성','note');
  console.log(new Date('2019-02'));
  // :: Fri Feb 01 2019 09:00:00 GMT+0900 (대한민국 표준시)

  // 1. 문자열 작성의 차이
  // 2. new Date(2019, 02) 에서 02가 3월로 변환되지만
  //    new Date("2019-02")는 2월로 변환 된다.

  /*
      파라미터를 문자열로 작성하면 밀리초로 변환한다.

      그러나 문자열과 그냥 값을 작성한 것과는 차이가 있다.
      new Date(2019, 02) 에서 02가 3월로 변환되지만
      new Date("2019-02")는 2월로 변환 된다.
  
  */

  log('시간 자동 넘김' ,'note');
  console.log( new Date( 2019, 11, 34));
  // :: Fri Jan 03 2020 00:00:00 GMT+0900

  // 1. 월일시분초 범위를 넘치면 상위 시간값에 반영된다.
  //    단, 문자열로 작성하면 에러가 난다.

  // 2. new Date(2019, 11, 34)에서
  
  // 3. 34가 31을 넘치므로
  //    3을 남겨두고 11에 1을 더한다
  
  // 4. 12는 13월 이므로
  //    1을 남겨두고 2019에 1을 더한다.
  // 5. 그래서 2020.01.03이 출력 되었다.

  /*
      2019년 12월 34일. 이런날짜는 없다
      그런데 월일시분초범위를 넘으면 상위시간에 자동으로 반영된다.
      ( 문자열로하면안되고 위의 규칙대로 작성해야 한다.)

      ---------------------------------------------------------

      이것은 캘린더 프로그램에서 많이 사용한다.

      따라서 캘린더 프로그램을 개발할 때, 윤년,윤달이런것 신경써야한다. 
      어떤달은 작고,크고 이런것을 프로그램으로 처리하려면 피곤하다. 에러날 확률도 많다.

      그래서 일자를 쭉~ 

      예를들어 1월 1일부터 3개월간의 캘린더를 만들겠다. 라고한다면

      인스턴스를 만들어가면서 일자를 구하면 된다.

      그리고 나머지 남아있는것은 UI부분에 하면 되는 것이다.
  */

  debugger;

  /*
            ===== Date.now() =====

      - 구분                    - 데이터(값)

      - object                  - Date 오브젝트
      - 파라미터                 - 사용하지 않음
      - 반환                    - 밀리초

      ------------------------------------------------

      - 현재 시간을 밀리초로 반환
  */

  log('현재 시간 반환' , 'note');
  console.log(Date.now());
  // :: 1615104303727
  console.log(new Date());
  // :: Sun Mar 07 2021 17:05:28 GMT+0900 (대한민국 표준시)

  // 1. 값을 작성하지 않으면 0으로 간주
  // 2. Date.now()와 new Date()가 같은 시간값이지만 값 표시가 다르다.

  /*
      - Date.now() == 밀리초로반환. 그리고 밀리초를 그냥 찍는다.

        그런데, new Date()를 하면 이것도 마찬가지로 밀리초로 만든다.
        그러나 찍는것은  ""Sun Mar 07 2021 17:05:28 GMT+0900 (대한민국 표준시)""
        이런 형식으로 찍는다.

      - 이부분이 차이가 있다.
  */

  debugger;

  /*
            ===== Date.parse() =====
  
      - 구분                  - 데이터(값)

      - object                - Date 오브젝트
      - 파라미터              - 년월일, 시분초, 밀리초
      - 반환                  - 밀리초

      -----------------------------------------------

      - 문자열 값을 밀리초로 변환
      ----> 1970.01.01부터 경과한 시간(기준)

      -----------------------------------------------

      parse()는 파싱하는 것.
  */

  log('문자열 값을 밀리초로 변환' , 'note');
  console.log(Date.parse("2019-01-23T09:11:23.123"));
  // :: 1548202283123

  /*
    - T 와 .을 작성해서 년월일, 시분초를 구분했다.
      :과 -(하이픈)을 작성등.

      그러면 결과와 같이 밀리초로 작성되서 반환한다.
  */

  debugger;

  /*
            ===== Date 오브젝트 함수 분류 =====

      - 시간을 반환하는 함수
      ----> getMonth(), getDate()등

      - 시간을 설정하는 함수
      ----> setMonth(), setDate() 등

      - 함수 이름으로 기능을 알 수 있으므로 설명 생략

      - 주의 사항
      ----> 클라이언트의 시간은 사용자가 변경 가능
      ----> 마감 시간처럼 시간이 중요할 때에는 서버 시간 사용

      ----------------------------------------------------------

      -- 지금까지 했던 것들을 정리해보는 시간

      - getMonth(), getDate()등
  
  */

  log('시간 추출' , 'note');
  var obj = new Date(2019, 02, 15);
  console.log( obj.getMonth());
  // :: 2
  console.log( obj.getDate());
  // :: 15

  /*
      obj.getMonth() 하면 3월이다. 2이지만,
      obj.getDate() 는 15일.
  */

  log('시간 설정', 'note');
  var obj = new Date();
  console.log(obj.valueOf());
  // :: 1615105461545
  console.log(obj.setMonth(01));
  // :: 1612686261545
  console.log(obj.setDate(15));
  // :: 1613377461545

  /*
      그리고 시간을 설정하는 것.

      인스턴스를 만들어서 valueOf(), 프리미티브 값을 반환하는것.

      setMonth(01), 2월달.
      setDate(15) 일자등.

      ---------------------------------------------------------

      - 주의할 사항.

      - set이 있다는 이야기는 시간을 사용자가 바꿀 수 있다는 이야기도 있다.
        pc자체의시간을 바꿀수가 있다.
        따라서 시간이 중요할 때에는 서버 시간을 사용해야 한다.

      - 예) 마감을한다거나 사용자의 로그인 시간이 매우중요하다.
            이럴때는 브라우저에서 제공하는 시간을 사용하지 않고 
            서버에서 제공하는 시간 사용(데이터 베이스에 저장할 때.)

      - 이것때문에 고생하면 기억하게 된다. (반드시 서버시간 사용)


  
  */
};
