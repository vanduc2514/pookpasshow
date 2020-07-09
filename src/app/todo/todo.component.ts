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
  }

  toggleTodo(i): void {
  }

  addTodo(): void {
  }

  deleteTodo(i): void {
  }

}
