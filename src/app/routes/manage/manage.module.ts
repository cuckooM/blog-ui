import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { ManageRoutingModule } from './manage-routing.module';

const COMPONENTS: Array<Type<void>> = [];

@NgModule({
  imports: [SharedModule, ManageRoutingModule],
  declarations: COMPONENTS
})
export class ManageModule {}
