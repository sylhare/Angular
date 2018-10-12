import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'todo-app';
    todoArray = []

    addTodo(value) {
        this.todoArray.push(value)
        console.log(this.todoArray)
    }

    deleteItem(todo) {
        this.todoArray = this.todoArray.filter(value => value !== todo);
    }

    todoSubmit(value: any) {
        if (value !== "") {
            this.todoArray.push(value.todo)
        } else {
            alert('Field required **')
        }

    }
}
