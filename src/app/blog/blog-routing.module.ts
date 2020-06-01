import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPostsComponent } from "./all-posts/all-posts.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { CategoriesComponent } from "./categories/categories.component";
import { TagsComponent } from "./tags/tags.component";
import { TagsUpdateComponent } from "./tags/tags-update/tags-update.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllPostsComponent,
        data: {
          // title: 'Posts',
          urls: [
            { title: 'Dashboard', url: '/' },
            { title: 'All Posts' }
          ]
        }
      },
   ]  
  },
  {
    path: '',
    children: [
      {
        path: 'tags',
        component: TagsComponent,
        data: {
          // title: 'Tags',
          urls: [
            { title: 'Posts', url: '/post/all' },
            { title: 'All Tags' }
          ]
        }
      },
   ]  
 },
 {
   path: '',
   children: [
     {
       path: 'tag/:tagId',
       component: TagsUpdateComponent,
       data: {
         // title: 'Tags',
         urls: [
           { title: 'Tags', url: '/post/tags' },
           { title: 'Update Tag' }
         ]
       }
     },
  ]  
},
 {
   path: '',
   children: [
     {
       path: 'add',
       component: AddPostComponent,
       data: {
        //  title: 'Add Post',
         urls: [
           { title: 'Posts', url: '/post/all' },
           { title: 'Add Post' }
         ]
       }
     },
  ]  
},
{
  path: '',
  children: [
    {
      path: 'categories',
      component: CategoriesComponent,
      data: {
        // title: 'Categories',
        urls: [
          { title: 'Posts', url: '/post/all' },
          { title: 'All Categories' }
        ]
      }
    },
 ]  
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
