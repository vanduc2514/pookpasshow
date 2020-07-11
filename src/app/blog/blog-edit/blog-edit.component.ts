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

  constructor(
    public dialogRef: MatDialogRef<BlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  onSubmitForm(post: Post): void {
    this.dialogRef.close();
    console.log(post);
  }
}
