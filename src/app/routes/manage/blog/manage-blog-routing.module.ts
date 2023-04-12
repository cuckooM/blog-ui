import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageBlogAddRichTextComponent } from './add-rich-text/add-rich-text.component';
import { ManageBlogAddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'add', component: ManageBlogAddComponent },
  { path: 'add-rich-text', component: ManageBlogAddRichTextComponent },
  { path: '', pathMatch: 'full', redirectTo: 'add' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBlogRoutingModule {}
