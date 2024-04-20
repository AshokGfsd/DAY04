arr = [1, 2, 3, 4, 5];
k=2

const median=(function(arr,k){
    n=arr.length
	k = k % n; 
    result=[]
	for (let i = 0; i < n; i++) { 
		if (i < k) { 
			result.push(arr[(n + i - k)])
		} 
		else { 
		    result.push(arr[i - k]); 
		} 
	} 
    console.log(result)
    })(arr,k)


