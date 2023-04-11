import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MarkdownModule } from 'ngx-markdown';

import { BlogAddRichTextComponent } from './add-rich-text/add-rich-text.component';
import { BlogAddComponent } from './add/add.component';
import { ManageBlogRoutingModule } from './manage-blog-routing.module';

const COMPONENTS: Array<Type<void>> = [BlogAddComponent, BlogAddRichTextComponent];

@NgModule({
  imports: [EditorModule, SharedModule, ManageBlogRoutingModule, NzTagModule, MarkdownModule.forRoot()],
  declarations: COMPONENTS
})
export class ManageBlogModule {}
