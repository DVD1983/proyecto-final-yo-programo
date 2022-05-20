import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'BoxComponent',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  public title:string;
  public description:string;

  constructor() { 
    this.title = "Title"
    this.description = "descriptiondescriptiondescriptiondescriptiondescription"


  }

  ngOnInit(): void {
  }

}
