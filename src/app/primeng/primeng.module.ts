import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    ListboxModule,
    MenubarModule,
    TabViewModule
  ]
})
export class PrimengModule { }
