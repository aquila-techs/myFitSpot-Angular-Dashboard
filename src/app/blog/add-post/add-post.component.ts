import { Component, OnInit,ViewChild } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import Quill from 'quill'
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';  
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from "../services/blog.service";
import { Router } from "@angular/router";
import { GoogleTranslateService  } from "../../services/google-translate.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  blurred = false;
  focused = false;
  post = { title: "",url:"", description: "" ,excerpt:"",categories:[],tags:[]};
 
  fileName;
  file;
  imageUrl: string | ArrayBuffer = "";
  dropdownList = [] as any;
  selectedItems = [];
 
  categories = [];

  private translateBtn: any;
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private blogSer:BlogService, private toastr: ToastrService,private router:Router,private googleTrans:GoogleTranslateService) { }
  
  ngOnInit(): void {
    this.blogSer.getUserTags().subscribe(res => {
      console.log("Tags:", res)
      if (res.status === true) {
        this.dropdownList = res.data
      }
    })
    this.blogSer.getUserCategories().subscribe(res => {
      console.log("Categories", res)
      if (res.status === true) {
        this.categories = res.data;         
      }
    })
    this.translateBtn = document.getElementById('translatebtn');
  }

  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
    if (event.event == "text-change") {
      this.post.description = event.html;
      console.log(this.post.description)      
    }

  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blurred = true
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  addCategory(catId) {
    // console.log(catId)
    let check = this.post.categories.includes(catId);
    // console.log("Check:",check)
    if (check === true) {
      this.post.categories = this.post.categories.filter(ele => ele != catId);
      // console.log("Post Categories from True:",this.post.categories);
    } else{
      this.post.categories.push(catId);
      // console.log("Post Categories from false:",this.post.categories)
   } 
  }

  gotoPost() {
    
  }

  publishPost() {
    console.log(this.post)
    this.blogSer.createPost(this.post,this.file).subscribe(res => {
      console.log(res)
      if (res.status == true) {
        this.toastr.success("Post Published!", 'Success!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
        setTimeout(()=>this.router.navigateByUrl('/post/all'),1000)
      } else {
        this.toastr.error(res.message, 'Oops!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      }
    })
  }

  onChange(file: File) {
    // console.log(file)
    if (file) {
      this.fileName = file.name;
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    }
  }

  translatePost() {
    const googleObj = {
      q: [this.post.title, this.post.description, this.post.excerpt],
      // target: this.lang.value
      target:'nl'
    };
    this.translateBtn.disabled = true;
    this.googleTrans.translate(googleObj).subscribe(res => {
      console.log(res);
      this.translateBtn.disabled = false;
    })
  }


}
