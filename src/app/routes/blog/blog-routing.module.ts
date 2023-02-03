import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogAddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'add', component: BlogAddComponent },
  { path: '', pathMatch: 'full', redirectTo: 'add' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
