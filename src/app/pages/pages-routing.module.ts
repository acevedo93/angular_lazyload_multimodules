import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NewsComponent } from './news/news.component';
import { OldsComponent } from './olds/olds.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'news',
      pathMatch: 'full'
    },

    {
      path: 'news',
      loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
    },
    {
      path: 'olds',
      component: OldsComponent,
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
