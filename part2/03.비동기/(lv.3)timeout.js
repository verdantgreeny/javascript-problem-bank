/**
 * [(lv.3)timeout.js]
 *
 * 1) timeOut 함수는 첫 번째 인자로 받은 Promise가,
 *    두 번째 인자로 받은 시간(ms) 안에 끝나지 않으면
 *    "timeout"을 reject하는 Promise를 반환해야 합니다.
 * 2) Promise.race를 사용하세요.
 *
 * @param {Promise<any>} promise - 대기할 Promise
 * @param {number} ms - 제한 시간(밀리초)
 * @returns {Promise<any>} - 제한 시간 내 완료되면 resolve, 아니면 "timeout"으로 reject
 */

// TODO: timeOut 함수를 작성해주세요.
async function timeOut(promise, ms) {
  const rejectPromise = new Promise((_, reject) =>
    setTimeout(() => reject("timeout"), ms)
  );
  // 더 먼저 끝난 걸 먼저 반환(인자 둘을 경쟁 시킴)
  // -> 즉 promise가 시간 안에 끝나면 promise 반환하고,
  // 그렇지 않으면   "timeout"을 reject하는 Promise를 반환
  return await Promise.race([promise, rejectPromise]);
}

// export 를 수정하지 마세요.
export { timeOut };
