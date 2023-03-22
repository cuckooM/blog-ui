import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { LabelRoutingModule } from './label-routing.module';

const COMPONENTS: Array<Type<void>> = [];

@NgModule({
  imports: [SharedModule, LabelRoutingModule],
  declarations: COMPONENTS
})
export class LabelModule {}
