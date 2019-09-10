import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { HttpClientModule } from "@angular/common/http";
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleCardComponent,
    ImageUrlPipe,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
