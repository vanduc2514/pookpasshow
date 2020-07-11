import {Component, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postList: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => {
      this.postList = value;
    });
  }

  addToPostList(post: Post): void {
    this.postList.unshift(post);
  }

  showEditDialog(): void {

  }

  showDeleteDialog(): void {

  }
}
