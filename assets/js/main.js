class Task{
    constructor(task){
        this.task=task;
    }
}

class Application{
    constructor(){
        this.arrayoftasks=[];
        this.values={
         input: document.querySelector('.input'),
    }
    }
    addTask(){
        const newTask=new Task(this.values.input.value);
    }
    removeTask(){
        const deleteBtn=document.querySelector('.removeInput')
    }

}