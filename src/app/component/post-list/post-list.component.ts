import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
// Model
import { PostModel } from '../../models/post.model';
import { UserModel } from '../../models/user.model';

// Service
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit, OnDestroy{

  posts: PostModel[];
  users: UserModel[];
  private subscriptionPost: Subscription;
  private subscriptionUser: Subscription;


  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.getPosts()
  }

  getPosts() {
    this.subscriptionPost=this.postsService.getPosts()
      .subscribe(posts => {this.posts = posts; this.setUserName()} )
    this.subscriptionUser=this.usersService.getUsers()
      .subscribe( users => {this.users = users; this.setUserName()})
  }

  setUserName() {
    if (this.posts && this.users) {
      for(const post of this.posts) {
        for(const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }

  onViewComment(id: number) {
      this.router.navigate(['/post-list', 'comments', id]);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptionPost.unsubscribe();
    this.subscriptionUser.unsubscribe();
  }

}
