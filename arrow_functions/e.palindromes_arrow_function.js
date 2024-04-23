arr=["abcba","racecar","car","maas"]
const Palindrome= arr=>{
      let ans = [];
      for (let i = 0; i < arr.length; i++) {
        let a=arr[i]
        let s = a;
        s = s.split('').reverse().join('');

          if (s == a) {
              ans.push(arr[i]);
          }
      }
      console.log(ans)
    }
Palindrome(arr)

