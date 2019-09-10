import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
vehicles=[
  {
     "id": "xe",
     "modelYear": "k17",
     "url": "/api/vehicle/xe",
     "media": [
        {
           "name": "vehicle",
           "url": "/images/xe_k17.jpg"
        }
     ]
  },
  {
     "id": "xf",
     "modelYear": "k17",
     "url": "/api/vehicle/xf",
     "media": [
        {
           "name": "vehicle",
           "url": "/images/xf_k17.jpg"
        }
     ]
  },
  {
     "id": "xj",
     "modelYear": "k16",
     "url": "/api/vehicle/xj",
     "media": [
        {
           "name": "vehicle",
           "url": "/images/xj_k16.jpg"
        }
     ]
  },
  {
     "id": "fpace",
     "modelYear": "k17",
     "url": "/api/vehicle/fpace",
     "media": [
        {
           "name": "vehicle",
           "url": "/images/fpace_k17.jpg"
        }
     ]
  },
  {
     "id": "ftype",
     "modelYear": "k17",
     "url": "/api/vehicle/ftype",
     "media": [
        {
           "name": "vehicle",
           "url": "/images/ftype_k17.jpg"
        }
     ]
  }
]
  constructor(private api:ApiService) { }

  ngOnInit() {
    // this.api.getVehicles().subscribe((vechicleResponse)=>{
    //   this.vehicles=vechicleResponse
    // })
  }

}
