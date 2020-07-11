import {Component, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../services/post.service';
import {MatDialog} from '@angular/material/dialog';
import {BlogEditDialogComponent} from './dialog/blog-edit-dialog/blog-edit-dialog.component';

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

  showEditDialog(index: number): void {
    const post = this.postList[index];
    const dialogRef = this.dialog.open(BlogEditDialogComponent, {
      width: '1000px',
      data: {
        title: post.title,
        content: post.body
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.postService.updatePost(result).subscribe(response =>
        this.postList[index] = response
      );
    });
  }

  showDeleteDialog(): void {

  }
}
