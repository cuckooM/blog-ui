import { NgModule, Type } from '@angular/core';
import { TagSelectModule } from '@delon/abc/tag-select';
import { SharedModule } from '@shared';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { BlogAddComponent } from './add/add.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './detail/detail.component';
import { BlogListComponent } from './list/list.component';

const COMPONENTS: Array<Type<void>> = [BlogAddComponent, BlogAddComponent, BlogListComponent, BlogDetailComponent];

@NgModule({
  imports: [SharedModule, BlogRoutingModule, EditorModule, TagSelectModule, NzPaginationModule, NzStepsModule, NzTagModule, NzListModule],
  declarations: COMPONENTS
})
export class BlogModule {}
