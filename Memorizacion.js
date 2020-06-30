/*
!6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
!12 = 12 * 11 * 10 * 9 * 8 *7 * 6 * 5 * 4 * 3 * 2 * 1 = 479001600
!12 = 12 * 11 * 10 * 9 * 8 *7 *!6
*/

function factorial(n) {
  if (!this.cache) {
    //Si la cache no esta definida
    this.cache = {};
  }

  if (this.cache[n]) {
    //Si ya fue calculado el factorial y esta guardado en cache
    return this.cache[n];
  }

  if (n === 1) {
    return 1;
  }

  this.cache[n] = n * factorial(n - 1);
  return this.cache[n];
}
