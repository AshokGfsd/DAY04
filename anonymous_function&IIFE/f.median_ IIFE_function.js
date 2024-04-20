let arr1 = [1, 4, 5, 6, 10];
let arr2 = [2, 3, 4, 5, 7];

const median=(function(arr1,arr2){
    if(arr1.length==arr2.length){
        var i = 0; 
        var j = 0; 
        var m1 = -1, m2 = -1;
        for (count = 0; count <= arr1.length; count++)
        {
            if (i == arr1.length)
            {
                m1 = m2;
                m2 = arr2[0];
                break;
            }
             else if (j == arr1.length)
            {
                m1 = m2;
                m2 = arr1[0];
                break;
            }
            if (arr1[i] <= arr2[j])
            {
                m1 = m2; 
                m2 = arr1[i];
                i++;
            }
            else
            {
                m1 = m2; 
                m2 = arr2[j];
                j++;
            }
        }
     
        console.log((m1 + m2)/2)
    }
    })(arr1,arr2)


