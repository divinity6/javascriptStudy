/**
 * 프로그램 설명문서 주석
 * 2021.09 06 수업
 *
 *           ===== Unicode =====
 *
 *      - 유니코드는 U+0031 형태
 *
 *      - 코드 포인트(code point)
 *      --> 0031이 코드 포인트
 *      --> 문자 코드라고도 부른다
 *      --> 코드 포인트로 문자/이모지 등을 표현
 *      --> 4자리 이상의 UTF-16 진수 형태
 *
 *      - 110만개 정도 표현
 *      - U+0000 ~ U+10FFFF
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

/**
 *           ===== Unicode =====
 *
 *      - plane(평면)
 *      --> 코드 포인트 전체를 17개 plane으로 나눔
 *      --> 하나의 plane은 65,535(U+FFFF)개
 *
 *      - 첫 번째 plane을
 *      --> BMP(Basic Multillingual Plane)라고 부른다
 *      --> 일반적인 문자(영문자, 숫자)가 여기에 속한다
 *      --> 한글의 코드 포인트도 여기에 속한다
 *
 *      - 첫 번째 plane을 제외한 plane
 *      --> Supplementary plane(서플리멘탈리 플레인), Astral plane(에스트럴 플레인)이라고 부른다
 *      --> 5자리 이상의 코드 포인트를 표현할 수 있다
 *      --> 5자리 이상은 ES6+ 에서 지원한다.(ES5에서는 지원하지 않는다.)
 *
 */
{
    "use strict"
    log('------------ 이스케이프 시퀀스 ---------------');

    // x31은 16진수(이와 같은형태로 코드 포인트 값을 작성)
    const escape = "\x31\x32\x33";
    log(escape);
    // :: 123
    log("\\");
    // :: \
    debugger;

    // 1. 역슬래시가 에디터에 "\" 형태로 표시된다.

    // 2. x를 소문자로 작성해야 한다

    // 3. JS 코드에서 역슬래시를 표현하려면
    //    역슬래시를 2개 작성해야 한다.
}

/**
 *           ===== Unicode Escape Sequence =====
 *
 *      - 이스케이프 시퀀스(Escape Sequence)
 *      --> 역슬래시와 16진수로 값을 작성
 *      --> 이를 16진수 이스케이프 시퀀스라고도 부른다
 *
 *      - 유니코드 이스케이프 시퀀스
 *      --> Unicode Escape Sequence
 *      --> 이스케이프 시퀀스를 유니코드로 작성한 형태
 *
 *      - UES 값 범위
 *      --> UTF-16 진수로
 *          U+0000에서 U+FFFF 까지 사용 가능
 */

{
    "use strict"
    log('------------ 유니코드 이스케이프 시퀀스 ---------------');

    const escape = "\x31\x32\x33";
    log(escape);
    // :: 123

    /**
     * 역슬래시(\)는 같고 그다음에 0034, 0035와 같이 코드포인트 값을 작성한다.
     */
    const unicode = "\u0034\u0035\u0036"
    log(unicode);
    // :: 456
    debugger;

    // 1. 역슬래시 다음에 u를 작성한다.
}

/**
 *           ===== Unicode =====
 *
 *      - ES5 문제
 *      --> U+FFFF보다 큰 코드 포인트는
 *          어떻게 작성할 것인가?
 *
 *      - 유니코드 코드 포인트 이스케이프
 *      --> 코드 포인트 값에 관계없이
 *          사용할 수 있는 형태 필요
 *
 *      --> \u{31}, \u{1f418} 형태
 */
{
    "use strict"
    log('------------ 유니코드 코드 포인트 이스케이프 ---------------');

    // ES5 형태
    const unicode = "\u0031\u0032\u0033";
    log(unicode);
    // :: 123

    // ES6 형태
    const es6 = "\u{34}\u{35}\u{36}";
    log(es6);
    // :: 456

    log("\u{1f418}");
    // 이와같이 5자리를 작성할 수 있다.
    // :: 🐘
    debugger;

    // 1. 역슬래시와 u를 작성하고

    // 2. 중괄호 안에 코드 포인트를 작성한다.
}

/**
 *           ===== ES5 호환성 =====
 *
 *      - Surrogate pair
 *      --> \u{1f418} 형태를 ES5에서 사용 불가
 *      ----> 왜냐하면 ES5에서는 4자리 까지만 사용할 수 있기 때문.
 *
 *      --> ES5에서는 두 개의
 *          유니코드 이스케이프 시퀀스 사용
 *
 *      --> 이를 Surrogate pair(서로게이트 페어) 라고 한다
 *
 *      - Surrogate pair 계산 방법
 *      --> 스펙의 계산 방법
 *      ----> 관심있으면 스펙의 6.1.4 참조
 *
 *      - 유니코드 사용의 참조 사항
 *      --> 브라우저, 스마트폰에 따라
 *          표시되는 문자 모습이 다르다
 *
 *      --> https://unicode-table.com
 */

{
    "use strict"
    log('------------ Surrogate pair ---------------');

    // 아래의 \ 두개를 하나로 묶어서 사용한다.
    // 아래의 값은 "\u{1f418}"과 똑같다.
    // ES5에서는 방법이 없기 때문에 이와같이 두개를 연결하여 사용
    const pair = "\uD83D\uDC18";

    log(pair);
    // :: 🐘

    debugger;

    // 1. "\uD83D" 와 "\uDC18"를 연결하여 작성한다.
}

/**
 *      - 유니코드를 정리해보면 ES5에서는 4자리를 사용했고,
 *        ES6에서는 5자리를 사용할 수 있는데 호환성을 위해
 *        사용하는 것이 Surrogate이다.
 */



















