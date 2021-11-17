function fib() {
    let num1 =0;
    let num2 =0;
    let flag = true;

    function nacci() {
        let nextNum;
        if(flag){

            if(num1==0){
                num1++
            }
            nextNum = num1+num2;
            num1 = nextNum;
            flag=false;
            
        }
        else{
            nextNum = num1+num2;
            num2 = nextNum;
            flag=true;

            if(num2==0){
                num2++
            }
            
        }
        
     console.log(nextNum)
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  