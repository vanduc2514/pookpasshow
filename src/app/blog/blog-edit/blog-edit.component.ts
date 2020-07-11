import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BlogComponent} from '../blog.component';
import {Post} from '../../model/post';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {
  post: Post;

  constructor(
    public dialogRef: MatDialogRef<BlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.post = this.data;
  }

  onSubmitForm(post: Post): void {
    this.post = post;
    this.dialogRef.close(this.post);
  }
}
