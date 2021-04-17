import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule,    ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './component/post-list/post-list.component';

import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';

import { PostCreateComponent } from './component/post-create/post-create.component';
import { CommentComponent } from './component/post-list/comment/comment.component';
import { HeaderComponent } from './component/header/header.component';

const appRoutes: Routes = [
  { path: 'post-list', component: PostListComponent },
  { path: 'post-create', component: PostCreateComponent },
  { path: 'post-list/comments/:id', component: CommentComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'post-list' }
];



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    CommentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService,UsersService,CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
