import {Component, OnInit} from '@angular/core';
import {ITodo} from '../model/itodo';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Observer} from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  todoFormGroup: FormGroup;
  titleControl = new FormControl('');
  contentControl = new FormControl('');

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.todoFormGroup = this.formBuilder.group({
      title: this.titleControl,
      content: this.contentControl
    });
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
    const todo: Partial<ITodo> = {
      title: this.todoFormGroup.get('title').value,
      content: this.todoFormGroup.get('content').value,
    };
    this.todoService.createTodo(todo).subscribe(next => {
      this.todoList.unshift(next);
      this.titleControl.setValue('');
    });
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

  onSubmit(): void {
    console.log(this.todoFormGroup);
    this.addTodo();
  }
}
