import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = '';
  alertMessage = '';
  todos: Array<String> = [];


  addNewTodo(todo) {
    if (todo) {
      this.todos.push(todo);
      this.alertMessage = "";
      this.todo = '';
    } else {
      this.alertMessage = "Please fill up the area correctly..."
    }
  }

}
