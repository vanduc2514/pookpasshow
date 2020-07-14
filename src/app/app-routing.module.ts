import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./blog-todo-routing/blog-todo-routing.module').then(module => module.BlogTodoRoutingModule)
  }
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
