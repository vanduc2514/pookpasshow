import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  postForm: FormGroup;
  postTitle: FormControl;
  postContent: FormControl;

  @Input()
  stateTitle = '';

  @Input()
  stateContent = '';

  @Output()
  SubmittedPostEvent: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(private formBuilder: FormBuilder,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.postTitle = new FormControl(this.stateTitle,
      [Validators.required, Validators.minLength(15)]);
    this.postContent = new FormControl(this.stateContent,
      [Validators.required, Validators.minLength(20)]);

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
