let arr=[11,14,17,19];
//missing values in arr =12,15,16,18
//printing missing no's and their index in range[11-19]
let arr2=[11,12,13,14,15,16,17,18,19];
for (i in arr2){
    if (arr.includes(arr2[i])){
        continue
    }
    else{
        console.log("On index no "+i+ ": value = "+arr2[i]+ " is missing in arr")
    }
}
