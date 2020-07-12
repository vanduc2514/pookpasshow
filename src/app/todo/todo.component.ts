import {Component, OnInit} from '@angular/core';
import {ITodo} from '../model/itodo';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Observer} from 'rxjs';
import {ErrorStateMatcher} from '@angular/material/core';

export class CustomErrorsStateMatcher extends ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!((control && control.touched && control.invalid));
  }

}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  todoForm: FormGroup;
  titleControl: FormControl;
  contentControl: FormControl;
  matcher: ErrorStateMatcher;

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.titleControl = new FormControl('',
      [Validators.required, Validators.minLength(5)]);
    this.contentControl = new FormControl('',
      [Validators.required, Validators.minLength(10)]);
    this.todoForm = this.formBuilder.group({
      title: this.titleControl,
      content: this.contentControl
    });
    this.matcher = new CustomErrorsStateMatcher();

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
      title: this.todoForm.get('title').value,
      content: this.todoForm.get('content').value,
    };
    this.todoService.createTodo(todo).subscribe(next => {
      this.todoList.unshift(next);
    });
  }

  deleteTodo(i): void {
    const todo = this.todoList[i];
    this.todoService.deleteTodo(todo.id).subscribe(
      () => {
        this.todoList = this.todoList.filter(
          t => t.id !== todo.id
        );
      }
    );
  }

  onSubmit(): void {
    this.todoForm.markAllAsTouched();
    if (this.todoForm.valid) {
      this.addTodo();
      this.todoForm.reset();
    }
  }
}
