import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogAddRichTextComponent } from './add-rich-text/add-rich-text.component';
import { BlogAddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'add', component: BlogAddComponent },
  { path: 'add-rich-text', component: BlogAddRichTextComponent },
  { path: '', pathMatch: 'full', redirectTo: 'add' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBlogRoutingModule {}
