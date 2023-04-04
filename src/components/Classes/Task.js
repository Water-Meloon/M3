
class Task {

    constructor(id, taskName, topic, categoryId, dueDate, taskStatus) {
        this.id = id;
        this.taskName = taskName;
        this.topic = topic;
        this.categoryId = categoryId;
        this.dueDate = dueDate;
        this.taskStatus = taskStatus;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    get taskName() {
        return this._taskName;
    }
    set taskName(value) {
        this._taskName = value;
    }
  
    get topic() {
        return this._topic;
    }
    set topic(value) {
        this._topic = value;
    }

    get categoryId() {
        return this._categoryId;
    }
    set categoryId(value) {
        this._categoryId = value;
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        this._dueDate = value;
    }
   
    get taskStatus() {
        return this._taskStatus;
    }
    set taskStatus(value) {
        this._taskStatus = value;
    }
}

export default Task;