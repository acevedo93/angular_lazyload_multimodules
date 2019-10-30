import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';

const routes: Routes = [{
 path: '',
 component: NewsComponent,
 children: [
   {
     path: '',
     redirectTo: 'list',
     pathMatch: 'full'
   },
   {
     path: 'list',
     loadChildren: () => import('./list/list.module').then(m => m.ListModule),
   },
   {
    path: 'edit-news',
    loadChildren: () => import('./edit-news/edit-news.module').then(m => m.EditNewsModule),
  },
  {
    path: 'delete-news',
    loadChildren: () => import('./delete-news/delete-news.module').then(m => m.DeleteNewsModule),
  },
 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
