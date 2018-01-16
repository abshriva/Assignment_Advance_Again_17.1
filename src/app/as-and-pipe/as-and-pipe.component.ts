import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-as-and-pipe',
  templateUrl: './as-and-pipe.component.html',
  styleUrls: ['./as-and-pipe.component.css']
})
export class AsAndPipeComponent implements OnInit {

  lines:string[];
  constructor() {

    this.lines =[
      'hope is the thing with feathers',
      'that perches in the soul',
      'and signs the tune without the word',
      'and never stops at all'
    ];
   }

  ngOnInit() {
  }

}
