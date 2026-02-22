function RateLimiter(limit,interval){
    let count=0
    setInterval(()=>{
        count=0;
    },interval)
    return function(){
        if(count<limit){
            count++;
            console.log("call allowed");
            
        }
        else{
            console.log(("rate limit exceed"));
            
        }
    }
}