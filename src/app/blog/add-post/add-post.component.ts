import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import Quill from 'quill'
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';  
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  blurred = false;
  focused = false;
  post = { title: "", body: "" };
  
  dropdownList = [
    { id: 1, item_text: 'Mumbai' },
    { id: 2, item_text: 'Bangaluru' },
    { id: 3, item_text: 'Pune' },
    { id: 4, item_text: 'Navsari' },
    { id: 5, item_text: 'New Delhi' }
  ];
  selectedItems = [];
  // settings:IDropdownSettings = {
  //   singleSelection: false,
  //   idField: "id",
  //   textField: 'item_text',
  //   selectAllText: 'Select All',
  //   unSelectAllText: 'UnSelect All',
  //   itemsShowLimit: 3,
  //   allowSearchFilter: true
  // };
  // closeDropdownSelection = false;



  public config: PerfectScrollbarConfigInterface = {};

  constructor() { }
  ngOnInit(): void {
    // this.dropdownList = [
    //   { id: 1, item_text: 'Mumbai' },
    //   { id: 2, item_text: 'Bangaluru' },
    //   { id: 3, item_text: 'Pune' },
    //   { id: 4, item_text: 'Navsari' },
    //   { id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //    3 , 4
    // ];

  }

  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
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


}
