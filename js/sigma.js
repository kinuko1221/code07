const N10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function squareSum(n){
    var squareSum = 0;
    var i = 1;
    
    while(i <= n){
        sum = sum + i * i;
        i = i + 1;
    }
      return sum;
}

function squareSum2(n){
    var squareSum = 0;
    var i = 1;
    if(n < 1){
     i = n;
     n = 1;
     
    }
    while(i <= n){
        sum = sum + i * i;
        i = i + 1;
    }
      return sum;
}

function Sum(list){
     var result = 0;
      var i = 0;
     while(i < list.length){
         result = result + list[i]
     }
    return result;
}
   