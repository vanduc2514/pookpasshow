import {Component, OnInit} from '@angular/core';
import {ITodo} from '../itodo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Observer} from 'rxjs';

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
    const observer: Observer<any> = {
      next: (data) => this.todoList = data,
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    };
    this.todoService.getTodoList().subscribe(observer);
  }

  toggleTodo(i): void {
    const todo = this.todoList[i];
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
    const todo = this.todoList[i];
    this.todoService.deleteTodo(todo.id).subscribe(
      (next) => {
        console.log(next);
        this.todoList = this.todoList.filter(
          t => t.id !== todo.id
        );
      }
    );
  }

}
