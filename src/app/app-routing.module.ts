import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrFormComponent } from './cr-form/cr-form.component';

const routes: Routes = [
  {
    path: 'cr',  
    loadChildren: () => import('./cr-form/cr-form.module').then(m => m.CrFormModule),  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
