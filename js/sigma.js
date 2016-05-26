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
     return n * -1
    }
    while(i <= n){
        sum = sum + i * i;
        i = i + 1;
    }
      return sum;
}

function Sum(n){
     var sum = 0;
    var i = 1;
    
    sum = 0;
    
    while(i <= 4){
        sum = sum + i; //i = 1;
        i = i + 1;
    }
    
    return sum;
}
   