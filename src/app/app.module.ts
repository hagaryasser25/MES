import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourcesComponent } from './resources/resources.component';
import {MatInputModule} from '@angular/material/input';
import { GoogleChartsModule } from 'angular-google-charts';
import { MachinesComponent } from './machines/machines.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResourcesComponent,
    MachinesComponent,
    ManufacturingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({
      "units": "%",
      "outerStrokeLinecap": "butt"
    }),
    NgApexchartsModule,
    ReactiveFormsModule,
    MatInputModule,
    GoogleChartsModule,
    MatExpansionModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
