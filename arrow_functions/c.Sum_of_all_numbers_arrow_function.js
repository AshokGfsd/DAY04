let arr = [1, 2, 3, 4, 5];

const sum = (arr) => {
  let sum = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    sum = sum + arr[ind];
  }
  console.log(sum);
};

sum(arr);
