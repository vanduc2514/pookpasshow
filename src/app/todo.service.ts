import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITodo} from './itodo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {
  }

  getTodoList(count = 10): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this.API_URL).pipe(
      map(data => data.filter((todo, index) => index < count)
      ));
  }

  updateTodo(todo: ITodo): Observable<ITodo> {
    return this.httpClient.patch<ITodo>(`${this.API_URL}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  createTodo(todo: ITodo): Observable<ITodo> {
    return this.httpClient.post<ITodo>(`${this.API_URL}`, todo);
  }
}
