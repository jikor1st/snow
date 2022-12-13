/**
 * 두 값 사이의 난수 생성하기
 * 주어진 두 값 사이의 난수를 생성합니다.
 * @param {number} min
 * @param {number} max
 * @returns {number} 랜덤 난수값
 */
export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * 두 값 사이의 정수 난수 생성하기
 *  주어진 두 값 사이의 `정수인` 난수를 생성한다.
 * @param {number} min
 * @param {number} max
 * @returns {number} 랜덤 정수 난수값
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 최댓값을 포함하는 정수 난수 생성하기
 * @param {number} min
 * @param {number} max
 * @returns {number} 랜덤 최솟/최댓값 포함 랜덤 정수 난수값
 */
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
