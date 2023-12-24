export default class Task {
    public id: Number;
    public text: String;
    public done: Boolean;

    constructor(id: Number, text: String, done: Boolean) {
        this.id = id;
        this.text = text;
        this.done = done;
    }
}