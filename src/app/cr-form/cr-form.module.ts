import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrFormComponent } from './cr-form.component';
import { CrFormRoutingModule } from './cr-form-routing.module';

const EXPORTS = [CrFormComponent];
@NgModule({
  declarations: [...EXPORTS ],
  imports: [
    CommonModule,
    CrFormRoutingModule
  ],
  exports: [...EXPORTS]
})
export class CrFormModule {
  static exports = EXPORTS; 
 }
