let count = 0

export function createCounter() {
  return function () {
    return ++count
  }
}
