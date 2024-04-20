let arr = ["apple", "mango", "apple","dublicate","setha","orange", "mango", "mango","dublicate"];

const removeDuplicates=(function(arr){
 removeDuplicate=[...new Set(arr)]
    console.log(removeDuplicate);
    })(arr)


