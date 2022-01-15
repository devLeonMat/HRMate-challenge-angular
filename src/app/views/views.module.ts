import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {DialogsModule} from "./dialogs/dialogs.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
  ],
  imports: [
    DialogsModule,
    SharedModule

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewsModule {
}
