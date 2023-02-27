//essentially any character that appears more than once can be used to form a palindrome.
//If we encounter any character that appears 1 OR an odd number of times, we can use it ONCE in the palindrome.
//If we use it, we should subtract 1 from the count of that character in the hash map.

function longestPalindrome(s: string): number {
  let hashMap = {}

  for (const token of s.split('')) {
    hashMap[token] === undefined ? (hashMap[token] = 1) : hashMap[token]++
  }

  let hasSingular = false
  Object.keys(hashMap).forEach(key => {
    if (hashMap[key] % 2 !== 0) {
      //if the count is odd, we can use it once in the palindrome
      hasSingular = true
      hashMap[key] = hashMap[key] - 1 //subtract 1 from the count so we have either 0 or an even number left
    }
  })

  //finally, sum everything.
  let sum = 0
  Object.keys(hashMap).forEach(k => {
    sum += hashMap[k]
  })

  return sum + (hasSingular ? 1 : 0)
}
