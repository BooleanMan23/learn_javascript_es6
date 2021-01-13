alert('connected');

function doingTask(task, done){
    console.log(`Now doing ${task}...`);
    done();
}

function done(){
    console.log('done doing task');
}

doingTask('Learning', done);

