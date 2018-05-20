import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableComponent } from '../../app/data-table/data-table.component';
import { PageNotFoundComponentComponent } from '../../app/page-not-found-component/page-not-found-component.component';

const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'orders/list', component: DataTableComponent },
  { path: 'hero/:id',      component: DataTableComponent },
  // {
  //   path: 'heroes',
  //   component: Data,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
