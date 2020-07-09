import {Component, OnInit} from '@angular/core';
import {ITodo} from '../itodo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  inputControl = new FormControl('');

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    const observer = {
      next: (data) => this.todoList = data,
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    };
    // this.todoService.getTodoList().subscribe(next => {
    //   this.todoList = next;
    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.log('complete');
    // });
    this.todoService.getTodoList().subscribe(observer);
  }

  toggleTodo(i): void {
    const todo = this.todoList[i];
    console.log(todo);
    console.log('Todo status: ' + todo.completed);
    const todoData = {
      ...todo,
      completed: !todo.completed
    };
    this.todoService.updateTodo(todoData).subscribe(next => {
      this.todoList[i].completed = next.completed;
    });
  }

  addTodo(): void {
  }

  deleteTodo(i): void {
  }

}
