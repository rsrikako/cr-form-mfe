import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrFormComponent } from './cr-form.component';

const routes: Routes = [
  {
    path: 'crForm', component: CrFormComponent    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrFormRoutingModule {}
