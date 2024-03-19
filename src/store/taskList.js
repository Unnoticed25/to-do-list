import {makeAutoObservable, observable} from "mobx";

class TasksList {
    tasks = [];
    constructor() {
        makeAutoObservable(this)
    };

    addNewTask(props){
        props.id = this.tasks.length + 1
        this.tasks.push(props);
    };
    removeTask(props){
        this.tasks = this.tasks.filter(task => task.id !== props);
    }
    signAsDoneTask(props){
        this.tasks = this.tasks.map(task => task.id === props ? {...task, completed: !task.completed} : task);
    }
    editTask(props){
        this.tasks = this.tasks.map(task => task.id == props.eid ? {...task, title: props.text} : task);
    }

}
export default new TasksList()