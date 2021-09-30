import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MachinesComponent } from './machines/machines.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'machines', component: MachinesComponent},
  {path: 'manufacturing', component: ManufacturingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
