import { NgModule } from '@angular/core';
import { NgPikchatClientComponent } from './ng-pikchat-client.component';
import { TimeAgoPipe } from './timeAgo.pipe';


@NgModule({
  declarations: [
    NgPikchatClientComponent,
    TimeAgoPipe
  ],
  imports: [
  ],
  exports: [
    NgPikchatClientComponent
  ]
})
export class NgPikchatClientModule { }
