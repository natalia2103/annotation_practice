
function addNumbers() {
  // declare variable firstNum as 9
  var firstNum = 9
  // declare variable secondNum as 14
  var secondNum = 14
  // change firtNum variable to 3
  firstNum = 3
  // change secondNum variable to 4
  secondNum = 4
  // declare variable nums array that holds firstNum and secondNum
  var nums = [firstNum, secondNum]
  // declare variable product to equal firstNum variable multiplied by secondNum
  var product = firstNum * secondNum
  // declare variable sum to equal firstNum added to secondNum
  var sum = firstNum + secondNum
  // declare variable average to equal sum divided by nums.length
  var average = sum / nums.length
  // print the value of the element in the 0 spot in the nums variable
  console.log(nums[0])
  // print the value of the element in the 1 spot in the nums variable
  console.log(nums[1])
  // print string using the num1 and the num2 variable
  console.log(`The first number is ${num1} and the second number is ${num2}!`)
  // When function is called, it will return the sum number value
  return sum
}
