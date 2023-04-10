import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogDetailComponent } from './detail/detail.component';
import { BlogListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'list', component: BlogListComponent },
  { path: ':id', component: BlogDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
