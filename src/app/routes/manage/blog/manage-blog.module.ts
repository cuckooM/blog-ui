import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { BlogAddComponent } from './add/add.component';
import { ManageBlogRoutingModule } from './manage-blog-routing.module';

const COMPONENTS: Array<Type<void>> = [BlogAddComponent];

@NgModule({
  imports: [EditorModule, SharedModule, ManageBlogRoutingModule, NzTagModule],
  declarations: COMPONENTS
})
export class ManageBlogModule {}
