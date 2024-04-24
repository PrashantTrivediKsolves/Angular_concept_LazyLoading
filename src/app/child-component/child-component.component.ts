import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  // title="Send data child to parent Component"
  constructor() { }
  @Output() updateDataChildEvent=new EventEmitter<string>()
  ngOnInit(): void {
  }

}
