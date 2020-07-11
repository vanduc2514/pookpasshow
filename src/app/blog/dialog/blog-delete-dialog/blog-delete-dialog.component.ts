import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {BlogComponent} from '../../blog.component';

@Component({
  selector: 'app-blog-delete-dialog',
  templateUrl: './blog-delete-dialog.component.html',
  styleUrls: ['./blog-delete-dialog.component.scss']
})
export class BlogDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BlogComponent>) {
  }

  ngOnInit(): void {
  }

}
