import {Component, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../services/post.service';
import {MatDialog} from '@angular/material/dialog';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postList: Post[];

  constructor(private postService: PostService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => {
      this.postList = value;
    });
  }

  addToPostList(post: Post): void {
    this.postList.unshift(post);
  }

  showEditDialog(post: Post): void {
    const dialogRef = this.dialog.open(BlogEditComponent, {
      data: {
        title: post.title,
        content: post.body
      }
    });
  }

  showDeleteDialog(): void {

  }
}
