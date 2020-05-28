import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { BlogService } from "../services/blog.service";

  
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};
  category  = { name: "", slug: "", description: "" } as any;
  parentCategory = "";
  Categories;
  constructor(private blogSer: BlogService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.blogSer.getUserCategories().subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.Categories = res.data        
      }
    })
  }

  addCategory() {
    if (this.parentCategory !== "") {
      this.category.parentCategory = this.parentCategory
    }
    console.log(this.category)    
    this.blogSer.creatCategory(this.category).subscribe(res => {
      if (res.status == true) {
        this.ngOnInit()
        this.toastr.success("Category Added!", 'Success!', {timeOut: 3000,closeButton: true,progressBar:true,progressAnimation:'decreasing'});        
      } else {
        this.toastr.error(res.message, 'Oops!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      }
    })
  }

}
