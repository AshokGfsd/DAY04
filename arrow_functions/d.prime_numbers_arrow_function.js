

let arr=[1,2,3,4,5,6,7,8,9,10]
const prime= arr=>{
  let prime=[]
  for (let ind=0; ind<arr.length; ind++){
     if(arr[ind]==2||arr[ind]==3){
      prime.push(arr[ind])
     }else if(arr[ind]%2==0){

     }else {
      for(factor=3; factor<arr[ind];(factor =factor+ 2)){
        if(arr[ind]%factor==0){
          
        }else{
         prime.push(arr[ind])
         break
        }

      }
     }
  }
  console.log(prime) 
    }

prime(arr)
