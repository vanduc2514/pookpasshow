import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: ':id',
        component: BlogDetailComponent
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
