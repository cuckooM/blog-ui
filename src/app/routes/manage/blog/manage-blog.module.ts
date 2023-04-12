import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MarkdownModule } from 'ngx-markdown';

import { ManageBlogAddRichTextComponent } from './add-rich-text/add-rich-text.component';
import { ManageBlogAddComponent } from './add/add.component';
import { ManageBlogRoutingModule } from './manage-blog-routing.module';

const COMPONENTS: Array<Type<void>> = [ManageBlogAddComponent, ManageBlogAddRichTextComponent];

@NgModule({
  imports: [
    EditorModule,
    SharedModule,
    ManageBlogRoutingModule,
    NzListModule,
    NzPaginationModule,
    NzStepsModule,
    NzTagModule,
    MarkdownModule.forRoot()
  ],
  declarations: COMPONENTS
})
export class ManageBlogModule {}
