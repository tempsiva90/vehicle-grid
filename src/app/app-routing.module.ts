import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';


const routes: Routes = [{
  path:'',component:VehicleListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
