import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { EditorModule } from '@tinymce/tinymce-angular';

import { BlogAddComponent } from './add/add.component';
import { BlogRoutingModule } from './blog-routing.module';

const COMPONENTS: Array<Type<void>> = [BlogAddComponent, BlogAddComponent];

@NgModule({
  imports: [SharedModule, BlogRoutingModule, EditorModule],
  declarations: COMPONENTS
})
export class BlogModule {}
