arr=["abcba","racecar","car"]
const Palindrome= function(arr){

  function isPalindrome(s)
  {
      let a = s;
      s = s.split('').reverse().join('');
      return s == a;
  }
   
  (function(arr)
  {
      let ans = [];
      for (let i = 0; i < arr.length; i++) {
          if (isPalindrome(arr[i])) {
              ans.push(arr[i]);
          }
      }
      console.log(ans)
  })(arr)

    }
Palindrome(arr)

