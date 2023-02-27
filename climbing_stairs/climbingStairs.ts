/*
  we should initiate an array of numbers - with each array entry corresponding to one step we take up the stairs.
  for each entry in the array, we may increment either by 1 or 2
  This is because the number of ways to climb to step i is equal to the sum of the number of ways to climb to the previous two steps, 
  since we can either climb 1 or 2 steps at a time.
*/

function climbStairs(n: number): number {
  const ways: number[] = new Array(n + 1).fill(0)
  ways[0] = 1
  ways[1] = 1 //for the first two steps, we may only climb one step at a time

  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2] //number of ways we could taken to the step prior (and the step before that)
  }

  return ways[n]
}
