var countPrimes = function(n) {
  let num=0
  for(let i=2;i<n;i++){
    if(i===2){
      num++
      continue
    }
    if(i===3){
      num++
      continue
    }
    if(i%6===1 || i%6===5){
      if(isPrime(i)){
        num++
      }
    }
  }
  return num
};

var isPrime=(n)=>{
  let sqrt=Math.sqrt(n)
  for(let i=5;i<=sqrt;i+=6){
    if(n%i===0 || n%(i+2)===0){
      return false
    }
  }
  return true
}

var countPrimes=function(n){
  var countPrimes = function(n) {
    let num=0
    let arr=Array(n).fill(true)
    for(let i=2;i<n;i++){
      if(arr[i]){
        num++
        for(let j=i*i;j<n;j+=i){
          arr[j]=false
        }
      }
    }
    return num
  };
}

countPrimes(5)