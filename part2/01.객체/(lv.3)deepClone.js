/**
 * [(lv.3)deepClone.js]
 *
 * 중첩 객체와 배열을 복사하는 깊은 복사 함수를 작성하세요.
 * 재귀를 통해 객체나 배열을 만나면 내부까지 복사해야 합니다.
 *
 * @param {*} obj - 복사할 대상
 * @returns {*} 깊은 복사된 결과
 */

function deepClone(obj) {
    let copy = {};

    if (typeof obj === 'object' && obj !== null) {
        for (let index in obj) {
            if (obj.hasOwnProperty(index)) {
              	//hasOwnProperty : 객체가 특정 property를 가지고 있으면 true 반환
                copy[index] = deepClone(obj[index]);
            }
        }
    } else {
        copy = obj;
    }
    return copy;
}

// export 를 수정하지 마세요.
export { deepClone };
