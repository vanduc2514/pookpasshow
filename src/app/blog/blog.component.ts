import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postForm: FormGroup;
  postTitle: FormControl;
  postContent: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.postTitle = new FormControl('', [Validators.required, Validators.minLength(15)]);
    this.postContent = new FormControl('', [Validators.required, Validators.minLength(20)]);
    this.postForm = this.formBuilder.group({
      title: this.postTitle,
      content: this.postContent
    });
  }

  onSubmit(): void {
    this.postForm.markAllAsTouched();
    console.log(this.postForm.value);
    if (this.postForm.valid) {
      console.log('This form is Valid');
    }
  }
}
