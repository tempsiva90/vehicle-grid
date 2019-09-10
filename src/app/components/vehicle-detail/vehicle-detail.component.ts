import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
@Input()vehicle={}
  constructor() { }

  ngOnInit() {
  }

}
