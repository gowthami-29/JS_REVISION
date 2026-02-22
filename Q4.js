function wait(s){
    return new Promise(resolve=>setTimeout(resolve,s))

}
async function runSequential(tasks,delay){
    const res=[];
    for(let task of tasks){
        try {
            const results= await task()
            res.push(results)
            await wait(delay)
        } catch (error) {
            throw error
        }
    }
    return res
}