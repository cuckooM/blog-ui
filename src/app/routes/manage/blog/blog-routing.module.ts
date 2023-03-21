import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogAddComponent } from './add/add.component';
import { BlogListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'add', component: BlogAddComponent },
  { path: 'list', component: BlogListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}