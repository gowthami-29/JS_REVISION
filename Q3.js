const time={};
function mySetInterval(callback,delay){
    let id=Symbol()
    function run(){
        time[id]=setTimeout(()=>{
            callback(),
            run();
        },delay);
    }
    run();
    return id;
}
function myClearInteral(id){
    clearTimeout(time[id]);
    delete time[id]
}