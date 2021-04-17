import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';


// Model
import { CommentModel } from '../../../models/comment.model';
// Service
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy{
  comments: CommentModel[]
  private subscription: Subscription;
  postId:number;

  constructor(
    private commentsService: CommentsService,
    private route: ActivatedRoute
  ) { }

  getComments(id:number): void {
    this.subscription=this.commentsService.getComments(id)
      .subscribe(comments => this.comments = comments)
  }


  ngOnInit() {
    this.postId= this.route.snapshot.params['id'];
    this.getComments(this.postId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
