import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BlogComponent} from '../../blog.component';
import {Post} from '../../../model/post';

@Component({
  selector: 'app-blog-edit-dialog',
  templateUrl: './blog-edit-dialog.component.html',
  styleUrls: ['./blog-edit-dialog.component.scss']
})
export class BlogEditDialogComponent implements OnInit {
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
