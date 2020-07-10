import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {
  postForm: FormGroup;
  postTitle: FormControl;
  postContent: FormControl;

  @Output()
  SubmittedPostEvent: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(private formBuilder: FormBuilder,
              private postService: PostService) {
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
    if (this.postForm.valid) {
      alert('Form Valid');
      const postSubmit: Partial<Post> = {
        title: this.postForm.get('title').value,
        body: this.postForm.get('content').value
      };
      this.postService.submitPost(postSubmit)
        .subscribe(value => this.SubmittedPostEvent.emit(value));
    }
  }
}
