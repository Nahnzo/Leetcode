// 1.Palindrome Number
var isPalindrome = function (x) {
  let array = [x];
  let reversed = array.join("").split("").reverse().join("");
  Number(reversed);
  return x == reversed ? true : false;
};
