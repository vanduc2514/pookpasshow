import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getAll(count = 10): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.API_URL).pipe(
      map(response => response.filter((post, index) => index < count))
    );
  }

  submitPost(postSubmit: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.API_URL, postSubmit);
  }

  updatePost(postSelected: Post): Observable<Post> {
    return this.httpClient.patch<Post>(`${this.API_URL}/${postSelected.id}`, postSelected);
  }

  deletePost(index: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${index}`);
  }
}
