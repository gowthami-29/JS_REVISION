function createCountdown(seconds,onTick,onComplete){
    let remain=seconds;
    let timer=null;
    let paused=false;
    function start(){
        if(timer || remain <=0) return
        timer=setIntervajl(()=>{
            if(!paused){
                remain--;
                onTick(remain);
                if(remain<=0){
                    clearInterval(timer);
                    timer=null;
                    onComplete();
                }
            }
        },1000)
    }
    return{
        start,
        pause(){
            paused=true;
        },
        resume(){
            paused=false
        }
    };
}