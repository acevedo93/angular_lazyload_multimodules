import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldsComponent } from './olds/olds.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent, OldsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
