function isPrime(n) {
   if (n <= 1) {
     return false
   }
   if (n == 2) {
    return true
   }
   for (let i = 2; i**2 <= n; i++) {
       if (n % i == 0) {
          //return i
          return false
       }
   }
   return true
}

module.exports = {isPrime}