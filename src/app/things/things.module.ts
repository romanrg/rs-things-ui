import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThingsListComponent } from './components/things-list/things-list.component';
import { thingsRoutes } from './things.routing';
import { ThingsService } from './things.service';
import { ThingAddComponent } from './components/thing-add/thing-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThingsListComponent, ThingAddComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(thingsRoutes), ReactiveFormsModule],
  providers: [ThingsService],
})
export class ThingsModule {}
