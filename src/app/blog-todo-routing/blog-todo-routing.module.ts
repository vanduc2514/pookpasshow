import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from "../blog/blog.component";
import {TodoComponent} from "../todo/todo.component";

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogTodoRoutingModule { }
