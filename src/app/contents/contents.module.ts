import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbedNavComponent } from './tabbed-nav/tabbed-nav.component';
import { ContentsComponent } from './contents.component';



@NgModule({
  declarations: [
    ContentsComponent,
    TabbedNavComponent    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContentsComponent,
    TabbedNavComponent
  ]
})
export class ContentsModule { }
