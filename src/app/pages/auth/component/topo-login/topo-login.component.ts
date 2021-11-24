import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'topo-login',
  templateUrl: './topo-login.component.html',
  styleUrls: ['./topo-login.component.scss'],
})
export class TopoLoginComponent implements OnInit {
  @Input() title;
  
  constructor() { }

  ngOnInit() {}

}
