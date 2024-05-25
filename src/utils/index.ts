/**
 * 从数组中随机选择一个元素
 * @param array 任何类型的元素数组
 * @returns 从数组中随机选出的一个元素
 */
function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export { randomChoice };
