import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  color ='blue';

  constructor() { }

  ngOnInit() {}

  onToggle(){
    this.color = this.color === 'blue' ? 'green' : 'blue';
  }

}
