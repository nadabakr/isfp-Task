import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDataComponent } from './show-data.component';
import { ShowDataRoutingModule } from './show-data-routing.module';
@NgModule({
  declarations: [ShowDataComponent],
  imports: [CommonModule, ShowDataRoutingModule],
})
export class ShowDataModule {}
