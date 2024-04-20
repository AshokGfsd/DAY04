
str=["ashok","govindharasu"]
const titleCaps= function(str){
    out=[]
        for(ind=0; ind<str.length; ind++){
            str3=str[ind].split("")
            str3[0]=str3[0].toUpperCase()
            str3=str3.join("")
          out.push(str3)
            }
    console.log(out)    
    }

titleCaps(str)

