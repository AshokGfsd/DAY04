arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const odd = (arr) => {
  for (ind = 0; ind < arr.length; ind++) {
    if (arr[ind] % 2 !== 0) {
      console.log(arr[ind]);
    }
  }
};

odd(arr);
