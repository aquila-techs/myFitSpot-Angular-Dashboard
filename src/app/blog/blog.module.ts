import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

import Counter from './counter';

import { BlogRoutingModule } from './blog-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategoriesUpdateComponent } from './categories/categories-update/categories-update.component';
import { TagsUpdateComponent } from './tags/tags-update/tags-update.component';


@NgModule({
  declarations: [AllPostsComponent, AddPostComponent, CategoriesComponent, TagsComponent, CategoriesUpdateComponent, TagsUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NgMultiSelectDropDownModule.forRoot(),
    AccordionModule,
    QuillModule.forRoot({
      customModules: [{
        implementation: Counter,
        path: 'modules/counter'
      }],
      customOptions: [{
        import: 'formats/font',
        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
      }]
    }),
    BlogRoutingModule
  ]
})
export class BlogModule { }
